defmodule ApiWeb.UserRegistrationJSON do
  @doc """
  Renders a user data after successful log in.
  """
  def new(user) do
    %{user: %{email: user.email}}
  end

  @doc """
  Renders errors messages after an invalid registration.
  """
  def error(%{changeset: %Ecto.Changeset{} = changeset}) do
    %{errors: Enum.map(changeset.errors, fn {field, {message, _}} ->
      %{field => message}
    end)}
  end
end
