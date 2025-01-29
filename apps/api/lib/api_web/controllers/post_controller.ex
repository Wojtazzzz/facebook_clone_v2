defmodule ApiWeb.PostController do
  use ApiWeb, :controller

  import RequestUtils
  alias ApiWeb.FallbackController
  alias Api.Posts

  action_fallback FallbackController

  def index(conn, params) do
    offset = get_integer_param(params, "offset", 0)
    limit = get_integer_param(params, "limit", 1)

    posts = Posts.get_posts_for_user(conn.assigns.current_user.id, offset, limit)

    render(conn, :index, posts: posts)
  end

  def create(conn, params) do
    with {:ok, post} <-
           Posts.create_post(
             Map.merge(
               params,
               %{"user_id" => conn.assigns.current_user.id}
             )
           ) do
      render(conn, :new, post: post)
    end
  end
end
