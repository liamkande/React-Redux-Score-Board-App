import React from 'react'
import Stats from './Stats'
import Stopwatch from './Stopwatch'
import PropTypes from 'prop-types'

const Header = (props) =>
  <div className="header">
    <Stats players={props.players}/>
    <h1>{props.title}</h1>
    <Stopwatch />
  </div>

Header.propTypes = {
    title: PropTypes.string.isRequired
}
Stats.propTypes = {
  players: PropTypes.array.isRequired
}
export default Header
