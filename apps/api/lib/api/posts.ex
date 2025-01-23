defmodule Api.Posts do
  @moduledoc """
  The Posts context.
  """

  import Ecto.Query, warn: false
  alias Api.Posts.PostLike
  alias Api.Repo

  alias Api.Posts.Post
  alias Api.Accounts

  @doc """
  Returns the list of posts.

  ## Examples

      iex> list_posts()
      [%Post{}, ...]

  """

  # def list_posts do
  #   Repo.all(Post)
  # end

  @doc """
  Gets a single post.

  Raises `Ecto.NoResultsError` if the Post does not exist.

  ## Examples

      iex> get_post!(123)
      %Post{}

      iex> get_post!(456)
      ** (Ecto.NoResultsError)

  """

  # def get_post!(id), do: Repo.get!(Post, id)

  @doc """
  Creates a post.

  ## Examples

      iex> create_post(%{field: value})
      {:ok, %Post{}}

      iex> create_post(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """

  # def create_post(attrs \\ %{}) do
  #   %Post{}
  #   |> Post.changeset(attrs)
  #   |> Repo.insert()
  # end

  @doc """
  Updates a post.

  ## Examples

      iex> update_post(post, %{field: new_value})
      {:ok, %Post{}}

      iex> update_post(post, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """

  # def update_post(%Post{} = post, attrs) do
  #   post
  #   |> Post.changeset(attrs)
  #   |> Repo.update()
  # end

  @doc """
  Deletes a post.

  ## Examples

      iex> delete_post(post)
      {:ok, %Post{}}

      iex> delete_post(post)
      {:error, %Ecto.Changeset{}}

  """

  # def delete_post(%Post{} = post) do
  #   Repo.delete(post)
  # end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking post changes.

  ## Examples

      iex> change_post(post)
      %Ecto.Changeset{data: %Post{}}

  """

  # def change_post(%Post{} = post, attrs \\ %{}) do
  #   Post.changeset(post, attrs)
  # end

  @doc """
  Gets a list of posts assigned to the specified user.

  ## Examples

      iex> get_user_posts(123)
      %Post{}

      iex> get_user_posts(456)
      ** (Ecto.NoResultsError)

  """
  def get_user_posts(user_id) do
    Post
    |> Ecto.Query.where(user_id: ^user_id)
    |> Repo.all()
  end

  @doc """
  Gets a list of posts assigned to the specified user and his friends.

  ## Examples

      iex> get_posts_for_user(123)
      %Post{}

      iex> get_posts_for_user(456)
      ** (Ecto.NoResultsError)

  """
  def get_posts_for_user(user_id, offset, limit)
      when is_integer(user_id) and is_integer(offset) and is_integer(limit) do
    friends = Accounts.get_user_friends(user_id)

    Repo.all(
      from p in Post,
        where: p.user_id in ^[user_id | Enum.map(friends, & &1.id)],
        join: u in assoc(p, :user),
        order_by: [desc: p.inserted_at],
        left_join: pl in "post_likes",
        on: pl.post_id == p.id and pl.user_id == ^user_id,
        limit: ^limit,
        offset: ^offset,
        select: %{
          id: p.id,
          content: p.content,
          isLiked: not is_nil(pl.id),
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
end
