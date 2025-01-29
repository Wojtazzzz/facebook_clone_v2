defmodule RequestUtils do
  @moduledoc """
  Provides helper functions to use params details
  """

  @doc """
  Get specified param from the params data

  Returns specified default value if not exist or is invalid integer.

  ## Examples

      iex> get_integer_param(params, "offset", 8)
      4

      iex> get_integer_param(params, "limit", 12)
      12
  """
  def get_integer_param(params, param_name, default) do
    value = Map.get(params, param_name, default)

    case Integer.parse(value) do
      {int, ""} -> int
      _ -> default
    end
  end
end
