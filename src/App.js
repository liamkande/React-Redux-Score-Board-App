import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Player from './components/Player'
import Counter from './components/Counter'
import PropTypes from 'prop-types'

//Main Component
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      players: []
  }
}
  componentDidMount() {
    this.setState({
      players :[
        {
          name: "Liam Kande",
          score: 14
        },
        {
          name: "Dimitry Luzgin",
          score: 16
        }
      ]
    })
  }
  render() {
  const {title="Scoreboard"} = this.props
  const {players} = this.state
    return (
      <div className="scoreboard col-md-12 col-lg-12 ">
        <Header title={title}/>
        <div className="players">
          {players.map(
            (player, i ) =>
            <Player key={i} {...player} />
          )}
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
