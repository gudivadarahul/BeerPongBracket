const express = require('express');
const router = express.Router();
const Team = require('../models/Team');

// Route to create a test document
router.post('/test', async (req, res) => {
  try {
    const team = new Team({ name: 'Test Team' });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    console.error('Error creating test document:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

