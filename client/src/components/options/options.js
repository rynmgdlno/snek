import React from 'react'

import './options.scss'

const Options = ({ mode }) => {
  return (
    <div>
      <div className='difficulty'>
        <div className='radio-container'>
          <label for='Easy'>Easy</label>
          <input className='radio' type='radio' id='Easy' name='difficulty' value='Easy' />
        </div>
        <div className='radio-container'>
          <label for='Normal'>Normal</label>
          <input className='radio' type='radio' id='Normal' name='difficulty' value='Normal' />
        </div>
        <div className='radio-container'>
          <label for='Super'>Super</label>
          <input className='radio' type='radio' id='Super' name='difficulty' value='Super' />
        </div>
        <div className='radio-container'>
          <label for='Mega'>Mega</label>
          <input className='radio' type='radio' id='Mega' name='difficulty' value='Mega' />
        </div>
      </div>
    </div>
  )
}

export default Options