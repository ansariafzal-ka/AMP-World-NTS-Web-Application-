import mysql from 'mysql2/promise';

let pool: mysql.Pool | null = null;

export function getDbPool(): mysql.Pool | null {
  if (!process.env.DB_PASSWORD && !process.env.DB_USER && !process.env.DB_NAME) {
    return null;
  }

  if (!pool) {
    try {
      pool = mysql.createPool({
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT || '3306', 10),
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'amp_nts',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
        multipleStatements: true,
      });
    } catch (e) {
      console.error('Failed to initialize MySQL pool:', e);
      pool = null;
    }
  }

  return pool;
}

export default getDbPool;
