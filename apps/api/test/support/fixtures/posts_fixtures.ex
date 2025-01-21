defmodule Api.PostsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Api.Posts` context.
  """

  @doc """
  Generate a post.
  """
  def post_fixture(attrs \\ %{}) do
    {:ok, post} =
      attrs
      |> Enum.into(%{
        content: "some content",
        title: "some title",
        user_id: 42
      })
      |> Api.Posts.create_post()

    post
  end
end
