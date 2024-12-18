defmodule ApiWeb.UserPostJSON do
  alias Api.Posts.Post

  @doc """
  Renders a list of posts of the logged user.
  """
  def index(%{posts: posts}) do
    %{data: for(post <- posts, do: data(post))}
  end

  defp data(%Post{} = post) do
    %{
      id: post.id,
      title: post.title,
      content: post.content,
    }
  end
end
