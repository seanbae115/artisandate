import {combineReducers} from "redux";
import resultsReducer from "./resultsPageReducer";
<<<<<<< HEAD
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    datePlan: resultsReducer,
    form: formReducer
=======

export default combineReducers({
    datePlan: resultsReducer
>>>>>>> c3b7c8f580104b654011c058ac328dc4026601e1
});