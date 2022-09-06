const validateRating = (req, res, next) => {
  const { rating } = req.body.description;
  if (rating >= 5 || rating < 1) {
    res.status(400).json({ message: "O campo rating deve ser um número inteiro entre 1 e 5" });
  } else {
    next();
  }
}

module.exports = validateRating;