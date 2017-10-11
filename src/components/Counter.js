import React from 'react'

// Counter Component
export const Counter = (props) => (
<div className="counter">
  <button className="counter-action decrement"> - </button>
  <div className="counter-score"> {props.score} </div>
  <button className="counter-action decrement"> + </button>
</div>
)

export default Counter
