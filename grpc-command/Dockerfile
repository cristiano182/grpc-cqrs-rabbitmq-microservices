FROM node:16-alpine as grpc-command

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 50051

CMD [ "npm", "run", "start" ]

