import React from 'react'

const RightButton = ({ fillColor, className }) => {
  return (
    <svg className={className} fill={fillColor} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px">
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
  )
}

export default RightButton