require('dotenv').config()

const express = require('express')
const urlencoded = express.urlencoded
const json = express.json
const cors = require('cors')
const knex = require('knex')

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
  }
})

const app = express()

const corsOptions = {
  origin: ['http://snekgame.com', 'http://api.snekgame.com']
}

app.use(cors(corsOptions))
app.use(urlencoded({ extended: false }))
app.use(json())

app.post('/submit-score', (req, res) => {
  const { player_name, score, game_mode, difficulty } = req.body
  db('scores')
    .insert({
      name: player_name,
      score: score,
      gamemode: game_mode,
      difficulty: difficulty,
      created: new Date()
    })
    .then(entry => {
      res.send('submit success')
    })
    .catch(err => res.status(400).json('There was a problem submitting your score. Please try again later.'))
})

app.get('/recent', (req, res) => {
  db('scores')
  .orderBy('created', 'desc')
  .limit(50)
  .then(data => {
    res.json(data)
    // console.log(data)
  })
})


app.get('/top-scores', (req, res) => {
  const { gameMode } = req.query
  console.log(req)
  db('scores')
  .where('gamemode', gameMode)
  .orderBy('score', 'desc')
  .limit(15)
  .then(data => {
    res.json(data)
  })
})

app.get('/leader-board', (req, res) => {
  const { gameMode, difficulty } = req.query
  db('scores')
  .where('gamemode', gameMode)
  .andWhere('difficulty', difficulty)
  .orderBy('score', 'desc')
  .limit(15)
  .then(data => {
    res.json(data)
  })
})

app.listen(5000)