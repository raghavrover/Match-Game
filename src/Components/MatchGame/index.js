import {Component} from 'react'
import NavBar from '../NavBar'
import CategoryTabItem from '../CategoryTabItem'
import ListItem from '../ListItem'
import './index.css'

class MatchGame extends Component {
  constructor(props) {
    super(props)
    const {imagesList, tabsList} = this.props
    this.state = {
      activeTabId: tabsList[0].tabId,
      currentImage: imagesList[0].imageUrl,
      currentImageId: imagesList[0].id,
      score: 0,
      timer: 60,
      isGameCompleted: false,
    }
  }

  componentDidMount = () => {
    let seconds = 60
    this.timerId = setInterval(() => {
      if (seconds === 1) {
        clearInterval(this.timerId)
        this.setState({isGameCompleted: true, timer: 0})
      }
      seconds -= 1
      this.setState({timer: seconds})
    }, 1000)
  }

  getFilteredImagesList = activeTabId => {
    const {imagesList} = this.props
    const filteredImagesList = imagesList.filter(
      image => image.category === activeTabId,
    )
    return filteredImagesList
  }

  updateTabId = tabId => {
    this.setState({activeTabId: tabId})
  }

  getRandomImage = () => {
    const {imagesList} = this.props
    const imageDetails = imagesList[Math.floor(Math.random() * 40) % 29]
    this.setState({
      currentImage: imageDetails.imageUrl,
      currentImageId: imageDetails.id,
    })
  }

  verifyThumbnail = id => {
    const {currentImageId} = this.state
    if (currentImageId === id) {
      this.setState(prevState => ({score: prevState.score + 1}))
      this.getRandomImage()
    } else {
      this.setState({isGameCompleted: true})
      clearInterval(this.timerId)
    }
  }

  resetGame = () => {
    const {tabsList, imagesList} = this.props
    this.setState({
      activeTabId: tabsList[0].tabId,
      currentImage: imagesList[0].imageUrl,
      currentImageId: imagesList[0].id,
      score: 0,
      timer: 60,
      isGameCompleted: false,
    })
    this.componentDidMount()
  }

  render() {
    const {
      score,
      timer,
      activeTabId,
      currentImage,
      isGameCompleted,
    } = this.state
    const {tabsList} = this.props
    const filteredImagesList = this.getFilteredImagesList(activeTabId)

    return (
      <>
        <div className="bg-container">
          <NavBar score={score} timer={timer} />
          {!isGameCompleted && (
            <div className="images-card">
              <img src={currentImage} className="random-img" alt="match" />
              <ul className="tabs-container">
                {tabsList.map(eachTab => (
                  <CategoryTabItem
                    key={eachTab.tabId}
                    tabItem={eachTab}
                    updateTabId={this.updateTabId}
                    isActiveTabId={activeTabId === eachTab.tabId}
                  />
                ))}
              </ul>
              <ul className="thumbnails-container">
                {filteredImagesList.map(eachItem => (
                  <ListItem
                    imageDetails={eachItem}
                    key={eachItem.id}
                    verifyThumbnail={this.verifyThumbnail}
                  />
                ))}
              </ul>
            </div>
          )}
          {isGameCompleted && (
            <div className="game-score-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
                className="trophy"
                alt="trophy"
              />
              <p className="your-score-text">YOUR SCORE</p>
              <p className="score-count">{score}</p>

              <button
                className="play-again-btn"
                type="button"
                onClick={this.resetGame}
              >
                <div className="reset-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
                    className="reset-icon-img"
                    alt="reset"
                  />
                  <p className="play-again-text">PLAY AGAIN</p>
                </div>
              </button>
            </div>
          )}
        </div>
      </>
    )
  }
}

export default MatchGame
