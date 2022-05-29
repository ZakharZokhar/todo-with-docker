FROM node:18-alpine3.15

WORKDIR /client

COPY package.json ./

COPY package-lock.json ./

RUN npm i

COPY ./ ./

RUN npm run build

RUN npm install -g serve