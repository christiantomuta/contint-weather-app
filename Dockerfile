FROM node:18-alpine as build-env
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --if-present


FROM nginx:1.22-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build-env /usr/src/app/dist/. .
EXPOSE 80