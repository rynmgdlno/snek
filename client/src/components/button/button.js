import React from 'react';

import './button.scss'

const Button = ({ children, ...props  }) => {

  return (
    <button type='button' {...props}>{children}</button>
  )
}

export default Button