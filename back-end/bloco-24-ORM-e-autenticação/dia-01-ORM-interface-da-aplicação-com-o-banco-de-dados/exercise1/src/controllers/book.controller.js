const BookService = require('../services/book.service');

const error500Message = 'An error has occurred';

const getAll = async (req, res) => {
  try {
    const books = await BookService.getAll();
    if (books.length < 1) return res.status(404).json({ message: 'No books found' });
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);
  
    if (!book) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const creteBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const newBook = await BookService.createUser(title, author, pageQuantity);

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateBook = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;
    const { id } = req.params;
    const updateBook = await BookService.updateUser(id, title, author, pageQuantity);

    if (!updateBook) return res.status(404).json({ message: 'Book not found' });

    return res.status(200).json({ message: 'Book successfully updated!' });    
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await BookService.deleteBook(id);

    return res.status(200).json({ message: 'Book successfully deleted!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  creteBook,
  updateBook,
  deleteBook,
};