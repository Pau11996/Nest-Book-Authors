FROM node:18.6.0-alpine3.16

WORKDIR /usr/src/app

COPY ./package.json ./package-lock.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "start:dev"]