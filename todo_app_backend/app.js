const express = require('express')

// app backend
require('./connect')

const app = express()
const port = 8080

app.use(express.json())

app.listen(port, () => {
    console.log(`🚀 Server Is Running At: http://localhost:${port} 🚀`)
})