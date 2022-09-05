import React from 'react'

import Header from '../../components/header/header'
import HighScores from '../../components/high-scores/high-scores'

import './leader-board.scss'

const LeaderBoard = () => {
  return (
    <div className='leader-board'>
      <Header fillColor='rgb(255, 45, 203)' />
      <div className='border'></div>
      <h2>Leader Boards</h2>
      <div className='game-high-score-container snek-leader-board'>
        <h3>S N E K</h3>
        <div className='score-container'>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEK' difficulty='Easy' fillColor='rgb(255, 45, 203)' title='Easy' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEK' difficulty='Normal' fillColor='rgb(255, 45, 203)' title='Normal' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEK' difficulty='Super' fillColor='rgb(255, 45, 203)' title='Super' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEK' difficulty='Mega' fillColor='rgb(255, 45, 203)' title='Mega' />
          </div>
        </div>
      </div>
      <div className='game-high-score-container ouroboros-leader-board'>
        <h3 className='ouroboros-title'>O U R O B O R O S</h3>
        <div className='score-container'>
          <div className='difficulty-container'>
            <HighScores gameMode='OUROBOROS' difficulty='Easy' fillColor='rgba(106,190,57,1.0)' title='Easy' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='OUROBOROS' difficulty='Normal' fillColor='rgba(106,190,57,1.0)' title='Normal' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='OUROBOROS' difficulty='Super' fillColor='rgba(106,190,57,1.0)' title='Super' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='OUROBOROS' difficulty='Mega' fillColor='rgba(106,190,57,1.0)' title='Mega' />
          </div>
        </div>
      </div>
      <div className='game-high-score-container snekception-leader-board'>
        <h3 className='ception-title'>S N E K C E P T I O N</h3>
        <div className='score-container'>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEKCEPTION' difficulty='Easy' fillColor='rgba(230,24,19,1.0)' title='Easy' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEKCEPTION' difficulty='Normal' fillColor='rgba(230,24,19,1.0)' title='Normal' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEKCEPTION' difficulty='Super' fillColor='rgba(230,24,19,1.0)' title='Super' />
          </div>
          <div className='difficulty-container'>
            <HighScores gameMode='SNEKCEPTION' difficulty='Mega' fillColor='rgba(230,24,19,1.0)' title='Mega' />
          </div>
        </div>
      </div>
      <div className='game-high-score-container classik-leader-board'>
        <h3 className='classik-title'>C L A S S I K</h3>
        <div className='difficulty-container'>
          <HighScores gameMode='CLASSIK' difficulty='N/A' fillColor='rgba(114,95,1,1.0)' title='' />
        </div>
      </div>
    </div>
  )
}

export default LeaderBoard