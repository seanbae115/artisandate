import types from "../actions/types";

const DEFAULT_STATE = {
    locationId: "",
    locationSaved: true
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.LOCATION_ID:
            console.log("GOT INFO IN THE REDUCER", action.payload);
            return {...state, locationId: action.payload};
        default:
            return state;
    }
}