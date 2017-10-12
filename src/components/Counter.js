import React, { Component } from 'react'

// Counter Component
class Counter extends Component{
  constructor(props){
      super(props);
      this.state = {
          score: this.props.initialscore
      }
  }
  incrementScore(){
    this.setState({
        score: this.state.score + 1
    })
}
decrementScore(){
  this.setState({
      score: this.state.score - 1
  })
}
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={(e) => this.decrementScore()}> - </button>
        <div className="counter-score"> {this.state.score} </div>
        <button className="counter-action increment" onClick={(e) => this.incrementScore()}> + </button>
      </div>
    )
  }
}

export default Counter
