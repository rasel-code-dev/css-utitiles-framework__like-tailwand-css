import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import postReducer from "./reducers/postReducer"
import appReducer from "./reducers/appReducer"


const reducers = combineReducers({
  postState: postReducer,
  appState: appReducer
})

export default createStore(reducers, {}, applyMiddleware(thunk))
