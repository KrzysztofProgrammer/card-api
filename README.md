
Libraries used:
* ExpressJS: https://expressjs.com/ - serve
* TSOA  https://github.com/lukeautry/tsoa#readme - generate routes and swagger.json
* PostgreSQL conectivity https://node-postgres.com/
* PM2 Install and run: https://pm2.keymetrics.io/

Examples:
https://itnext.io/express-js-backend-with-typescript-swagger-ui-and-docker-compose-f77143860bc8

https://github.com/angellandros/express-ts-swagger-docker

https://swagger.io/docs/specification/basic-structure/


Examples:
https://github.com/lukeautry/ts-app

How to install:
- get from GitHub
- npm install
- npm run build:all
-


TODO:
- register card
- user list
- changing API KEY for readers


npm run start:api

https://localhost:3000/api/v1/card/version
http://localhost:8080/#/cards/Index

Security:
- using API key, providing as parameter access_token, provided in .env file
APIKEY=kjseo8wyu7r0nw8

Keys are compared at authentication.ts file
Example:
https://localhost:3000/api/v1/card/version?access_token=kjseo8wyu7r0nw8

Making HTTPS server:
- generate SSL certificate and key, put into cert directory, fill information at .env file
SSLCERT=cert/59010600_localhost_3000.cert
SSLKEY=cert/59010600_localhost_3000.key




Docker commands:

* docker images - list images
* docker rmi [image id]  - delete image
* docker ps - list running containers
* docker ps -a - list all continers
* docker logs [container id] - list application logs
* docker exec -it [container id] /bin/bash - enter container


Running server

* docker build -t kc/card-api-server .



Integration with swagger
On Windows run swagger_start.bat from main directory


Download latest image
* docker pull swaggerapi/swagger-ui

Run with card-api configuration:
* docker run -p 8080:8080 -e SWAGGER_JSON=/swagger/swagger.json -v %(pwd)\api\dist:/swagger  swaggerapi/swagger-ui

http://localhost:8080


File docker-compose.yaml could be used using

docker-compose up
