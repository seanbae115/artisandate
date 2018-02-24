import {combineReducers} from "redux";
import resultsReducer from "./resultsPageReducer";
import browserReducer from './locationBrowserReducer'
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    datePlan: resultsReducer,
    locationDetail: browserReducer,
    form: formReducer
});