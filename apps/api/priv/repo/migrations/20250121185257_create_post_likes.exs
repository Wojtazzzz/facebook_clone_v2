defmodule Api.Repo.Migrations.CreatePostLikes do
  use Ecto.Migration

  def change do
    create table(:post_likes) do
      add :user_id, references(:users, on_delete: :delete_all), null: false
      add :post_id, references(:posts, on_delete: :delete_all), null: false

      timestamps(type: :utc_datetime)
    end

    create unique_index(:post_likes, [:user_id, :post_id])

    create index(:post_likes, [:user_id])
    create index(:post_likes, [:post_id])
  end
end
