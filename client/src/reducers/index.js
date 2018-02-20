import {combineReducers} from "redux";
import resultsReducer from "./resultsPageReducer";

export default combineReducers({
    datePlan: resultsReducer
});