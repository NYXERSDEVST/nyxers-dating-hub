FROM nginx:alpine
COPY nginx.conf.template /etc/nginx/templates/default.conf.template
COPY index.html manifest.webmanifest sw.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY icons/ /usr/share/nginx/html/icons/
# nginx docker entrypoint runs envsubst on /etc/nginx/templates
ENV PORT=8080
EXPOSE 8080
