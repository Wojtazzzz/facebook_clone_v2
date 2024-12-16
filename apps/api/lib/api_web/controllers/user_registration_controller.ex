defmodule ApiWeb.UserRegistrationController do
  use ApiWeb, :controller

  alias Api.Accounts
  alias ApiWeb.UserAuth

  def create(conn, %{"user" => user_params}) do
    case Accounts.register_user(user_params) do
      {:ok, user} ->
        conn
        |> UserAuth.log_in_user(user)
        |> render(:new, user: user)

      {:error, %Ecto.Changeset{} = changeset} ->
        conn
        |> put_status(422)
        |> render(:error, changeset: changeset)
    end
  end
end
