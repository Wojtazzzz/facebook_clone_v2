defmodule ApiWeb.UserPostController do
  use ApiWeb, :controller

  alias Api.Accounts

  def index(conn, params) do
    case Integer.parse(params["user_id"]) do
      {user_id, ""} ->
        offset = parse_integer(params["offset"], 0)
        limit = parse_integer(params["limit"], 1)

        user = Accounts.get_user_with_posts(user_id, offset, limit)
        render(conn, :index, user: user)

      _ ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Invalid user_id param"})
    end
  end

  defp parse_integer(value, default) do
    case Integer.parse(value) do
      {int, _} -> int
      :error -> default
    end
  end
end
