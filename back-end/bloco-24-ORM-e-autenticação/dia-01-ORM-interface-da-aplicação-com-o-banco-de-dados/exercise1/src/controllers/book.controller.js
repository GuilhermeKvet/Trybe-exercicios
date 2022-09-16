const BookService = require('../services/book.service');

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    if (books.length < 1) return res.status(404).json({ message: 'No books found' });
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
};