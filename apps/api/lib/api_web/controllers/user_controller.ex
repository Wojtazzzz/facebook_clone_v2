defmodule ApiWeb.UserController do
  use ApiWeb, :controller

  alias Api.Accounts

  action_fallback ApiWeb.FallbackController

  def show(conn, %{"id" => id}) do
    with {user_id, ""} <- Integer.parse(id),
         user_profile when not is_nil(user_profile) <- Accounts.get_user_profile_by_id(user_id) do
      render(conn, :show, data: user_profile)
    else
      nil ->
        {:error, "User not found", :not_found}

      _ ->
        {:error, "Invalid ID param"}
    end
  end
end
