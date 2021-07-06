

import { combineReducers } from 'redux'
import logReducer from './logReducer'
import userReducer from './userReducer'

export default combineReducers({
  log: logReducer,
  user: userReducer,
})