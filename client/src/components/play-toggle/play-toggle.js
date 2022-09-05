import React from 'react'

import Play from '../../assets/svg/play'
import Pause from '../../assets/svg/pause'

import './play-toggle.scss'

const PlayToggle = ({ fillColor, speedLevel, setGameSpeed, gameSpeed }) => {

  const playButton = () => {
    if (speedLevel === 'Easy') {
      setGameSpeed(210)
    } else if (speedLevel === 'Normal') {
      setGameSpeed(180)
    } else if (speedLevel === 'Super') {
      setGameSpeed(130)
    } else if (speedLevel === 'Mega') {
      setGameSpeed(110)
    }
  }

  return (
    <div>
      {
        !gameSpeed ? <Play className='toggle-button' playButton={playButton} fillColor={fillColor} /> :
          <Pause className='toggle-button' setGameSpeed={setGameSpeed} fillColor={fillColor} />
      }

    </div>
  )
}

export default PlayToggle