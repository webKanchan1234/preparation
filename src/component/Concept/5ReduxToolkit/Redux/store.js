import React from 'react'
import { createStore, combineReducers,applyMiddleware } from "redux"
import postReducer from './reducer'
import {thunk} from "redux-thunk";

const reducers = combineReducers({
    postReducer: postReducer
})

const middleware=[thunk]
let initialState={}

const store = createStore(
    reducers,
    initialState, 
    applyMiddleware(...middleware)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware(...middleware))
)

export default store