const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const pool = require('../config/database');
const { ApiError } = require('../utils/ApiError');
const { ApiResponse } = require('../utils/ApiResponse');
const { asyncHandler } = require('../utils/asyncHandler');


const generateAccessAndRefreshTokens = (user) => {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_ACCESS_EXPIRY || '1d',
  });

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d' }
  );

  return { accessToken, refreshToken };
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  const [users] = await pool.query(
    `SELECT * FROM cms_users WHERE email = ? LIMIT 1`,
    [email.trim().toLowerCase()]
  );

  if (users.length === 0) {
    throw new ApiError(401, 'Invalid email or password');
  }

  const user = users[0];

  let isMatch = false;
  if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
    isMatch = await bcrypt.compare(password, user.password);
  } else {
    isMatch = user.password === password;
    if (isMatch) {
      const newHash = await bcrypt.hash(password, 10);
      await pool.query(`UPDATE cms_users SET password = ? WHERE id = ?`, [newHash, user.id]);
    }
  }

  if (!isMatch) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Update last login
  const nowStr = new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' });
  await pool.query(`UPDATE cms_users SET last_login = ? WHERE id = ?`, [nowStr, user.id]);

  const { accessToken, refreshToken } = generateAccessAndRefreshTokens(user);

  const loggedInUser = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        user: loggedInUser,
        accessToken,
        refreshToken,
      },
      'User logged in successfully'
    )
  );
});

const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(200, req.user, 'Current user profile fetched successfully')
  );
});

const logout = asyncHandler(async (req, res) => {
  return res.status(200).json(
    new ApiResponse(200, {}, 'User logged out successfully')
  );
});

module.exports = {
  login,
  getCurrentUser,
  logout,
};
