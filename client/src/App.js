import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/home/home'
import LeaderBoard from './pages/leader-board/leader-board'
import SnekMode from './game-modes/snek-mode/snek-mode'
import SnekCeption from './game-modes/snek-ception/snek-ception'
import Ouroboros from './game-modes/ouroboros/ouroboros'
import Classik from './game-modes/classik/classik'

import './App.scss';

// import Snake from './components/snake/snake'

// import SnakeIcon from './assets/icons/snake-icon'

const App = () => {
  let vh = window.innerHeight * .01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
  return (
    <BrowserRouter className='main' basename='/'>
      <Route exact path='/' component={ Home } />
      <Route exact path='/leader-board' component={ LeaderBoard } />
      <Route exact path='/snek' component={ SnekMode } />
      <Route exact path='/ouroboros' component={ Ouroboros } />
      <Route exact path='/snek-ception' component={ SnekCeption } />
      <Route exact path='/classik' component={ Classik } />
    </BrowserRouter>
  )
}

// const App = () => {
//   return (
//     <div className="App">
//       <div className='header'>
//         <SnakeIcon className='logo' fillColor={'rgba(235,45,150,1'} />
//         <span>S N E K</span>
//       </div>
//       <Snake gridSize={20}/>
//     </div>
//   );
// }

export default App;
