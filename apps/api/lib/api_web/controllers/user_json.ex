defmodule ApiWeb.UserJSON do
  @doc """
  Renders a single user's profile data
  """
  def show(%{data: params}) do
    data(params)
  end

  defp data(%{
         user: user,
         friends_count: friends_count,
         friends_of_mine_count: friends_of_mine_count
       }) do
    %{
      data: %{
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        image_url: user.image_url,
        friends_count: friends_count + friends_of_mine_count,
        friends:
          Enum.concat(user.friends, user.friends_of_mine)
          |> Enum.slice(0..8)
          |> Enum.map(fn friend ->
            %{
              id: friend.id,
              first_name: friend.first_name,
              last_name: friend.last_name,
              image_url: friend.image_url
            }
          end)
      }
    }
  end
end
