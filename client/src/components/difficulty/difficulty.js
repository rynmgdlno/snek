import React, { useState } from 'react'

import Speed from '../../assets/svg/speed'

import './difficulty.scss'

const Difficulty = ({ setSpeedLevel, setGameSpeed, setDiffPoints, fillColor }) => {
  const [isDrop, setIsDrop] = useState(false)

  return (
    <div className='diff-container'>
      <div className='diff-button'>
        <Speed
          className='speed-button'
          fillColor={fillColor}
          isDrop={isDrop}
          setIsDrop={setIsDrop}
        />
      </div>
      {
        isDrop ?
          <div className='diff-drop'>
            <div className='selection-window'>
              <p onClick={() => {
                setIsDrop(false)
                setDiffPoints(.8)
                setSpeedLevel('Easy')
              }}
                className='option'
                style={{ color: fillColor }}>
                Easy
            </p>
              <p onClick={() => {
                setIsDrop(false)
                setDiffPoints(1)
                setSpeedLevel('Normal')
              }}
                className='option'
                style={{ color: fillColor }}>
                Normal
            </p>
              <p onClick={() => {
                setIsDrop(false)
                setDiffPoints(1.3)
                setSpeedLevel('Super')
              }}
                className='option'
                style={{ color: fillColor }}>
                Super
            </p>
              <p onClick={() => {
                setIsDrop(false)
                setDiffPoints(1.7)
                setSpeedLevel('Mega')
              }}
                className='option'
                style={{ color: fillColor }}>
                Mega
            </p>
              <p onClick={() => setIsDrop(false)} className='option' style={{ color: fillColor }}>X</p>
            </div>
          </div>
          : null
      }
    </div>
  )
}

export default Difficulty