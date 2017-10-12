import React from 'react'
import Counter from './Counter'
import PropTypes from 'prop-types'

const Player = (props) =>
  <div className="player">
    <div className="player-name">
      {props.name}
    </div>
    <div className="player-score">
      <Counter score={props.score} onChange={props.onScoreChange}/>
    </div>
  </div>

Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onScoreChange: PropTypes.func.isRequired,
    id:PropTypes.number.isRequired
}
Counter.propTypes = {
  onChange: PropTypes.func.isRequired
}

export default Player
