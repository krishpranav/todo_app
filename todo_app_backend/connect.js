const mongoose = require('mongoose')
// const chalk = require('chalk')

mongoose.connect('mongodb://localhost:27017/todo_app', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
}, (error) => {
    error ? console.log('Database: Unable to connect to database') : console.log('Database: MongoDB Connected Succesfully!!')
}) 