import { combineReducers } from 'redux'
import allProductsfromState from './productReducer'


const rootReducer = combineReducers({
    allProductsfromState,
})

export default rootReducer