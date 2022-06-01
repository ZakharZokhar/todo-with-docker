FROM node:18-alpine3.15

WORKDIR /api

COPY package.json ./

COPY package-lock.json ./

RUN npm i

COPY ./ ./