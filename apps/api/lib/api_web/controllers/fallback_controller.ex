defmodule ApiWeb.FallbackController do
  use Phoenix.Controller

  def call(conn, {:error, %Ecto.Changeset{} = changeset}) do
    conn
    |> put_status(:unprocessable_entity)
    |> put_view(json: ApiWeb.ErrorJSON)
    |> render(:error, changeset: changeset)
  end

  def call(conn, {:error, cause, status}) do
    conn
    |> put_status(status)
    |> put_view(json: ApiWeb.ErrorJSON)
    |> render(:error, cause: cause)
  end

  def call(conn, {:error, cause}) do
    call(conn, {:error, cause, :bad_request})
  end
end
