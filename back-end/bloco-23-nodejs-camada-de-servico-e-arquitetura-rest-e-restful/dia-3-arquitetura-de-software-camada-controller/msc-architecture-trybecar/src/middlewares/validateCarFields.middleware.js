const validateCarFields = (req, res, next) => {
  const { model, color, licensePlate } = req.body;
  if (!model || !color || !licensePlate) return res.status(404).json({ message: 'All fields are required' });
  return next();
};

module.exports = {
  validateCarFields,
};