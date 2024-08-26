# Etapa 1: Construcción
FROM node:18 AS build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
RUN npm run build --prod

# Segunda etapa: Servir con Nginx
FROM nginx:alpine
COPY --from=build /app/dist/hub-de-entretenimiento /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]