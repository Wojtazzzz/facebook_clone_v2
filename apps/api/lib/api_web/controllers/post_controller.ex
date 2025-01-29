defmodule ApiWeb.PostController do
  use ApiWeb, :controller

  import RequestUtils
  alias Api.Posts

  def index(conn, params) do
    offset = get_integer_param(params, "offset", 0)
    limit = get_integer_param(params, "limit", 1)

    posts = Posts.get_posts_for_user(conn.assigns.current_user.id, offset, limit)

    render(conn, :index, posts: posts)
  end
end
