
//action types
export const UPDATE_USER = 'UPDATE_USER'
export const UPDATE_DEVICE = 'UPDATE_DEVICE'
export const LOG_IN_SENT = 'LOG_IN_SENT'
export const LOG_IN_FULFILLED = 'LOG_IN_FULFILLED'
export const LOG_IN_REJECTED = 'LOG_IN_REJECTED'


//action creators
export const updateUser = update => ({
  type: UPDATE_USER,
  payload: update,
})

export const addDevice = newDevice => ({
  type: UPDATE_DEVICE,
  payload: newDevice
})


// async action creator
export const logInUser = (username, password) => dispatch => {		// вводятся логин и пароль
	dispatch({type: LOG_IN_SENT})
	login(username, password)
		.then(() => {			// запраш. действу.лог и пар с друг серв. или хранил
			dispatch({type: LOG_IN_FULFILLED})
		})
		.catch(err => {
			dispatch({type: LOG_IN_REJECTED})
		})
}
