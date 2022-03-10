import { combineReducers } from 'redux'
import Reducer from './States/Reducer'

const rootReducer = combineReducers({
  storedData: Reducer
})

export default rootReducer
