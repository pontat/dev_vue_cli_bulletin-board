FROM node:14.15.3-alpine

RUN apk update && npm install -g npm @vue/cli