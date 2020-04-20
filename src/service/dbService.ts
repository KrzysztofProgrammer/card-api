import { Pool } from 'pg';

export class dbService {
    private pool;

    constructor() {
        this.pool = new Pool({
            user: process.env.DBUSER,
            host: process.env.DBHOST,
            database: process.env.DBNAME,
            password: process.env.DBPASS,
            port: process.env.DBPORT,
        });
        this.pool.on('error', (err,client) => {
            console.error('Unexpected error on idle client', err);
            process.exit(-1);
        })
    }

    public async eventRegister( ip: string, event: string, cardNumber: string ) {
        await this.pool.connect();
        const res = await this.pool.query(
            'SELECT card.fnc_register_event($1, $2, $3) as response',
            [ip, event, cardNumber]
        );
        // console.log('DB resp: ', res.rows[0].response);
        // await this.pool.end();
        return res.rows[0].response;
    }

    public async checkVersion() {
        await this.pool.connect();
        const res = await this.pool.query('SELECT version() as version' );
        // await this.pool.end();
        console.log('DBVersion ' + JSON.stringify(res.rows[0].version) );
        return res.rows[0].version;
    }

}
