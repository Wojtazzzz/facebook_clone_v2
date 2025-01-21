defmodule ApiWeb.PostLikeController do
  use ApiWeb, :controller

  alias Api.Posts

  action_fallback ApiWeb.FallbackController

  def create(conn, %{"post_id" => id}) do
    with {post_id, ""} <- Integer.parse(id),
         {:ok, _} <-
           Posts.create_post_like(%{
             user_id: conn.assigns.current_user.id,
             post_id: post_id
           }) do
      send_resp(conn, :no_content, %{})
    else
      {:error, changeset} when is_map(changeset) -> {:error, changeset}
      {:error, message} when is_binary(message) -> {:error, message}
      :error -> {:error, "Invalid post ID param."}
    end
  end
end
