const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./config/dbConnection'); 
const bookRoutes = require('./routes/bookRoutes');

const app = express();

app.use(bodyParser.json());

sequelize.sync({ force: false }).then(() => {
    console.log('Database synced successfully');
}).catch((error) => {
    console.error('Error syncing database:', error);
});

app.use('/books', bookRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
