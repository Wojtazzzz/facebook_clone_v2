defmodule ApiWeb.UserRegistrationJSON do
  @doc """
  Renders a user data after successful log in.
  """
  def new(%{user: %Api.Accounts.User{} = user}) do
    %{user: %{email: user.email}}
  end
end
