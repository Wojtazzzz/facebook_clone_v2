defmodule ApiWeb.UserPostController do
  use ApiWeb, :controller

  alias Api.Accounts

  def index(conn, %{"user_id" => user_id}) do
    case Integer.parse(user_id) do
      {id, ""} ->
        user = Accounts.get_user_with_posts(id)
        render(conn, :index, user: user)

      _ ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Invalid user_id param"})
    end
  end
end
