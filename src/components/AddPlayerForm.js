import React, { Component } from 'react'

class AddPlayerForm extends Component{

constructor(props){
  super(props)
  this.state = {}
}

render() {
    return (
      <div className="add-player-form">
        <form>
          <input type="text" />
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    )
  }
}
export default AddPlayerForm
