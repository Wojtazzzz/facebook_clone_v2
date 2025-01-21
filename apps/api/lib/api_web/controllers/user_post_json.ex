defmodule ApiWeb.UserPostJSON do
  alias Api.Posts.Post
  alias Api.Accounts.User

  @doc """
  Renders a list of posts of the logged user.
  """
  def index(%{user: %User{} = user}) do
    %{
      data: %{
        id: user.id,
        image_url: user.image_url,
        first_name: user.first_name,
        last_name: user.last_name,
        posts: for(post <- user.posts, do: data(post))
      }
    }
  end

  defp data(%Post{} = post) do
    %{
      id: post.id,
      content: post.content,
      inserted_at: post.inserted_at
    }
  end
end
