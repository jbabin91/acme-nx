# syntax = docker/dockerfile:1

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=18.16.1
FROM node:${NODE_VERSION}-slim as base

LABEL fly_launch_runtime="NodeJS"

# NodeJS app lives here
WORKDIR /app

# Set production environment
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Setup PNPM
RUN corepack enable

FROM base AS prod-deps
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod --frozen-lockfile

# Throw-away build stage to reduce size of final image
FROM base as build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install -y python-is-python3 pkg-config build-essential

# Install node modules
COPY --link package.json .
COPY --link pnpm-lock.yaml .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Copy application code
COPY --link . .

# Build application
RUN pnpm build

# Final stage for app image
FROM nginx

# Copy nginx config
# COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./apps/web/nginx/nginx.conf /etc/nginx/nginx.conf

# Copy built application
COPY --from=build /app/dist/apps/web /usr/share/nginx/html
