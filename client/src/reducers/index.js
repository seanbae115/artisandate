import {combineReducers} from "redux";
import resultsReducer from "./resultsPageReducer";
import browserReducer from './locationBrowserReducer';
import detailReducer from './reducer_eventPage';
import { reducer as formReducer } from 'redux-form';
import user from './user_reducer';
import summaryButtonsReducer from "./summaryButtonsReducer";

export default combineReducers({
    dateResults: resultsReducer,
    datePlan: browserReducer,
    form: formReducer,
    user: user,
    detail: detailReducer,
    mail: summaryButtonsReducer,
});

