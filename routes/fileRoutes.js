const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const upload = require('../middleware/upload');
const {
  uploadFile,
  getFiles,
  deleteFile
} = require('../controllers/fileController');

// All routes are protected
router.post('/upload', protect, upload.single('file'), uploadFile);
router.get('/', protect, getFiles);
router.delete('/:id', protect, deleteFile);

module.exports = router;