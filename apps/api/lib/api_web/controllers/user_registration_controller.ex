defmodule ApiWeb.UserRegistrationController do
  use ApiWeb, :controller

  alias Api.Accounts
  alias ApiWeb.UserAuth

  action_fallback ApiWeb.FallbackController

  def create(conn, %{"user" => user_params}) do
    Accounts.register_user(user_params)
    |> case do
      {:ok, user} ->
        UserAuth.log_in_user(user)
        render(conn, :new, user: user)

      {:error, changeset} ->
        {:error, changeset}
    end
  end
end
