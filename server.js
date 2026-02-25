const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/nxcloud')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 nxCloud API is running',
    status: 'active',
    version: '1.0.0'
  });
});

// Import routes (we'll create these next)
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes');
const stateRoutes = require('./routes/stateRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/files', fileRoutes);
app.use('/api/state', stateRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// Handle 404
app.use('*', (req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});