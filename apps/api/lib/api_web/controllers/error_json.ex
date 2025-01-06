defmodule ApiWeb.ErrorJSON do
  def error(%{changeset: %Ecto.Changeset{} = changeset}) do
    %{
      errors:
        Enum.map(changeset.errors, fn {field, {message, _}} ->
          %{field => message}
        end)
    }
  end
end
