import React from 'react'

const UpButton = ({ fillColor, className }) => {
  return (
    <svg className={className} fill={fillColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M0 0h24v24H0z" fill="none" />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  )
}

export default UpButton