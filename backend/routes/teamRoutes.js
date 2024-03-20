const express = require('express');
const router = express.Router();
const Team = require('../models/Team')

// Route to create a new team
router.post('/teams', async (req, res) => {
  try {
    const { name } = req.body;
    const team = new Team({ name });
    await team.save();
    res.status(201).json(team)
  } catch (error) {
    console.error('Error creating team: ', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;