import types from "../actions/types";

const DEFAULT_STATE = {
    dinner: {}
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.GET_EVENT:
            console.log("GET DINNER PAYLOAD", action.payload);
            return {...state, dinner: action.payload.data};
        default:
            return state;
    }
}