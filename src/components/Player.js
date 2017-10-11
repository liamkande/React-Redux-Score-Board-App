import React from 'react'
import Counter from './Counter'
// Player Component
export const Player = (props) => (
  <div className="player">
    <div className="player-name">
      {props.name}
    </div>
    <div className="player-score">
      <Counter score={props.score} />
    </div>
  </div>
)

export default Player
