import React from 'react'
import { render } from 'react-dom'
import Scoreboard from './containers/ScoreBoard'
import registerServiceWorker from './registerServiceWorker'

render(
  <Scoreboard />, document.getElementById('root')
)
registerServiceWorker()
