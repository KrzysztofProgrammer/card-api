import * as express from 'express';
import { RegisterRoutes } from './routes/routes';  // here
import * as fs from 'fs';
import * as https from 'https';
import * as cors from 'cors';
import {serverErrorHandler} from "./service/serverErrorHandler";
import * as bodyparser from 'body-parser';

export const server = () => {
    console.log('Starting..');
    const app = express();
    // For API we need to handle request from different addresses
    const corsOpt: cors.CorsOptions = {
        origin: '*',
        optionsSuccessStatus: 200
    };
    app.use( cors(corsOpt) );
    app.use( serverErrorHandler );
    app.use( bodyparser.json());

    RegisterRoutes(app);  // and here

    if (fs.existsSync(process.env.SSLKEY)
        &&
        fs.existsSync(process.env.SSLCERT)
    ) {
        const credentials = {
            key: fs.readFileSync(process.env.SSLKEY),
            cert: fs.readFileSync(process.env.SSLCERT)
        };
        const httpsServer = https.createServer(credentials, app);
        console.log('SSL ON');
        httpsServer.listen(process.env.PORT,
            () => console.log(`Server started at https://localhost:${process.env.PORT}/api/v1/card/version`)
        );
    } else {
        // Only http server
        app.listen(process.env.PORT,
            () => console.log(`Server started at http://localhost:${process.env.PORT}/api/v1/card/version`)
        );
    }

}

// console.log(updateDb());

