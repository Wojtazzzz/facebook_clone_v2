defmodule ApiWeb.UserSessionJSON do
  @doc """
  Renders a user data after successful log in.
  """
  # def new(%{user: %Api.Accounts.User{} = user}) do
  def new(conn) do
    %{user: %{email: conn.user.email}, token: conn.token}
  end

  @doc """
  Renders error messages after an invalid registration.
  """
  def error(%{error: error}) do
    %{error: error}
  end
end
