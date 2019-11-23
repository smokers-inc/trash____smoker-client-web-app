import {combineReducers, createStore} from "redux";
import {userReducer, UserState} from './user-redux';

export interface Store {
  user: UserState,
}

export default createStore(combineReducers({
  user: userReducer,
}));