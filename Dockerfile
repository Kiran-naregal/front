FROM node:17-alpine AS build

WORKDIR /react_app

COPY package.json .

RUN npm install 

COPY . ./

RUN npm run build

FROM bitnami/nginx

# COPY nginx.conf /opt/bitnami/nginx/conf/server_blocks/nginx.conf

# RUN mkdir /opt/bitnami/myapp

# WORKDIR /opt/bitnami/myapp

COPY --from=build /react_app/build /app

EXPOSE 8080:8080

ENTRYPOINT ["nginx", "-g", "daemon off;"]