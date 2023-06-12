// Task Model

const mongoose = require('mongoose')

// task schema[name + task required via api]
const taskSchema = mongoose.Schema({
    name: {
        required: true,
        type: String,
    }, task: {
        required: false,
        type: String
    }
})

const Task = mongoose.model('Task', taskSchema)

// export task model
module.exports = Task