import React, { useState, useEffect } from 'react'

import { getHighScores } from '../../functions/scores'

import './high-scores.scss'

const HighScores = ({ gameMode, difficulty, fillColor, title }) => {
  const [highScores, setHighScores] = useState(null)

  useEffect(() => {
    const getScores = async () => {
      let scores = await getHighScores(gameMode, difficulty)
      setHighScores(scores)
    }

    getScores()
  }, [gameMode, difficulty])

  return (
    <div className='high-scores' style={{ color: fillColor }}>
      <h3>{title}</h3>
      {
        highScores && highScores.map((score, index) => (
          <div key={index} className='individual-high-score'>
            <span>{score.name}</span>
            <span>{score.score}</span>
          </div>
        ))
      }
    </div>
  )
}

export default HighScores