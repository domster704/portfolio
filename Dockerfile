FROM node:22-alpine3.19 AS builder-stage

RUN apk update && apk upgrade

WORKDIR /var/www/portfolio

COPY .babelrc package.json webpack.config.js ./
COPY build/ build/
COPY src/ src/

RUN npm install && npm run-script build

FROM nginx:1.27.1-alpine AS nginx-stage

WORKDIR /var/www/portfolio/build

COPY --from=builder-stage /var/www/portfolio/build .

WORKDIR /etc/nginx/conf.d

COPY nginx/portfolio-front.conf ./default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]


