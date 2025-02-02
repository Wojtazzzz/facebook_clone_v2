defmodule ApiWeb.PostJSON do
  @doc """
  Renders a list of posts of the logged user.
  """
  def index(%{posts: posts}) do
    %{
      data: for(post <- posts, do: data(post))
    }
  end

  def new(params) do
    data(
      Map.merge(
        params.post,
        %{
          is_liked: false,
          likes: 0,
          user: params.conn.assigns.current_user
        }
      )
    )
  end

  defp data(post) do
    %{
      id: post.id,
      content: post.content,
      is_liked: post.is_liked,
      likes: post.likes,
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
