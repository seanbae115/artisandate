import {combineReducers} from "redux";
<<<<<<< HEAD
import details from './reducer_eventPage';
import results from "./resultsPageReducer";
import { reducer as form } from 'redux-form';
import user from './user_reducer';

export default combineReducers({details, results, form, user
});
=======
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

>>>>>>> d579278a7a7e9a0a554fa184cca10eaad35d2982
