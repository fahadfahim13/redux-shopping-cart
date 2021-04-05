import { combineReducers } from 'redux'
import cartReducer from './cartReducer'
import allProductsfromState from './productReducer'

const rootReducer = combineReducers({
    allProductsfromState,
    cartReducer,
})

export default rootReducer