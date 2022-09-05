import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useMediaPredicate } from 'react-media-hook'

import { getRecentScores } from '../../functions/scores'

import ModeCard from '../../components/mode-card/mode-card'
import SmallLeaderBoard from '../../components/small-leader-board/small-leader-board'

import Logo from '../../assets/svg/snake-icon'
import GitHubIcon from '../../assets/svg/github-icon'

import snekVideo from '../../assets/video/snek.mp4'
import ouroVideo from '../../assets/video/Ouro.mp4'
import ceptionVideo from '../../assets/video/ception.mp4'
import classikVideo from '../../assets/video/classik.mp4'

import './home.scss'

const Home = () => {
  const [recentScores, setScores] = useState(null)
  const fillColor = 'rgb(255, 45, 203)'
  const subFillColor = 'rgba(106,30,79,1.0)'
  const isMobile = useMediaPredicate('(max-width: 769px)')

  useEffect(() => {
    const getScores = async () => {
      let scores = await getRecentScores()
      setScores(scores)
    }

    getScores()
  }, [])

  return (
    <div className='home'>
      <div className='home-header'>
        <Logo className='home-header-logo' fillColor={fillColor} />
        <h1 className={'home-header-title'} style={{ color: fillColor }}>S N E K</h1>
      </div>
      <div className='home-container'>
        <div className='home-main'>
          <p className='home-intro'>Welcome to <span className='intro-title'>S N E K</span>, a slightly ridiculous snake game. There's various modes to choose from to keep you busy at work.</p>

          <p className='home-intro'>To start a game select your speed setting and press play (except on Classik mode, which starts automatically). To control the snake use the arrow keys (desktop) or arrow buttons (mobile). Space bar operates the play / pause toggle. Hit the logo to return to the home screen.</p>

          <div className='intro-border'></div>
          <div className='mode-window'>
            <h2 className='section-title'>G A M E _ M O D E S</h2>
            <ModeCard title={'S N E K'} video={snekVideo} link='/snek' isMobile={isMobile}>
              Walls are pass-through, snake is not. Points increase with snake length. Special snacks appear after a certain length, are timed, award higher points, and add timed point multipliers which can be chained. Go too long without a special snack and the snack multiplier resets. Speed is static but with four difficulty levels which also increase the point multiplier.
          </ModeCard>
            <div className='intro-border'></div>
            <ModeCard title={'O U R O B O R O S'} video={ouroVideo} link='/ouroboros' isMobile={isMobile}>
              Same point system as S N E K mode but the snake can eat itself, albeit with point and length penalties. Walls are solid.
          </ModeCard>
            <div className='intro-border'></div>
            <ModeCard title={'S N E K C E P T I O N'} video={ceptionVideo} link='/snek-ception' isMobile={isMobile}>
              "See? Paradox." BWAHHH BWAHHHHHHHHHHH
          </ModeCard>
            <div className='intro-border'></div>
            <ModeCard title={'C L A S S I K'} video={classikVideo} link='/classik' isMobile={isMobile}>
              Simple like the original. No special snacks. Speed and point values increase with length.
          </ModeCard>
          </div>
          <div className='small-leader-window'>
            <SmallLeaderBoard />
          </div>
        </div>
        <div className='home-scores'>
          <Link to='/leader-board'>
            <h5 className='leader-link'>CLICK HERE FOR ALL LEADER BOARDS</h5>
          </Link>
          <h2 className='scores-title'>Recent Scores:</h2>
          <div className='score-header'>
            <h4 className='scores-col'>Player<span> (game)</span></h4>
            <h4 className='scores-col'>Score</h4>
          </div>
          {
            recentScores && recentScores.map((score, index) => (
              <div key={index} className='score'>
                <span>{score.name}<span className='score-mode'>{` (${score.gamemode})`}</span></span>
                <span>{score.score}</span>
              </div>
            ))
          }
        </div>
      </div>
      <div className='footer'>
        <span className='footer-text'>Created by Ryan Magdaleno. © 2021</span>
        <div className='social-links'>
          <GitHubIcon className='git-hub-icon' fillColor={subFillColor} />
        </div>
      </div>
    </div>
  )
}

export default Home