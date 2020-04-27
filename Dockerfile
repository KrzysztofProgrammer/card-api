#
# Image definition, used during docker build command
#
FROM node:12.10

#RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#COPY package.json /usr/src/app/
COPY package*.json ./

RUN npm install

#COPY . /usr/src/app
# Bundle app source
COPY . .

RUN npm run build:all

ENV NODE_ENV docker

EXPOSE 3000

CMD [ "npm", "run", "start" ]
