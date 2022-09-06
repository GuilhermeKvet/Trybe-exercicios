const express = require('express');
const validateTeam = require('../middlewares/validateTeam');
const apiCredentials = require('../middlewares/apiCredentials');

const router = express.Router();

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.some(t => t.id === id);
  if (team) {
    next();
  } else {
    res.sendStatus(400);
  }
}

router.get('/', (req, res) => res.status(200).json({ teams }));

router.use(apiCredentials);

router.get('/:id', existingId, (req, res) => {
  const team = teams.find(t => t.id === id);
  res.status(200).json(team);
});

router.post('/', validateTeam, (req, res) => {
  if (!req.teams.teams.includes(req.body.sigla) && teams.every((t) => t.sigla !== req.body.sigla)) {
    return res.sendStatus(401);
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

router.put('/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);
  } else {
    res.sendStatus(400);
  }
});

router.delete('/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  if (team) {
    const index = teams.indexOf(team);
    teams.splice(index, 1);
  }
  res.sendStatus(200);
});

module.exports = router;