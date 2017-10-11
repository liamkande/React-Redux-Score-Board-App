import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="scoreboard">
        <div className="header">
          <h1>Scoreboard</h1>
        </div>
        <div className="players">
          <div className="player">
            <div className="player-name">
              Liam Kande
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 17 </div>
                <button className="counter-action decrement"> + </button>
              </div>
            </div>
          </div>
          <div className="player">
            <div className="player-name">
              Dimitri Luzgin
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 16 </div>
                <button className="counter-action decrement"> + </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App
