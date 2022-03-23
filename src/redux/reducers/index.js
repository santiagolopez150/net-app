import {combineReducers} from "redux";
import calcReducer from "./calc";
import movieReducer from "./movie";
 export default combineReducers({calc: calcReducer, movie:movieReducer });
