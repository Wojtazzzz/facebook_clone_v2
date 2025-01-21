defmodule Api.Repo.Migrations.RemoveInvalidUserIdColumn do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      remove :user_id
    end
  end
end
