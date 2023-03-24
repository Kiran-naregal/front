FROM node:17-alpine AS build

WORKDIR /react_app

COPY package.json .

RUN npm install 

COPY . ./

RUN npm run build

FROM bitnami/nginx

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

EXPOSE 8080:8080

COPY --from=build /react_app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]