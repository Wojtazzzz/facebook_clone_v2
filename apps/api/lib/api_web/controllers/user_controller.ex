defmodule ApiWeb.UserController do
  use ApiWeb, :controller

  alias Api.Accounts

  def show(conn, _params) do
    user = Accounts.get_user_profile_by_id(conn.assigns.current_user.id)
    render(conn, :show, user: user)
  end
end