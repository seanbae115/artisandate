import {combineReducers} from "redux";
import details from './reducer_eventPage';
import results from "./resultsPageReducer";
import { reducer as form } from 'redux-form';
import user from './user_reducer';

export default combineReducers({details, results, form, user
});