const vidateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name.length < 3) return res.status(400).json({ message: '"name" is required' });
  return next();
};

module.exports = {
  vidateName,
}