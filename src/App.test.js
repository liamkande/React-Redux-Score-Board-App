import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from './src/containers/ScoreBoard'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ScoreBoard />, div);
});
