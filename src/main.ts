import * as express from 'express';
import { RegisterRoutes } from './routes/routes';  // here
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as https from 'https';
dotenv.config();

const credentials = {
    key: fs.readFileSync(process.env.SSLKEY),
    cert: fs.readFileSync(process.env.SSLCERT)
};
console.log('Starting..');
const app = express();

RegisterRoutes(app);  // and here
// const httpsServer = https.createServer(credentials, app);


// httpsServer.listen(process.env.PORT,
app.listen(process.env.PORT,
    () => console.log(`Server started listening to port http://localhost:${process.env.PORT}`)
);

// console.log(updateDb());
//
