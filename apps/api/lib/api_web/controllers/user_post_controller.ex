defmodule ApiWeb.UserPostController do
  use ApiWeb, :controller

  import RequestUtils
  alias Api.Accounts

  def index(conn, params) do
    case Integer.parse(params["user_id"]) do
      {user_id, ""} ->
        offset = get_integer_param(params, "offset", 0)
        limit = get_integer_param(params, "limit", 1)

        user = Accounts.get_user_with_posts(user_id, offset, limit)
        render(conn, :index, user: user)

      _ ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Invalid user_id param"})
    end
  end
end
