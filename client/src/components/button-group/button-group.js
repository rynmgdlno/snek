import React from 'react'

import UpButton from '../../assets/svg/up-button'
import RightButton from '../../assets/svg/right-button'
import DownButton from '../../assets/svg/down-button'
import LeftButton from '../../assets/svg/left-button'

import './button-group.scss'

const ButtonGroup = ({ fillColor }) => {
  return (
    <div>
      <UpButton className='up-button' fillColor={fillColor}/>
      <RightButton className='right-button' fillColor={fillColor}/>
      <DownButton className='down-button' fillColor={fillColor}/>
      <LeftButton className='left-button' fillColor={fillColor}/>
    </div>
  )
}

export default ButtonGroup