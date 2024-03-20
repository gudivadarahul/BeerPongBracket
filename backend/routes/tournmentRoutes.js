const express = require('express');
const router = express.Router();

// sample data for demonstration 
let tournaments = []

// POST route to create a new tournament
router.post('/tournaments', (req, res) => {
  const { name, date } = req.body;
  const newTournament = { id: tournaments.length + 1, name, date, teams: [] };
  tournaments.push(newTournament);
  res.status(201).json(newTournament);
});

// GET route to fetch all tournaments 
router.get('/tournaments', (req, res) => {
  res.json(tournaments);
});

// DELETE route to delete a tournament
router.delete('/tournaments/:id', (req, res) => {
  const { id } = req.params;
  tournaments = tournaments.filter(tournament => tournament.id !== parseInt(id));
  res.sendStatus(204);
});

// Put route to update tournament score
router.put('/tournaments/:id', (req, res) => {
  const { id } = req.params;
  const { teams } = req.body;
  const tournament = tournaments.find(tournament => tournament.id === parseInt(id));
  if (tournament) {
    tournament.teams = teams;
    res.json(tournament);
  } else {
    res.status(404).json({ message: 'Tournament not found'});
  }
});

// Other routes for updating, deleting, or getting a specific tournament can be defined similarly

module.exports = router;