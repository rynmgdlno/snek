import React from 'react'

const DownButton = ({ fillColor, className }) => {
  return (
    <svg fill={fillColor} className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
  )
}

export default DownButton