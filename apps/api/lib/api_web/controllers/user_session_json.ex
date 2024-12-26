defmodule ApiWeb.UserSessionJSON do
  @doc """
  Renders a user data
  """
  def new(conn) do
    %{
      user: %{
        id: conn.user.id,
        email: conn.user.email,
        image_url: conn.user.image_url
      },
      token: conn.token
    }
  end

  @doc """
  Renders error messages after an invalid registration.
  """
  def error(%{error: error}) do
    %{error: error}
  end
end
