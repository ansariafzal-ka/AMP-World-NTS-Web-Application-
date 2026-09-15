const cmsService = require('../services/cms.service');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');
const { asyncHandler } = require('../utils/asyncHandler');

/**
 * CMS Controller
 * Exposes methods for CMS Pages, Blocks, and CMS User administration
 */
const getAllPages = asyncHandler(async (req, res) => {
  const pages = await cmsService.getAllPages();
  return res.status(200).json(new ApiResponse(200, pages, 'Pages retrieved successfully'));
});

const getPageById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const page = await cmsService.getPageById(id);
  return res.status(200).json(new ApiResponse(200, page, 'Page retrieved successfully'));
});

const getPageBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const page = await cmsService.getPageBySlug(slug);
  return res.status(200).json(new ApiResponse(200, page, 'Published page retrieved successfully'));
});

const savePage = asyncHandler(async (req, res) => {
  const saved = await cmsService.savePage(req.body);
  return res.status(200).json(new ApiResponse(200, saved, 'Page saved successfully'));
});

const deletePage = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await cmsService.deletePage(id);
  if (!success) {
    throw new ApiError(404, 'Page not found or already deleted');
  }
  return res.status(200).json(new ApiResponse(200, { deleted: true }, 'Page deleted successfully'));
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await cmsService.getAllUsers();
  return res.status(200).json(new ApiResponse(200, users, 'Users retrieved successfully'));
});

const saveUser = asyncHandler(async (req, res) => {
  const saved = await cmsService.saveUser(req.body);
  return res.status(201).json(new ApiResponse(201, saved, 'User saved successfully'));
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const success = await cmsService.deleteUser(id);
  if (!success) {
    throw new ApiError(404, 'User not found or already deleted');
  }
  return res.status(200).json(new ApiResponse(200, { deleted: true }, 'User deleted successfully'));
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  const user = await cmsService.verifyCredentials(email, password);
  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  return res.status(200).json(new ApiResponse(200, { user }, 'Login successful'));
});

module.exports = {
  getAllPages,
  getPageById,
  getPageBySlug,
  savePage,
  deletePage,
  getAllUsers,
  saveUser,
  deleteUser,
  login,
};
