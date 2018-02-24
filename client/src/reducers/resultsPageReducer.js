import types from "../actions/types";

const DEFAULT_STATE = {
    events: [],
    food: [],
    drinks: []
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.GET_EVENT:
            const { food, events, drinks } = action.payload.data;
            return {...state, food, events, drinks};
        default:
            return state;
    }
}