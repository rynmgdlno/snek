import React from 'react';

import './custom-button.scss'

const CustomButton = ({ fillColor, children, ...props  }) => {

  const buttonStyle = {
    color: fillColor,
    border: `1px solid ${fillColor}`,
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0)'
  }

  return (
    <button 
    type='button' {...props} 
    style={buttonStyle}>{children}</button>
  )
}

export default CustomButton