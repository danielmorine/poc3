FROM node:14.1-alpine
WORKDIR /app
RUN apk update && apk add yarn python g++ make && rm -rf /var/cache/apk/*
COPY package.json /app
RUN npm isntall
COPY . /app
COPY ./dist /app
CMD ["npm", "run", "start:prod"]