import {combineReducers} from 'redux'
import auth from './authReducer'
import token from './tokenReducer'
import marks from './marksReducer'
import all from './compareReducer'

export default combineReducers({
    auth,
    token,
    marks,
    all
})