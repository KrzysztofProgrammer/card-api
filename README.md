
https://itnext.io/express-js-backend-with-typescript-swagger-ui-and-docker-compose-f77143860bc8

https://github.com/angellandros/express-ts-swagger-docker

https://swagger.io/docs/specification/basic-structure/


https://node-postgres.com/


Examples:
https://github.com/lukeautry/ts-app


TOOD:
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

