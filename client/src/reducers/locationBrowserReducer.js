import types from "../actions/types";

const DEFAULT_STATE = {
    locationIndex: "",
    locationId: ""
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.LOCATION_ID:
            console.log("GOT INFO", action.payload);
            return{...state};
        default:
            return state;
    }
}