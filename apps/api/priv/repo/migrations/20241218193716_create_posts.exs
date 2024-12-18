defmodule Api.Repo.Migrations.CreatePosts do
  use Ecto.Migration

  def change do
    create table(:posts) do
      add :title, :string
      add :content, :string
      add :user_id, :integer

      timestamps(type: :utc_datetime)
    end
  end
end