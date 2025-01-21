defmodule Api.Accounts.Friendship do
  use Ecto.Schema
  import Ecto.Changeset

  alias Api.Accounts.User

  schema "friendships" do
    belongs_to :user, User
    belongs_to :friend, User

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(friendship, attrs) do
    friendship
    |> cast(attrs, [:user_id, :friend_id])
    |> validate_required([:user_id, :friend_id])
    |> unique_constraint([:user_id, :friend_id])
    |> unique_constraint([:friend_id, :user_id])
  end
end
