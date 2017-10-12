import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Player from './components/Player'
import AddPlayerForm from './components/AddPlayerForm'

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
          score: 17,
          id: 1
        },
        {
          name: "Dimitry Luzgin",
          score: 16,
          id: 2
        },
        {
          name: "Levick M'Boukou",
          score: 15,
          id: 3
        }
      ]
    })
  }

  // Score Change Monitor
  onScoreChange(index, delta){
  console.log('onScoreChange', index, delta)
  let {players} = this.state
  players[index].score += delta
  this.setState({players})
  }

  render() {
  const {title="scoreboard"} = this.props
  const {players} = this.state
    return (
      <div className="scoreboard col-md-12 col-lg-12 ">
        <Header title={title} players={players} />
        <div className="players">
          {players.map(
            (player, index) =>
            <Player key={index} {...player} onScoreChange={(delta) => this.onScoreChange(index, delta)}/>
          )}
        </div>
        <AddPlayerForm />
      </div>
    )
  }
}

export default App
