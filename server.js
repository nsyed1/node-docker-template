// Load env vars with dotenv
const { node_env, port } = require('./config')

// Load express framework module
const express = require('express')
const app = express()

// Define request response in root URL
app.get('/', (req,res) => {
    console.log('app received received a GET request')
    res.send('Here you go, something to see')
    console.log('app sent response')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
    console.log(`on ${node_env} environment`)
})