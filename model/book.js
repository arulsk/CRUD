const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnection'); 

const Book = sequelize.define('Book', {
    BookId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    BookTitle: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BookAuthor: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    BookGenres: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});

module.exports = Book;
