import React, { useState } from 'react'

import { submitScore } from '../../functions/scores'

import CustomButton from '../custom-button/custom-button'
import FormInput from '../form-input/form-input'

import Winner from '../../assets/svg/winner'
import Loser from '../../assets/svg/loser'

import './end-game.scss'

const EndGame = ({ snakeLength, fillColor, score, gameMode, difficulty }) => {
  const [user, setUser] = useState(null)
  const [posted, setPosted] = useState(false)

  const handleChange = (e) => {
    setUser(e.target.value)
  }

  const newGame = () => {
    window.location.reload()
  }

  return (
    <div style={{ color: fillColor }} className='end-game'>
      {
        snakeLength < 400 ?
          <>
            <Loser className='end-game-image' fillColor={fillColor} />
            <h2 className='modal-title'>You Lost :(</h2>
          </> :
          <>
            <Winner className='end-game-image' fillColor={fillColor} />
            <h2 className='modal-title'>You Beat The Game!</h2>
          </>
      }
      <p className='modal-data'>Your Name: {user}</p>
      <p className='modal-data'>Your Score: {score}</p>
      {
        !posted ?
          <>
            <FormInput className='modal-form' fillColor={fillColor} id='name' type='text' name='name' placeholder='name' label='name' onChange={handleChange} maxLength={10} />
            <CustomButton
              className='modal-button'
              disabled={user ? false : true}
              fillColor={fillColor}
              onClick={() => {
                setPosted(true)
                submitScore(user, score, gameMode, difficulty)
              }}>
              Post Your Score
          </CustomButton>
          </> :
          <h3>Score Posted!</h3>
      }
      <CustomButton
        className='modal-button'
        fillColor={fillColor}
        onClick={() => newGame()}>
        New Game
      </CustomButton>
    </div>
  )
}

export default EndGame