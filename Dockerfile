# Usar una imagen base oficial de Node.js para construir el frontend
FROM node:18 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar el archivo package.json y package-lock.json
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código fuente
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Usar Nginx para servir el frontend
FROM nginx:alpine

# Copiar la build de la aplicación al directorio que Nginx sirve
COPY --from=build /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Ejecutar Nginx para servir el frontend
CMD ["nginx", "-g", "daemon off;"]
