import React from 'react'
import { render } from 'react-dom'
import './App.css'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import PlayerReducer from './reducers/player'
import Scoreboard from './containers/Scoreboard'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
)

render(
  <Provider store={store}>
  <Scoreboard />
</Provider>, document.getElementById('root')
)
registerServiceWorker()
