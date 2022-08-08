FROM node:18.6.0-alpine3.16

# Docker working directory
WORKDIR /usr/src/app

# Copying file into APP directory of docker
COPY ./package.json ./package-lock.json /usr/src/app/

RUN npm install

COPY . /usr/src/app/

EXPOSE 3000
CMD ["npm", "run", "start:dev"]