import { combineReducers } from 'redux'
import GlobalReducer from './Global'

const Reducers = combineReducers({
	global: GlobalReducer
})

export default Reducers