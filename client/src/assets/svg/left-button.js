import React from 'react'

const LeftButton = ({ fillColor, className }) => {
  return (
    <svg fill={fillColor} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
    </svg>
  )
}

export default LeftButton

