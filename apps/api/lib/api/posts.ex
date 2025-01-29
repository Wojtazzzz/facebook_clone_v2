defmodule Api.Posts do
  @moduledoc """
  The Posts context provides functions to manage posts and interactions such as likes,
  comments or retrieving detailed user activities.
  """

  import Ecto.Query, warn: false
  alias Api.Posts.PostLike
  alias Api.Repo

  alias Api.Posts.Post
  alias Api.Accounts

  @doc """
  Gets a list of posts created by the specified user.

  Returns an empty list if the user does not exist or has no posts.

  ## Examples

      iex> get_user_posts(1)
      [%Post{}, %Post{}]

      iex> get_user_posts(123)
      []
  """
  @spec get_user_posts(integer) :: [Post.t()]
  def get_user_posts(user_id) do
    Post
    |> Ecto.Query.where(user_id: ^user_id)
    |> Repo.all()
  end

  @doc """
  Gets a list of posts created by the specified user and his friends.

  Posts are sorted by insertion time in descending order. Paginated using `offset` and `limit`.

  Raises `KeyError` if the user does not exist.

  Returns an empty list if the user and his friends have no posts.

  ## Examples

      iex> get_posts_for_user(1)
      [
        %{
          id: 1,
          user: %{
            id: 1,
            first_name: "John",
            last_name: "Doe",
            image_url: "https://gravatar.com/avatar/b0a8c4bbc0ef26b4f5be6d8f2af30634?s=400&d=robohash&r=x"
          },
          inserted_at: ~U[2025-01-20 20:13:20Z],
          content: "Lorem ipsum dolor sit amet consectetur",
          is_liked: false,
          likes: 1
        }
      ]
  """
  @spec get_posts_for_user(integer, integer, integer) :: [map()]
  def get_posts_for_user(user_id, offset, limit)
      when is_integer(user_id) and is_integer(offset) and is_integer(limit) do
    friends = Accounts.get_user_friends(user_id)

    Repo.all(
      from p in Post,
        where: p.user_id in ^[user_id | Enum.map(friends, & &1.id)],
        join: u in assoc(p, :user),
        order_by: [desc: p.inserted_at],
        left_join: plu in "post_likes",
        on: plu.post_id == p.id and plu.user_id == ^user_id,
        left_join: pl in assoc(p, :post_likes),
        limit: ^limit,
        offset: ^offset,
        group_by: [p.id, plu.id, u.id],
        select: %{
          id: p.id,
          content: p.content,
          is_liked: not is_nil(plu.id),
          likes: count(pl.id),
          inserted_at: p.inserted_at,
          user: %{
            id: u.id,
            first_name: u.first_name,
            last_name: u.last_name,
            image_url: u.image_url
          }
        }
    )
  end

  @doc """
  Adds a like to the post.

  Raises `Ecto.ConstraintError` when user does not exist.

  ## Parameters
  - `attrs`: A map with keys `:user_id` (integer) and `:post_id` (integer).

  ## Returns
  - `{:ok, %PostLike{}}` on success.
  - `{:error, %Ecto.Changeset{}}` if the post is already liked.
  - `{:error, String.t()}` if the post does not exist.

  ## Examples

      iex> create_post_like(%{user_id: 1, post_id: 1})
      {:ok, %Api.Posts.PostLike{}}

      iex> create_post_like(%{user_id: 1, post_id: 1})
      {:error, %Ecto.Changeset{}}

      iex> create_post_like(%{user_id: 1, post_id: 12343})
      {:error, "Post does not exist."}
  """
  @spec create_post_like(map()) ::
          {:ok, Api.Posts.PostLike.t()} | {:error, Ecto.Changeset.t()} | {:error, String.t()}
  def create_post_like(attrs) do
    from(p in Post, where: p.id == ^attrs.post_id)
    |> Repo.one()
    |> case do
      nil ->
        {:error, "Post does not exist."}

      _ ->
        %PostLike{}
        |> PostLike.changeset(attrs)
        |> Repo.insert()
    end
  end

  @doc """
  Removes a like from the post.

  Returns an error tuple if post or user do not exist or user did not like that post.

  ## Parameters
  - `attrs`: A map with keys `:user_id` (integer) and `:post_id` (integer).

  ## Returns
  - `{:ok, %Api.Posts.PostLike{}}` on success.
  - `{:error, String.t()}` on error.

  ## Examples

      iex> delete_post_like(%{user_id: 1, post_id: 1})
      {:ok, %Api.Posts.PostLike{}}

      iex> delete_post_like(%{user_id: 1, post_id: 2})
      {:error, "The user did not like that post."}
  """
  @spec delete_post_like(map()) :: {:ok, Api.Posts.PostLike.t()} | {:error, String.t()}
  def delete_post_like(%{post_id: post_id, user_id: user_id}) do
    from(pl in PostLike, where: pl.post_id == ^post_id and pl.user_id == ^user_id)
    |> Repo.one()
    |> case do
      post_like when is_struct(post_like) ->
        Repo.delete(post_like)

      nil ->
        {:error, "The user did not like that post."}
    end
  end

  @doc """
  Gets a detailed information about a single post, including author details and whether the given user liked the post.

  Raises `KeyError` if the user does not exist.

  ## Parameters
  - `post_id`: The ID of the post.
  - `user_id`: The ID of the user.

  ## Examples
      iex> get_posts_for_user(1)
      %{
        id: 1,
        user: %{
          id: 1,
          first_name: "John",
          last_name: "Doe",
          image_url: "https://gravatar.com/avatar/b0a8c4bbc0ef26b4f5be6d8f2af30634?s=400&d=robohash&r=x"
        },
        inserted_at: ~U[2025-01-20 20:13:20Z],
        content: "Lorem ipsum dolor sit amet",
        is_liked: true,
        likes: 1
      }
  """
  @spec get_post_data_by_id!(integer, integer) :: map()
  def get_post_data_by_id!(post_id, user_id) when is_integer(post_id) and is_integer(user_id) do
    Repo.one(
      from p in Post,
        where: p.id == ^post_id,
        join: u in assoc(p, :user),
        order_by: [desc: p.inserted_at],
        left_join: plu in "post_likes",
        on: plu.post_id == p.id and plu.user_id == ^user_id,
        left_join: pl in assoc(p, :post_likes),
        group_by: [p.id, plu.id, u.id],
        select: %{
          id: p.id,
          content: p.content,
          is_liked: not is_nil(plu.id),
          likes: count(pl.id),
          inserted_at: p.inserted_at,
          user: %{
            id: u.id,
            first_name: u.first_name,
            last_name: u.last_name,
            image_url: u.image_url
          }
        }
    )
  end

  @doc """
  Create a single post.

  ## Examples
      iex> create_post(%{content: "Lorem ipsum.", user_id: 1})
      {:ok, %Api.Posts.Post{}}

      iex> create_post(%{content: "Lorem ipsum."})
      {:error, changeset}
  """
  @spec create_post(map()) :: {:ok, Ecto.Schema.t()} | {:error, Ecto.Changeset.t()}
  def create_post(attrs) do
    %Api.Posts.Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end
end
