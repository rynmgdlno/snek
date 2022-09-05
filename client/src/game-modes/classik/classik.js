import React, { useState, useEffect, useCallback } from 'react'
// import { useMediaPredicate } from 'react-media-hook'

import { grid } from '../../functions/grid'
import { useInterval } from '../../functions/use-interval'

import HighScores from '../../components/high-scores/high-scores'
import EndGame from '../../components/end-game/end-game'
import Header from '../../components/header/header'
import UpButton from '../../assets/svg/up-button'
import RightButton from '../../assets/svg/right-button'
import DownButton from '../../assets/svg/down-button'
import LeftButton from '../../assets/svg/left-button'

import './classik.scss'

const Classik = () => {
  const gridSize = 20
  const fillColor = 'rgba(114,95,1,1.0)'
  const board = grid(gridSize)
  // const isMobile = useMediaPredicate('(max-width: 769px)')

  const randomSpace = () => {
    let ranNum = parseInt(Math.random() * (gridSize ** 2))
    let space = board[ranNum]
    return space
  }

  const [snake, setSnake] = useState([{ x: 0, y: 0 }])
  const [snakeIDs, setSnakeIDs] = useState(['0-0'])
  const [gameSpeed, setGameSpeed] = useState(140)
  const [direction, setDirection] = useState('right')
  const [food, setFood] = useState(randomSpace)
  const foodSpace = `${food.x}${'-'}${food.y}`
  const length = `Length: ${snake.length}`
  const [endGame, setEndGame] = useState(false)
  // Points state and vars
  const [points, setPoints] = useState(0)
  const lengthMult = parseInt(snake.length / 5 + 1)

  // - - - - - - - - - - - - - - - - - - - - - - >

  const handleKeyPress = useCallback(e => {
    const { keyCode } = e
    if (direction !== 'right' && keyCode === 37) {
      setDirection('left')
    }
    if (direction !== 'down' && keyCode === 38) {
      setDirection('up')
    }
    if (direction !== 'left' && keyCode === 39) {
      setDirection('right')
    }
    if (direction !== 'up' && keyCode === 40) {
      setDirection('down')
    }
  }, [direction])

  const handleArrowPress = useCallback(buttonValue => {
    if (direction !== 'right' && buttonValue === 'left') {
      setDirection('left')
    }
    if (direction !== 'down' && buttonValue === 'up') {
      setDirection('up')
    }
    if (direction !== 'left' && buttonValue === 'right') {
      setDirection('right')
    }
    if (direction !== 'up' && buttonValue === 'down') {
      setDirection('down')
    }
  }, [direction])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleKeyPress])

  const loser = () => {
    const snakeSet = new Set(snakeIDs)
    if (snakeSet.size !== snakeIDs.length) {
      setGameSpeed(null)
      setEndGame(true)
    }
  }

  // - - - - - - - - - - - - - - - - - - - - - - >

  const moveSnake = () => {
    let newSnake = snake
    let newSnakeList = []
    const currX = snake[0].x
    const currY = snake[0].y

    if (direction === 'right') {
      newSnake.unshift({ x: (snake[0].x + 1) % gridSize, y: currY })
    } else if (direction === 'left') {
      newSnake.unshift({ x: (snake[0].x - 1 + gridSize) % gridSize, y: currY })
    } else if (direction === 'down') {
      newSnake.unshift({ x: currX, y: (snake[0].y + 1) % gridSize })
    } else if (direction === 'up') {
      newSnake.unshift({ x: currX, y: (snake[0].y - 1 + gridSize) % gridSize })
    }

    if (snakeIDs.includes(foodSpace)) {
      setFood(randomSpace())
      setPoints(points + (100 * lengthMult))
      setGameSpeed(gameSpeed - .5)
    } else {
      newSnake.pop()
    }

    setSnake(newSnake)

    snake.forEach((unit) => {
      newSnakeList.push(`${unit.x}${'-'}${unit.y}`)
    })

    setSnakeIDs(newSnakeList)
    loser()
  }

  useInterval(moveSnake, gameSpeed)

  return (
    <div className='page-container-classik'>
      <Header fillColor={fillColor} />
      <div className='border-classik'></div>
      <h4 className='mode-title-classik'>C L A S S I K</h4>
      <div className='game-container-classik'>
        <div className='game-info-classik'>
          <div className='mode-bar-classik'>
          </div>
          <div className='stats-classik'>
            <h5 className='stats-text-classik'>{length}</h5>
            <h5 className='score-classik'>SCORE: <span className='points-classik'>{points}</span></h5>
          </div>
          <HighScores gameMode='CLASSIK' fillColor={fillColor}/>
        </div>
        <div className='board-container-classik'>
          <div className='button-container-horizontal-classik' onClick={() => { handleArrowPress('up') }}>
            <UpButton fillColor={fillColor} />
          </div>
          <div className='secondary-container-classik'>
            <div className='button-container-vertical-classik' onClick={() => { handleArrowPress('left') }}>
              <LeftButton fillColor={fillColor} />
            </div>
            <div className='board-classik'>
              {board.map((space) => {
                const id = `${space.x}${'-'}${space.y}`;
                return <div
                  className={snakeIDs.includes(id) ? 'snake-classik space-classik' :
                    foodSpace === id ? 'food-classik space-classik' : 'space-classik'}
                  key={id}
                  id={id}>
                </div>
              })}
            </div>
            <div className='button-container-vertical-classik' onClick={() => { handleArrowPress('right') }}>
              <RightButton fillColor={fillColor} />
            </div>
          </div>
          <div className='button-container-horizontal-classik' onClick={() => { handleArrowPress('down') }}>
            <DownButton fillColor={fillColor} />
          </div>
        </div>
      </div>
      {
        endGame && <EndGame snakeLength={snake.length} fillColor={fillColor} score={points} gameMode='CLASSIK' difficulty='N/A'/>
      }
    </div>
  )
}

export default Classik