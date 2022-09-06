const validateName = (req, res, next) => {
  const name = req.body.name;
  if (name.length === 0) {
    res.status(400).json({ message: "O campo name é obrigatório" });
  }
  else if (name.length <= 4) {
    res.status(400).json({ message: "O campo name deve ter pelo menos 4 caracteres" })
  } else {
    next();
  }
}

module.exports = validateName;