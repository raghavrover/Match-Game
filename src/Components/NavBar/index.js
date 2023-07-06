import './index.css'

const NavBar = props => {
  const {score, timer} = props

  return (
    <nav className="nav-element">
      <div className="nav-content">
        <div className="nav-bar-brand-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
            className="website-logo"
            alt="website logo"
          />
        </div>
        <div className="score-container">
          <p className="score-text">
            Score: <span className="span-text">{score}</span>
          </p>

          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            className="timer-icon"
            alt="timer"
          />
          <p className="score color-text">{timer} Sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
