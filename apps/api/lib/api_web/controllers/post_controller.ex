defmodule ApiWeb.PostController do
  use ApiWeb, :controller

  alias Api.Posts

  def index(conn, _params) do
    posts = Posts.get_posts_for_user(conn.assigns.current_user.id)
    render(conn, :index, posts: posts)
  end
end
