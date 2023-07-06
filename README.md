In this project, I've built a image **Match Game** by applying react concepts Components, Component Life Cycle methods Constructor, render, ComponentDidMount and shcedulers to a set timer.

### Design Files on Different Divices

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/match-game-sm-outputs.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Match Game](https://assets.ccbp.in/frontend/content/react-js/match-game-lg-output.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px) - Scorecard](https://assets.ccbp.in/frontend/content/react-js/match-game-score-card-lg-output.png)

</details>

### Functionalities Added

<details>
<summary>Clcik to view</summary>
<br/>

The app has the following functionalities

- Initially,
  - Score is `0` and timeer is `60` sec
  - The **Fruits** tab is the active tab and the thumbnails with **FRUIT** as their category will be displayed
- The timer will start running backwards from the `60` sec
- When a tab is clicked, then the thumbnails in the corresponding category will be displayed
- When a thumbnail is clicked, if that is matched with the image to be matched,
  - Score is incremented by one
  - The new image to be matched will be generated randomly among the value of the key `imageUrl` from **imagesList** provided
- When a thumbnail is clicked, if it is not matched with the image to be matched,
  - The game will end, and the total score view will be displayed
  - When **PLAY AGAIN** button is clicked, then we will be able to play the game again
    - The score and time values will be reset to `0` and `60` sec respectively
    - The image to be matched will reset to the value of the key `imageUrl` from the first object in **imagesList** provided
    - The active tab will reset to **Fruits**, and the thumbnails with **FRUIT** as their category will be displayed
- When the timer reaches `0` sec, then the game will end, and the total score view will be displayed
- The App is provided with `tabsList`. It consists of a list of tabItem objects with the following properties in each tabItem object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |    tabId    |  String   |
  | displayText |  String   |

- The App is provided with `imagesList`. It consists of a list of imageItem objects with the following properties in each imageItem object

  |     Key      | Data Type |
  | :----------: | :-------: |
  |      id      |  String   |
  |   imageUrl   |  String   |
  | thumbnailUrl |  String   |
  |   category   |  String   |

</details>

### Resources

<details>
<summary>Image URLs</summary>

- [https://assets.ccbp.in/frontend/react-js/match-game-bg.png](https://assets.ccbp.in/frontend/react-js/match-game-bg.png)
- [https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png](https://assets.ccbp.in/frontend/react-js/match-game-score-card-lg-bg.png)
- [https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png](https://assets.ccbp.in/frontend/react-js/match-game-score-card-sm-bg.png)
- [https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png](https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png) alt should be **website logo**
- [https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png](https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png) alt should be **timer**
- [https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png](https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png) alt should be **reset**
- [https://assets.ccbp.in/frontend/react-js/match-game-trophy.png](https://assets.ccbp.in/frontend/react-js/match-game-trophy.png) alt should be **trophy**

</details>

<details>
<summary>Colors</summary>

<br/>

<div style="background-color:#2c0e3a; width: 150px; padding: 10px; color: white">Hex: #2c0e3a</div>
<div style="background-color:#ffffff; width: 150px; padding: 10px; color: black">Hex: #ffffff</div>
<div style="background-color:#fec653; width: 150px; padding: 10px; color: black">Hex: #fec653</div>
<div style="background-color:#cf60c8; width: 150px; padding: 10px; color: black">Hex: #cf60c8</div>
</details>

<details>
<summary>Font-families</summary>

- Roboto

</details>
