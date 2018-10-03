FROM nginx:latest

COPY _book/ /usr/share/nginx/html
COPY deploy/default.conf /etc/nginx/conf.d/default.conf