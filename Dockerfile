# Dockerfile

## Build
FROM node:14 AS builder

WORKDIR /app

COPY . ./

RUN set -ex; \
    npm install; \
    npm run build;


## Clean

FROM nginx:alpine AS cleaner

WORKDIR /usr/share/nginx/html

RUN set -ex; \
    rm -rf ./*;

COPY --from=builder /app/build ./


## Release for production

FROM nginxinc/nginx-unprivileged AS release

LABEL maintainer courseproduction@bcit.ca

WORKDIR /usr/share/nginx/html

COPY --from=cleaner /usr/share/nginx/html/ ./
