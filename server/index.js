require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const {SERVER_PORT} = process.env

const {seed} = require('./seed.js')
const {getUserInfo, getUserFavs, getArtists, updateArtists, createUser} = require('./controller.js')

app.use(express.json())
app.use(cors())

//DEV
// app.post('/seed', seed)

//Artists
app.get('/artists', getArtists)
app.put('/artists', updateArtists)

//User
// app.get('/users',getUserInfo)
app.get('/users', getUserFavs)
app.post('/users', createUser)

app.listen(2400, () => console.log(`up on 2400`))