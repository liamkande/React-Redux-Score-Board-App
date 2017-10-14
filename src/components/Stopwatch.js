import React,{ Component } from 'react'

class Stopwatch extends Component{
constructor(props){
  super(props)
  this.state = {
    running: false,
    elapsedTime:0,
    previousTime:0
  }
}
componentDidMount(){
  this.interval = setInterval(this.onTick, 100 *60)
}
componentWillUnmount(){
  clearInterval(this.interval)
}

onTick(){
  let running = this.state
   if (running){
     var now= Date.now()
     this.setState({
       previousTime: now,
       elapsedTime: this.state.elapsedTime + (now - this.state.previousTime)
     })
   }
console.log("onTick")
}

render() {
  var seconds = Math.floor(this.state.elapsedTime / 1000)
    return (
      <div className= "stopwatch container-fluid">
        <h2>Stopwatch</h2>
        <div className="stopwatch-time">{seconds}</div>
        <div className="container-fluid">
          {
            this.state.running ?
            <button className="btn-default" onClick={() => {this.onTick()
            this.setState({running:false})}}>Stop</button> :
            <button className="btn-primary"onClick={() => {this.onTick()
            this.setState({running:true, previousTime: Date.now()})}}>Start</button>
          }

          <button className="btn-danger" onClick={() =>
            this.setState({elapsedTime:0,previousTime: Date.now()})}>Reset</button>
          </div>
      </div>
    )
  }
}

export default Stopwatch
