import * as express from 'express';

export function expressAuthentication(request: express.Request, securityName: string, scopes?: string[]): Promise<any> {
    console.log('Auth check ' + JSON.stringify(request.query) + ' sec name: '+ securityName);
    if (securityName === 'api_key') {
        let token;
        if (request.query && request.query.access_token) {
            token = request.query.access_token;
        }

        // Saved at .env file
        if (token === process.env.APIKEY ) {
            return Promise.resolve({
                id: 1,
                name: 'Ironman'
            });
        } else {
            console.log('Wrong password!');
            return Promise.reject({}); //error: "Wrong password"
        }
    } else {
        console.log('No authorization!');
        return Promise.reject({}); // reject should be empty object
    }

}
