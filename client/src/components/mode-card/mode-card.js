import React from 'react'
import { Link } from 'react-router-dom'

import './mode-card.scss'

const ModeCard = ({ title, video, children, link, isMobile }) => {
  return (
    <>
      {
        isMobile ?
          <div className='mode-card'>
            <h3 className='card-title'>{title}</h3>
            <video loop AutoPlay='true' width='100%'>
              <source src={video} />
            </video>
            <p className='card-text'>{children}</p>
            <Link className='play' to={link}><h4 className='play-text'>P L A Y</h4></Link>
          </div>
          :
          <div className='mode-card'>
            <div className='video-container'>
              <video loop autoPlay={true} width='100%'>
                <source src={video} />
              </video>
            </div>
            <div className='sub-container'>
              <h3 className='card-title'>{title}</h3>
              <p className='card-text'>{children}</p>
              <Link className='play' to={link}><h4 className='play-text'>P L A Y</h4></Link>
            </div>
          </div>
      }
    </>
  )
}

export default ModeCard