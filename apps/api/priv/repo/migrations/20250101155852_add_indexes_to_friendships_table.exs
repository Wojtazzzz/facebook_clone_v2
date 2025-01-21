defmodule Api.Repo.Migrations.AddIndexesToFriendshipsTable do
  use Ecto.Migration

  def change do
    create index(:friendships, [:user_id])
    create index(:friendships, [:friend_id])
  end
end
