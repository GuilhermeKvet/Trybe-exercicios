import mysql, { Pool } from 'mysql2/promise';
import AbstractConnection from './AbstractConnection';

import * as dotenv from 'dotenv'
dotenv.config({ path: __dirname+'/.env' })

export default class MySQLConnection extends AbstractConnection<Pool>{
    private static connection: Pool

    public connect(): Pool {
        const connection = MySQLConnection.connection = mysql.createPool({
            host: process.env.HOST,
            user: 'root',
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
        })
    return connection
    }
}