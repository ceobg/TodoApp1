import todosReducer from './todosReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
  todos: todosReducer
})
export default allReducers

