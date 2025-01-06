const mongoose = require('mongoose');
const app = require('./app');

const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
    .then(() => app.listen(PORT, () => {
        console.log('Database connection successfully');
        console.log(`Server running on port ${PORT}`)


    }))
    .catch(error => {
        console.log(error.message);
        console.error('Error details:', err.message);
        process.exit(1);
    });

