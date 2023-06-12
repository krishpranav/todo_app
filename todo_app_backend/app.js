// imports
const express = require('express')
const taskRoute = require('./routes/task_routes')

// db 
require('./connect')

const app = express()
const port = 8080

// use json to give ouput as json
app.use(express.json())

// use task route.
app.use(taskRoute)

// listens
app.listen(port, () => {
    console.log(`🚀 Server Is Running At: http://localhost:${port} 🚀`)
})