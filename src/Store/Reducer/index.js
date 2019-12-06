import MainReducer from './MainReducer'
import AuthReducer from './AuthReducer'

import {combineReducers} from 'redux'


const allReducers = combineReducers({
    MainReducer,
    AuthReducer
})


export default allReducers