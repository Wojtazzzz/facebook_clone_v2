defmodule ApiWeb.UserJSON do
  alias Api.Accounts.User

  @doc """
  Renders a single user data
  """
  def show(%{user: %User{} = user}) do
    data(user)
  end

  defp data(%User{} = user) do
    %{
      data: %{
        id: user.id,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        image_url: user.image_url
      }
    }
  end
end
