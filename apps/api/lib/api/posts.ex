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

  @doc """
  Gets a single post by id.

  Raises `Ecto.NoResultsError` if the Post does not exist.

  Examples

      iex> get_post!(123)
      %Post{}

      iex> get_post!(456)
      ** (Ecto.NoResultsError)

  """
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
end
