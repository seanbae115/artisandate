import {combineReducers} from "redux";
<<<<<<< HEAD
import resultsReducer from "./resultsPageReducer";
import detailReducer from './reducer_eventPage';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    datePlan: resultsReducer,
    form: formReducer,
    detail: detailReducer
=======
import results from "./resultsPageReducer";
import { reducer as form } from 'redux-form';
import user from './user_reducer';

export default combineReducers({results, form, user
>>>>>>> fc2ee0377f88ce36236ea49c8a16efcfad6a59c6
});