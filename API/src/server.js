require('dotenv').config();
const app = require('./app');
const { getPool } = require('./config/database');

const PORT = process.env.PORT || 5000;

async function startServer() {
  try {
    await getPool();
    console.log(' Successfully connected to Microsoft SQL Server Database:', process.env.DB_NAME || 'AMP_NTS');
  } catch (err) {
    console.error(' SQL Server Connection Warning:', err.message);
    console.log(' Note: Ensure SQL Server is running and credentials in API/.env are correct');
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
