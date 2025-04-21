import mysql from 'mysql2/promise';
import {DB_NAME, DB_PASS, DB_URL, DB_USER} from '../config'

export const db = mysql.createPool({
  host: DB_URL,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default db;