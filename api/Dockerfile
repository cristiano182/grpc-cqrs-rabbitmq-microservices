FROM node:16-alpine as api

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]

