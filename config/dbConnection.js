const Sequelize = require("sequelize")

const sequelize = new Sequelize('bookShop','root','Arulk1535@29',{
        host : 'localhost',
        dialect : 'mysql'
    })


module.exports = {sequelize}