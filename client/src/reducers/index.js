import {combineReducers} from "redux";
import resultsReducer from "./dateReducer";

export default combineReducers({
    dateEvent: resultsReducer
});