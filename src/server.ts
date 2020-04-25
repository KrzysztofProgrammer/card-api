import * as express from 'express';
import { RegisterRoutes } from './routes/routes';  // here
import * as fs from 'fs';
import * as https from 'https';

export const server = () => {
    console.log('Starting..');
    const app = express();

    RegisterRoutes(app);  // and here
    app.use((_req, res, next) => {
        res.header(
            'Access-Control-Allow-Origin', '*');
        res.header(
            'Access-Control-Allow-Headers',
            `Origin, X-Requested-With, Content-Type, Accept, Authorization`,
        );
        next();
    });

    if (fs.existsSync(process.env.SSLKEY)
        &&
        fs.existsSync(process.env.SSLCERT)
    ) {
        const credentials = {
            key: fs.readFileSync(process.env.SSLKEY),
            cert: fs.readFileSync(process.env.SSLCERT)
        };
        const httpsServer = https.createServer(credentials, app);
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

