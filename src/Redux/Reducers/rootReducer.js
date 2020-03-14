import { combineReducers } from 'redux'
import userReducer from './userReducer'
import boardReducer from './boardReducer'
import resultReducer from './resultReducer'

const state = {
    user: userReducer,
    boards: boardReducer,
    results: resultReducer
}

export default combineReducers(state)
