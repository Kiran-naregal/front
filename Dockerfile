FROM node:17-alpine AS build

WORKDIR /react_app

COPY package.json .

RUN npm install 

COPY . ./

# EXPOSE 3000

# CMD ["npm","start"]
RUN npm run build

FROM nginx:stable-alpine-perl

COPY nginx-os4.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html

EXPOSE 8080:8080

COPY --from=build /react_app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]