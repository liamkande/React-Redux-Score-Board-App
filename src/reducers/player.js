import * as PlayerActionTypes from '../actiontypes/player'

const initialState = {
  players: [{
    name: 'Liam Kande',
    score: 17,
    created: '10/16/2017',
		updated: '10/25/2017'
  },
  {
    name: 'Dimitri Luzgin',
    score: 15,
    created: '10/16/2017',
    updated: '10/23/2017'
  },
  {
    name: 'Levick Mboukou',
    score: 12,
    created: '10/16/2017',
    updated: '10/20/2017'
  }
],
selectedPlayerIndex: -1
}
export default function Player(state=initialState, action) {

	let date = new Date()
	let day = date.getDate()
	let month = date.getMonth()+1
	let year = date.getFullYear()

  switch(action.type){
    case PlayerActionTypes.ADD_PLAYER: {
			const addPlayerList = [...state.players, {
          name: action.name,
          score: 0,
          created: `${month}/${day}/${year}`
      }];
      return {
        ...state,
				players: addPlayerList
		 	};
	 	}

    case PlayerActionTypes.REMOVE_PLAYER: {
			const removePlayerList = [
				...state.players.slice(0, action.index),
				...state.players.slice(action.index + 1)
			];
      return {
				...state,
				players: removePlayerList
			}
		}

    case PlayerActionTypes.UPDATE_PLAYER_SCORE: {
			const updatePlayerList = state.players.map((player, index) => {
        if(index === action.index){
          return {
            ...player,
             score: player.score + action.score,
             updated: `${month}/${day}/${year}`
           };
        }
        return player
      });
			return {
				...state,
				players: updatePlayerList
			};
		}

	  case PlayerActionTypes.SELECT_PLAYER:
		  return {
				...state,
				selectedPlayerIndex: action.index
			};

    default:
      return state
  }
}
