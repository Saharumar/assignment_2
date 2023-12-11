FROM nginx:latest
# Set the working directory inside the container
WORKDIR /usr/share/nginx/html
COPY . .
EXPOSE 80
