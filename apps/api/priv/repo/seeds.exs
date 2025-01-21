# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Api.Repo.insert!(%Api.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Api.Repo
alias Api.Accounts.{User}

Repo.delete_all(User)

Repo.insert(%User{
  email: "marcin.witas72@gmail.com",
  hashed_password: Bcrypt.hash_pwd_salt("admin"),
  confirmed_at: nil,
  image_url: "https://gravatar.com/avatar/b0a8c4bbc0ef26b4f5be6d8f2af30634?s=400&d=robohash&r=x",
  first_name: "Marcin",
  last_name: "Witas"
})
