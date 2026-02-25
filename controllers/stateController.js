const State = require('../models/State');

// @desc    Save user state
// @route   POST /api/state
// @access  Private
const saveState = async (req, res) => {
  try {
    const { dockPosition, dockSize, wallpaper, openApps } = req.body;

    // Find and update, or create new
    let state = await State.findOne({ userId: req.user._id });

    if (state) {
      // Update existing
      state.dockPosition = dockPosition || state.dockPosition;
      state.dockSize = dockSize || state.dockSize;
      state.wallpaper = wallpaper || state.wallpaper;
      state.openApps = openApps || state.openApps;
      
      await state.save();
    } else {
      // Create new
      state = await State.create({
        userId: req.user._id,
        dockPosition,
        dockSize,
        wallpaper,
        openApps
      });
    }

    res.json({
      success: true,
      data: state
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

// @desc    Get user state
// @route   GET /api/state
// @access  Private
const getState = async (req, res) => {
  try {
    const state = await State.findOne({ userId: req.user._id });

    res.json({
      success: true,
      data: state || {}
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error', 
      error: error.message 
    });
  }
};

module.exports = {
  saveState,
  getState
};