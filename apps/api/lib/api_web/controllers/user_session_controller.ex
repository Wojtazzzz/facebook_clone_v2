defmodule ApiWeb.UserSessionController do
  use ApiWeb, :controller

  alias Api.Accounts
  alias ApiWeb.UserAuth

  def show(conn, _params) do
    conn
    |> render(:me, user: conn.assigns.current_user)
  end

  def create(conn, params) do
    %{
      "user" => %{
        "email" => email,
        "password" => password
      }
    } = params

    if user = Accounts.get_user_by_email_and_password(email, password) do
      token = UserAuth.log_in_user(user)

      render(conn, :new, user: user, token: token)
    else
      conn
      |> put_status(401)
      |> render(:error, error: "Invalid email or password")
    end
  end

  def delete(conn, _params) do
    conn
    |> UserAuth.log_out_user()
    |> put_status(204)
    |> json(%{})
  end
end
