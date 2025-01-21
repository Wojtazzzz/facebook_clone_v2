defmodule Api.Repo.Migrations.RemoveTitleColumnFromPostsTable do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      remove :title
    end
  end
end
