import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Player from './components/Player'
import Counter from './components/Counter'
import PropTypes from 'prop-types'

//Main Component
class App extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
  const {title="Scoreboard"} = this.props
    return (
      <div className="scoreboard col-md-12 col-lg-12 ">
        <Header title={title}/>
        <div className="players">
          <Player name="Liam Kande" score={17} />
          <Player name="Dimitry Luzgin" score={16} />
        </div>
      </div>
    )
  }
}
App.propTypes = {
    title: PropTypes.string
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}
Player.propTypes = {
    name: PropTypes.string.isRequired
}
Counter.propTypes = {
    score: PropTypes.number.isRequired
}

export default App
