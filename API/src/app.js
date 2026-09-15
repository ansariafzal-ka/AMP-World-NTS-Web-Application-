const express = require('express');
const cors = require('cors');
const { ApiError } = require('./utils/ApiError');
const webRoutes = require('./routes/web/index');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Mount Web Routes per architecture: /api/web/...
app.use('/api/web', webRoutes);

// 404 Handler
app.use((req, res, next) => {
  next(new ApiError(404, `Cannot ${req.method} ${req.originalUrl}`));
});

// Global Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    statusCode,
    success: false,
    message,
    errors: err.errors || [],
    data: null,
  });
});

module.exports = app;
