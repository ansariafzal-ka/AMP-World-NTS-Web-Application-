const { ApiError } = require('../utils/ApiError');

const validatePagePayload = (req, res, next) => {
  const { title, slug } = req.body;
  if (!title || typeof title !== 'string' || !title.trim()) {
    throw new ApiError(400, 'Page title is required and must be a non-empty string');
  }
  if (!slug || typeof slug !== 'string' || !slug.trim()) {
    throw new ApiError(400, 'Page slug is required and must be a non-empty string');
  }
  next();
};

const validateUserPayload = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    throw new ApiError(400, 'Name, email, and password are required');
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    throw new ApiError(400, 'Invalid email address format');
  }
  if (password.length < 6) {
    throw new ApiError(400, 'Password must be at least 6 characters long');
  }
  next();
};

module.exports = {
  validatePagePayload,
  validateUserPayload,
};
