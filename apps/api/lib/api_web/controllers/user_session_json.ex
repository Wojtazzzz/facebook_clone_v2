defmodule ApiWeb.UserSessionJSON do
  @doc """
  Renders a user data after successful log in.
  """
  def new(%{user: %Api.Accounts.User{} = user}) do
    %{user: %{email: user.email}}
  end

  @doc """
  Renders error messages after an invalid registration.
  """
  def error(%{error: error}) do
    %{error: error}
  end
end
