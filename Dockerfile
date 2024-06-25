FROM node:18.20.3-buster-slim AS build
RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN rm -rf node_modules && npm install

EXPOSE 8000
CMD ["app.js"]