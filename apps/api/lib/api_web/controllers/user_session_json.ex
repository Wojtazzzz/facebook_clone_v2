defmodule ApiWeb.UserSessionJSON do
  @doc """
  Renders a user data after successful login
  """
  def new(conn) do
    %{
      token: conn.token
    }
  end

  @doc """
  Renders a user data
  """
  def me(conn) do
    %{
      data: %{
        id: conn.user.id,
        image_url: conn.user.image_url,
        first_name: conn.user.first_name,
        last_name: conn.user.last_name
      }
    }
  end

  @doc """
  Renders error messages after an invalid registration.
  """
  def error(%{error: error}) do
    %{error: error}
  end
end
