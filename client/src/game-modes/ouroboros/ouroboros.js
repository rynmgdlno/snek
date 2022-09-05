import React, { useState, useEffect, useCallback } from 'react'
// import { useMediaPredicate } from 'react-media-hook'

import { grid } from '../../functions/grid'
import { useInterval } from '../../functions/use-interval'

import HighScores from '../../components/high-scores/high-scores'
import EndGame from '../../components/end-game/end-game'
import Header from '../../components/header/header'
import Difficulty from '../../components/difficulty/difficulty'
import PlayToggle from '../../components/play-toggle/play-toggle'

import UpButton from '../../assets/svg/up-button'
import RightButton from '../../assets/svg/right-button'
import DownButton from '../../assets/svg/down-button'
import LeftButton from '../../assets/svg/left-button'

import './ouroboros.scss'

const Ouroboros = () => {
  const gridSize = 20
  const fillColor = 'rgba(106,190,57,1.0)'
  const board = grid(gridSize)
  // const isMobile = useMediaPredicate('(max-width: 769px)')

  const randomSpace = () => {
    let ranNum = parseInt(Math.random() * (gridSize ** 2))
    let space = board[ranNum]
    return space
  }

  const [snake, setSnake] = useState([{ x: 0, y: 0 }])
  const [snakeIDs, setSnakeIDs] = useState(['0-0'])
  // const [difficulty, setDifficulty] = useState('super')
  const [gameSpeed, setGameSpeed] = useState(null)
  const [direction, setDirection] = useState('right')
  const [food, setFood] = useState(randomSpace)
  const [superFood, setSuperFood] = useState(null)
  const [megaFood, setMegaFood] = useState(null)
  const foodSpace = `${food.x}${'-'}${food.y}`
  const superFoodSpace = superFood ? `${superFood.x}${'-'}${superFood.y}` : null
  const megaFoodSpace = megaFood ? `${megaFood.x}${'-'}${megaFood.y}` : null
  const length = `Length: ${snake.length}`
  const [endGame, setEndGame] = useState(false)
  // Points state and vars
  const [points, setPoints] = useState(0)
  const lengthMult = parseInt(snake.length / 10)
  const superLengthMult = parseInt(snake.length / 100) ? parseInt(snake.length / 100) : 1
  const [superMult, setSuperMult] = useState(0)
  const [megaMult, setMegaMult] = useState(0)
  const [speedLevel, setSpeedLevel] = useState('Normal')
  const [diffPoints, setDiffPoints] = useState(1)
  const totalMult = lengthMult + diffPoints + ((superMult + megaMult) * superLengthMult)

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
    if (keyCode === 32) {
      if (gameSpeed) {
        setGameSpeed(null)
      } else if (speedLevel === 'Easy') {
        setGameSpeed(210)
      } else if (speedLevel === 'Normal') {
        setGameSpeed(180)
      } else if (speedLevel === 'Super') {
        setGameSpeed(130)
      } else if (speedLevel === 'Mega') {
        setGameSpeed(110)
      }
    }
  }, [direction, speedLevel, gameSpeed])

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
    const x = snake[0].x
    const y = snake[0].y
    if (x === -1 || x === gridSize || y === -1 || y === gridSize) {
      setGameSpeed(null)
      setEndGame(true)
    }
    const snakeSet = new Set(snakeIDs)
    if (snakeSet.size !== snakeIDs.length) {
      setPoints(points - 50)
      snake.pop()
    }
  }

  // bonus foods - - - - - - - - - - - - - - - - >
  const genSuperFood = () => {
    let newSuperFood = randomSpace()
    if (snake.length > 29) {
      setSuperFood(newSuperFood)
    }
  }

  const genMegaFood = () => {
    if (snake.length > 59) {
      setMegaFood(randomSpace())
    }
  }

  const resetSuperFood = () => {
    if (superFood) {
      setSuperFood(0)
    }
  }

  const resetMegaFood = () => {
    if (megaFood) {
      setMegaFood(0)
    }
  }

  const resetSuperMult = () => {
    if (superMult) {
      setSuperMult(1)
    }
  }

  const resetMegaMult = () => {
    if (megaMult) {
      setMegaMult(1)
    }
  }

  useInterval(genSuperFood, 6000)
  useInterval(genMegaFood, 4000)
  // - - - - - - - - - - - - - - - - - - - - - - >

  const moveSnake = () => {
    let newSnake = snake
    let newSnakeList = []
    const currX = snake[0].x
    const currY = snake[0].y

    if (direction === 'right') {
      newSnake.unshift({ x: (snake[0].x + 1), y: currY })
    } else if (direction === 'left') {
      newSnake.unshift({ x: (snake[0].x - 1), y: currY })
    } else if (direction === 'down') {
      newSnake.unshift({ x: currX, y: (snake[0].y + 1) })
    } else if (direction === 'up') {
      newSnake.unshift({ x: currX, y: (snake[0].y - 1) })
    }

    if (snakeIDs.includes(foodSpace)) {
      setFood(randomSpace())
      setPoints(points + (100 * totalMult))
    } else if (snakeIDs.includes(superFoodSpace)) {
      setSuperFood(null)
      setPoints(points + (500 * totalMult))
      setSuperMult(superMult + 5)
    } else if (snakeIDs.includes(megaFoodSpace)) {
      setMegaFood(null)
      setPoints(points + (1000 * totalMult))
      setMegaMult(megaMult + 10)
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

  useInterval(resetSuperFood, 12000)
  useInterval(resetMegaFood, 12000)

  useInterval(resetSuperMult, 30000)
  useInterval(resetMegaMult, 30000)

  useInterval(moveSnake, gameSpeed)

  return (
    <div className='page-container-ouro'>
      <Header fillColor={fillColor} />
      <div className='border-ouro'></div>
      <h4 className='mode-title-ouro'>O U R O B O R O S</h4>
      <div className='game-container-ouro'>
        <div className='game-info-ouro'>
          <div className='mode-bar-ouro'>
            <p className='speed-text-ouro' style={{ color: fillColor }}>{speedLevel}</p>
            <div className='controls-ouro'>
              <Difficulty
                setGameSpeed={setGameSpeed}
                setDiffPoints={setDiffPoints}
                setSpeedLevel={setSpeedLevel}
                fillColor={fillColor} />
              <PlayToggle gameSpeed={gameSpeed} setGameSpeed={setGameSpeed} speedLevel={speedLevel} fillColor={fillColor} />
            </div>
          </div>
          <div className='stats-ouro'>
            <h5 className='stats-text-ouro'>{length}</h5>
            <h5 className='stats-text-ouro'>Multiplier: {totalMult}</h5>
            <h5 className='score-ouro'>SCORE: <span className='points'>{points}</span></h5>
          </div>
          <HighScores gameMode='OUROBOROS' fillColor={fillColor}/>
        </div>
        <div className='board-container-ouro'>
          <div className='button-container-horizontal-ouro' onClick={() => { handleArrowPress('up') }}>
            <UpButton fillColor={fillColor} />
          </div>
          <div className='secondary-container-ouro'>
            <div className='button-container-vertical-ouro' onClick={() => { handleArrowPress('left') }}>
              <LeftButton fillColor={fillColor} />
            </div>
            <div className='board-ouro'>
              {board.map((space) => {
                const id = `${space.x}${'-'}${space.y}`;
                return <div
                  className={snakeIDs.includes(id) ? 'snake-ouro space-ouro' :
                    foodSpace === id ? 'food-ouro space-ouro' :
                      superFoodSpace === id ? 'super-food-ouro space-ouro' :
                        megaFoodSpace === id ? 'mega-food-ouro space-ouro' : 'space-ouro'}
                  key={id}
                  id={id}>
                </div>
              })}
            </div>
            <div className='button-container-vertical-ouro' onClick={() => { handleArrowPress('right') }}>
              <RightButton fillColor={fillColor} />
            </div>
          </div>
          <div className='button-container-horizontal-ouro' onClick={() => { handleArrowPress('down') }}>
            <DownButton fillColor={fillColor} />
          </div>
        </div>
      </div>
      {
        endGame && <EndGame snakeLength={snake.length} fillColor={fillColor} score={points} gameMode='OUROBOROS' difficulty={speedLevel}/>
      }
    </div>
  )
}

export default Ouroboros