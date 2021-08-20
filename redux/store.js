
import {createStore} from 'redux'

import {addDevice} from './actions'
import reducer from './reducer'

const store = createStore(reducer)

store.dispatch(addDevice({name: 'Genady Bird', phone: '89215555234'}))


console.log(store.getState())

export default store
