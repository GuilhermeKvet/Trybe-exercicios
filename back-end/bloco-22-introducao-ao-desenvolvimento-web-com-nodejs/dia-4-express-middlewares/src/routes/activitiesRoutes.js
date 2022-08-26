const express = require('express');
const validateName = require('../middleware/validateName');
const validatePrice = require('../middleware/validatePrice');
const validateDescription = require('../middleware/validateDescription');
const validateRating = require('../middleware/validateRating');
const validateCreatedAt = require('../middleware/validateCreatedAt');
const validateDifficulty = require('../middleware/validateDifficulty');

const router = express.Router();

router.post('/',
  validateName,
  validatePrice,
  validateDescription,
  validateRating,
  validateCreatedAt,
  validateDifficulty,
  async (req, res) => {
  const activitie = req.body;
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = router;