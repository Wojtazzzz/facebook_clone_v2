FROM elixir:1.17.3-alpine

RUN apk add --no-cache build-base inotify-tools postgresql-client git

WORKDIR /app
COPY mix.exs mix.lock ./
RUN mix local.hex --force && mix deps.get
COPY . .

EXPOSE 4000
CMD ["mix", "phx.server"]
