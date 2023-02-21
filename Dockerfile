# Paso 1 construir del react project
FROM node:18 AS build
ARG VITE_BASE_URL=${VITE_BASE_URL}
ENV VITE_BASE_URL=${VITE_BASE_URL} 
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build 

#Paso 2 CREAR NGINX SERVER
FROM nginx AS prod-stage
ENV TZ="America/Mexico_City"
COPY --from=build /app/dist /usr/share/nginx/html
COPY  ./ssl/localhost.crt /etc/ssl/localhost.crt
COPY  ./ssl/localhost.key /etc/ssl/localhost.key
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 443
CMD ["nginx","-g","daemon off;"]