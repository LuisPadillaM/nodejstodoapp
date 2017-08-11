import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {todos, users, todosIsLoading, todoFields} from "../reducers/index";
// // import stateData from "./initialState"

const logger = store => next => action => {
  let result
  console.groupCollapsed("dispatching", action.type)
  console.log("prev state", store.getState())
  result = next(action)
  console.log(`next state`, store.getState())
  console.groupEnd();
  return result
}

// const saver = store => next => action => {
//   let result = next(action)
//   localStorage["redux-store"] =
//   JSON.stringify(store.getState())
//   return result
// }

const storeFactory =  (initialState = {}) => {
  return createStore(
  combineReducers({todos,users,todosIsLoading, todoFields}),
  initialState,
  applyMiddleware(logger, thunk),
  // (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : stateData
  )
}

export default storeFactory;
