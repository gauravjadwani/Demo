// import { LoginReducer } from './../reducers/LoginReducer';
// // import { chatReducer } from './chat/reducers'

// const rootReducer = combineReducers({
//   system: systemReducer,
//   chat: chatReducer
// })

// export type AppState = ReturnType<typeof rootReducer>


import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';

export default function configureStore(initialState:any) {
  return createStore(rootReducer, applyMiddleware(thunk));
}