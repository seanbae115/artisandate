import {combineReducers} from "redux";
import results from "./resultsPageReducer";
import { reducer as form } from 'redux-form';
import user from './user_reducer';

export default combineReducers({results, form, user});