require('dotenv').config();
const app = require('./app');
const pool = require('./config/database');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    const connection = await pool.getConnection();
    console.log(' Successfully connected to MySQL Database:', process.env.DB_NAME || 'amp_nts');
    connection.release();
  } catch (err) {
    console.error(' MySQL Connection Warning:', err.message);
    console.log(' Note: Ensure MySQL is running in Workbench and credentials are set in API/.env');
  }

  app.listen(PORT, () => {
    console.log(`\n AMP NTS Express Backend Server running on http://localhost:${PORT}`);
    console.log(` Health Check: http://localhost:${PORT}/health`);
    console.log(` Web Auth:     http://localhost:${PORT}/api/web/auth/login`);
    console.log(` Web Users:    http://localhost:${PORT}/api/web/users`);
    console.log(` Admin CMS:    http://localhost:${PORT}/api/web/admin/cms/pages\n`);
  });
}

startServer();
