defmodule ApiWeb.PostJSON do
  @doc """
  Renders a list of posts of the logged user.
  """
  def index(%{posts: posts}) do
    %{
      data: for(post <- posts, do: data(post))
    }
  end

  defp data(post) do
    %{
      id: post.id,
      content: post.content,
      isLiked: post.isLiked,
      inserted_at: post.inserted_at,
      user: %{
        id: post.user.id,
        first_name: post.user.first_name,
        last_name: post.user.last_name,
        image_url: post.user.image_url
      }
    }
  end
end
