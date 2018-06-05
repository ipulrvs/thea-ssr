import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import GlobalReducer from './Global'

const Reducers = combineReducers({
	global: GlobalReducer,
	form: formReducer
})

export default Reducers