import types from "../actions/types";

const DEFAULT_STATE = {
    events: [],
    food: [],
    drinks: []
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.SEND_ZIP:
            console.log("GOT INFO IN RESULTS REDUCER:", action.payload);
            const {food, events, drinks} = action.payload.data;
            return {...state, food, events, drinks};
        default:
            return state;
    }
}