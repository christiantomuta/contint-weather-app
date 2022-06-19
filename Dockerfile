FROM node:18-alpine as build-env
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build --if-present


FROM nginx:1.22-alpine
WORKDIR /usr/share/nginx/html
COPY --from=build-env /usr/src/dist/. .
EXPOSE 4200
EXPOSE 9876
EXPOSE 8080