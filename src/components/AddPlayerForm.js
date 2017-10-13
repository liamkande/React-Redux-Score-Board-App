import React, { Component } from 'react'
import PropTypes from 'prop-types'

class AddPlayerForm extends Component{
constructor(props){
  super(props)
  this.state = {
    name:""
  }
}

render() {
    return (
      <div className="add-player-form">
        <form onSubmit={(e) =>
          {e.preventDefault();
          this.props.onAdd(this.state.name);
          this.setState({name:""})}}
          >
          <input type="text" value={this.state.name} onChange={(e) => {
            this.setState({name: e.target.value})
          }}/>
          <input type="submit" value="Add Player"/>
        </form>
      </div>
    )
  }
}
AddPlayerForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}
export default AddPlayerForm
