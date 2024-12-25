defmodule ApiWeb.UserSessionController do
  use ApiWeb, :controller

  alias Api.Accounts
  alias ApiWeb.UserAuth

  def show(conn, _params) do
    conn
    |> render(:new, user: conn.assigns.current_user)
  end

  def create(conn, %{"user" => user_params}) do
    %{"email" => email, "password" => password} = user_params

    if user = Accounts.get_user_by_email_and_password(email, password) do
      conn
      |> UserAuth.log_in_user(user)
      |> render(:new, user: user)
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
