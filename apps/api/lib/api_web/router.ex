defmodule ApiWeb.Router do
  use ApiWeb, :router

  import ApiWeb.UserAuth

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, html: {ApiWeb.Layouts, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
    plug :fetch_current_user
  end

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_api_user
    plug :put_secure_browser_headers
  end

  scope "/api", ApiWeb do
    pipe_through [:api, :redirect_if_user_is_authenticated]

    post "/users/register", UserRegistrationController, :create
    post "/users/login", UserSessionController, :create
  end

  scope "/api", ApiWeb do
    pipe_through [:api, :require_authenticated_user]

    post "/users/logout", UserSessionController, :delete
    get "/users/me", UserSessionController, :show

    get "/users/:id", UserController, :show, constraints: %{id: ~r/^\d+$/}

    get "/users/:user_id/posts", UserPostController, :index, constraints: %{id: ~r/^\d+$/}

    resources "/posts", PostController, only: [:index, :create]

    post "/post_likes/:post_id", PostLikeController, :create
    delete "/post_likes/:post_id", PostLikeController, :delete
  end

  # Enable LiveDashboard and Swoosh mailbox preview in development
  if Application.compile_env(:api, :dev_routes) do
    # If you want to use the LiveDashboard in production, you should put
    # it behind authentication and allow only admins to access it.
    # If your application does not have an admins-only section yet,
    # you can use Plug.BasicAuth to set up some basic authentication
    # as long as you are also using SSL (which you should anyway).
    import Phoenix.LiveDashboard.Router

    scope "/dev" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: ApiWeb.Telemetry
      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
