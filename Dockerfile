# Dockerfile
## Build/Dev
FROM node:14 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

RUN npm run build


## Clean
FROM nginx:alpine AS cleaner

WORKDIR /usr/share/nginx/html

RUN set -ex; \
    rm -rf ./*;

COPY --from=build /app/build ./


## Release
FROM nginxinc/nginx-unprivileged AS release

LABEL maintainer=courseproduction@bcit.ca
LABEL org.opencontainers.image.source="https://github.com/bcit-ltc/distribution-game"
LABEL org.opencontainers.image.description="Distribution Game"

WORKDIR /usr/share/nginx/html

COPY --from=cleaner /usr/share/nginx/html/ ./

COPY conf.d/default.conf /etc/nginx/conf.d/default.conf
