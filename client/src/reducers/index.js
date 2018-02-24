import {combineReducers} from "redux";
import resultsReducer from "./resultsPageReducer";
import browserReducer from './locationBrowserReducer'
import { reducer as formReducer } from 'redux-form';
import user from './user_reducer';

export default combineReducers({
    datePlan: resultsReducer,
    locationDetail: browserReducer,
    form: formReducer,
    user: user
});

