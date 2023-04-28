const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/react')
}

module.exorts = connectDatabase;