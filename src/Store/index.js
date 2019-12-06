import { createStore,applyMiddleware } from 'redux'
import allReducer from './Reducer'
import thunk from 'redux-thunk'

const store = createStore(allReducer,applyMiddleware(thunk))
export default store