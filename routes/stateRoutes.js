const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const {
  saveState,
  getState
} = require('../controllers/stateController');

// All routes are protected
router.post('/', protect, saveState);
router.get('/', protect, getState);

module.exports = router;