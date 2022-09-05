import React from 'react'

const Play = ({ fillColor, playButton, className }) => {
  return (
    <svg onClick={() => {
      playButton()
    }}
    fill={fillColor} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

export default Play