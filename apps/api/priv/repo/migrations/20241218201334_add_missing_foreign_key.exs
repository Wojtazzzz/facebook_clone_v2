defmodule Api.Repo.Migrations.AddMissingForeignKey do
  use Ecto.Migration

  def change do
    alter table(:posts) do
      add :user_id, :integer
    end
  end
end
