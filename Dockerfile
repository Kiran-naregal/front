FROM node:17-alpine AS build

WORKDIR /react_app

COPY package.json .

RUN npm install 

COPY . ./

RUN npm run build

FROM bitnami/nginx

COPY nginx.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf

WORKDIR /app

RUN rm -rf ./*

EXPOSE 8080:8080

COPY --from=build /react_app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]