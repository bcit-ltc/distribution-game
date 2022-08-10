# Dockerfile

## Build/Dev
FROM node:14 AS builder

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

COPY --from=builder /app/build ./


## Release

FROM nginxinc/nginx-unprivileged AS release

LABEL maintainer courseproduction@bcit.ca

WORKDIR /usr/share/nginx/html

COPY --from=cleaner /usr/share/nginx/html/ ./
