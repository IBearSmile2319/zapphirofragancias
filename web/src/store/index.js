import {applyMiddleware, createStore} from 'redux'
import rootReducers from '../reducer'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const store= createStore(
    rootReducers,composeWithDevTools(
    applyMiddleware(thunk)))

export default store