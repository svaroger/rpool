import {combineReducers} from 'redux'

import {UPDATE_USER, UPDATE_DEVICE } from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

// in this reduser state is only state that is defined for this reduser
const deviceReducer = (state = [], action) => {
  if (action.type === UPDATE_DEVICE) return [...state, action.payload]
  return state
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
	   case UPDATE_USER:
		   return merge(state, action.payload)
	   case UPDATE_DEVICE:
		   return merge(state, {prevContact: action.payload})
	   default:
		   return state
  }
}



const reducer = combineReducers({
  user: userReducer,
  devices: deviceReducer,
})

export default reducer
