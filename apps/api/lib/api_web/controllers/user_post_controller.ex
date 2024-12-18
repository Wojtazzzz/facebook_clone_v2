defmodule ApiWeb.UserPostController do
  use ApiWeb, :controller

  alias Api.Posts

  def index(conn, _params) do
    posts = Posts.get_user_posts(conn.assigns.current_user.id)
    render(conn, :index, posts: posts)
  end

  # def create(conn, %{"post" => log_params}) do
  #   with {:ok, %Post{} = post} <- Logs.create_log(log_params) do
  #     conn
  #     |> put_status(:created)
  #     |> put_resp_header("location", ~p"/api/logs/#{log}")
  #     |> render(:show, log: log)
  #   end
  # end
end
