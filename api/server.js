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
  origin: ['https://snekgame.com', 'https://api.snekgame.com', 'http://localhost:3000']
}

app.use(cors(corsOptions))
app.use(urlencoded({ extended: false }))
app.use(json())

app.post('/submit-score', (req, res) => {
  console.log(req.body)
  const { player_name, score, game_mode, difficulty } = req.body
  db('scores')
    .insert({
      name: player_name,
      score: score,
      game_mode: game_mode,
      difficulty: difficulty
    })
    .then(entry => {
      res.send('submit success')
    })
    .catch(err => res.status(400).json('There was a problem submitting your score. Please try again later.'))
})

app.get('/recent', (req, res) => {
  db('scores')
  .orderBy('created_at', 'desc')
  .limit(50)
  .then(data => {
    res.json(data)
  })
})


app.get('/top-scores', (req, res) => {
  const { gameMode } = req.query
  db('scores')
  .where('game_mode', gameMode)
  .orderBy('score', 'desc')
  .limit(15)
  .then(data => {
    res.json(data)
  })
})

app.get('/leader-board', (req, res) => {
  const { gameMode, difficulty } = req.query
  db('scores')
  .where('game_mode', gameMode)
  .andWhere('difficulty', difficulty)
  .orderBy('score', 'desc')
  .limit(15)
  .then(data => {
    res.json(data)
  })
})

app.listen(3004)