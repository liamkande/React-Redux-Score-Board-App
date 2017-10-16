import * as PlayerActionTypes from '../actiontypes/player'

export const addPlayer = name => {
  return {
    type: PlayerActionTypes.ADD_PLAYER,
    name
  }
}

export const removePlayer = index => {
  return {
    type: PlayerActionTypes,
    index
  }
}

export const updatePlayerScore = (index, score) => {
  return {
    type: PlayerActionTypes.UPDATE_PLAYER_SCORE,
    index,
    score
  }
}
