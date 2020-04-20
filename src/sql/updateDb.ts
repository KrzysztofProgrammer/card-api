import {dbService} from "../service/dbService";

const {version} = require( '../../package.json');
const sqlUpgradeDir='./upgrade';
const sqlInitDir='./init';

// Check if database exists

// const sqlUpdate = 'CREATE TABLE card.sql_update ()';

// Check if init tables are created

// Check if upgrade tables are created

export default async function updateDb() {
    const db = new dbService();
    await db.checkVersion();
}
