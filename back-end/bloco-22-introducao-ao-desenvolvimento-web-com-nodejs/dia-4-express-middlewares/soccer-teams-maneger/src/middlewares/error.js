const errorMiddleware = (err, _req, res, next) => {
  const { status, message } = err;
  console.log(err);
  res.status(status).json({ message: `Ocorreu um erro, ${message}`});
  next()
}

module.exports = errorMiddleware;