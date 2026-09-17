const sql = require('mssql');

const dbConfig = {
  server: process.env.DB_SERVER || process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '1433', 10),
  database: process.env.DB_NAME || 'AMP_NTS',
  user: process.env.DB_USER || 'sa',
  password: process.env.DB_PASSWORD || '',
  options: {
    encrypt: process.env.DB_ENCRYPT === 'true',
    trustServerCertificate: true, // Allows self-signed certificates for local dev
    enableArithAbort: true,
    ...(process.env.DB_INSTANCE ? { instanceName: process.env.DB_INSTANCE } : {}),
  },
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
};

let pool = null;

async function getPool() {
  if (!pool) {
    try {
      pool = await sql.connect(dbConfig);
    } catch (err) {
      console.error('SQL Server Connection Error:', err.message);
      throw err;
    }
  }
  return pool;
}

module.exports = {
  sql,
  getPool,
};
