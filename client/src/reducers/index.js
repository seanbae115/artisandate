import {combineReducers} from "redux";
import resultsReducer from "./resultsPageReducer";
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    datePlan: resultsReducer,
    form: formReducer
});