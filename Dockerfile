FROM node:alpine as npm-build

COPY . /opt/yolo

WORKDIR /opt/yolo

RUN npm install && \
  npm run build

FROM nginx:alpine

COPY --from=npm-build /opt/yolo/dist /usr/share/nginx/html
