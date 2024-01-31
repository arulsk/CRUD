const Book = require('../model/book');

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getBookById = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const createBook = async (req, res) => {
    const { BookTitle, BookAuthor, BookGenres } = req.body;
    try {
        const newBook = await Book.create({
            BookTitle,
            BookAuthor,
            BookGenres,
        });
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const updateBook = async (req, res) => {
    const { id } = req.params;
    const { BookTitle, BookAuthor, BookGenres } = req.body;
    try {
        const book = await Book.findByPk(id);
        if (book) {
            await book.update({
                BookTitle,
                BookAuthor,
                BookGenres,
            });
            res.json(book);
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteBook = async (req, res) => {
    const { id } = req.params;
    try {
        const book = await Book.findByPk(id);
        if (book) {
            await book.destroy();
            res.json({ message: 'Book deleted successfully' });
        } else {
            res.status(404).json({ error: 'Book not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook,
};
