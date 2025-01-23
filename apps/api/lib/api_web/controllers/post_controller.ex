defmodule ApiWeb.PostController do
  use ApiWeb, :controller

  alias Api.Posts

  def index(conn, params) do
    offset = parse_integer(params["offset"], 0)
    limit = parse_integer(params["limit"], 1)

    posts = Posts.get_posts_for_user(conn.assigns.current_user.id, offset, limit)

    render(conn, :index, posts: posts)
  end

  defp parse_integer(value, default) do
    case Integer.parse(value) do
      {int, _} -> int
      :error -> default
    end
  end
end
