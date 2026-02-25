const mongoose = require('mongoose');

const stateSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  dockPosition: {
    type: String,
    default: 'bottom',
    enum: ['bottom', 'left', 'right']
  },
  dockSize: {
    type: Number,
    default: 52
  },
  dockMagnification: {
    type: Boolean,
    default: true
  },
  wallpaper: {
    type: String,
    default: 'default.jpg'
  },
  accentColor: {
    type: String,
    default: 'blue'
  },
  appearance: {
    type: String,
    default: 'auto',
    enum: ['light', 'dark', 'auto']
  },
  openApps: [{
    type: String
  }],
  recentFiles: [{
    fileName: String,
    fileId: mongoose.Schema.Types.ObjectId,
    openedAt: Date
  }],
  desktopIcons: [{
    name: String,
    position: {
      x: Number,
      y: Number
    }
  }],
  lastSaved: {
    type: Date,
    default: Date.now
  }
});

// Update lastSaved on every save
stateSchema.pre('save', function(next) {
  this.lastSaved = Date.now();
  next();
});

module.exports = mongoose.model('State', stateSchema);