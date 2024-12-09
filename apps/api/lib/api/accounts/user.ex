defmodule Api.Accounts.User do
  use Ecto.Schema
  import Ecto.Changeset

  schema "users" do
    field :email, :string
    field :name, :string
    field :password, :string

    timestamps(type: :utc_datetime)
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, [:name, :email, :password])
    |> validate_required([:name, :email, :password])
    |> validate_length(:password, min: 8)
    |> unique_constraint(:email)
    |> hash_password
  end

  defp hash_password(changeset) do
    if changeset.valid? and get_change(changeset, :password) do
      hashed_password = Bcrypt.hash_pwd_salt(get_change(changeset, :password))
      put_change(changeset, :password, hashed_password)
    else
      changeset
    end
  end
end
