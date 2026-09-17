const jwt = require('jsonwebtoken');
const cmsService = require('../services/cms.service');
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

  const accessToken = jwt.sign(payload, process.env.JWT_SECRET || 'amp-secret-key-12345', {
    expiresIn: process.env.JWT_ACCESS_EXPIRY || '1d',
  });

  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET || process.env.JWT_SECRET || 'amp-refresh-secret-12345',
    { expiresIn: process.env.JWT_REFRESH_EXPIRY || '7d' }
  );

  return { accessToken, refreshToken };
};

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  const user = await cmsService.verifyCredentials(email, password);

  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

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
