import { combineReducers } from "redux";
import authReducer from "./authReducer";

export const rootReduser = combineReducers({
  auth: authReducer,

});
