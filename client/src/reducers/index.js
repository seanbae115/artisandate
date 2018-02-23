import {combineReducers} from "redux";
import resultsReducer from "./resultsPageReducer";
import detailReducer from './reducer_eventPage';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    datePlan: resultsReducer,
    form: formReducer,
    detail: detailReducer
});