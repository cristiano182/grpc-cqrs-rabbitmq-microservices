FROM node:16-alpine as grpc-query

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 50052

CMD [ "npm", "run", "start" ]

