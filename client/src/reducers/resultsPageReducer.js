import types from "../actions/types";

const DEFAULT_STATE = {
    receivedData: false,
    events: [],
    food: [],
    drinks: []
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.SEND_ZIP:
            console.log("In Reducer", action.payload);
            const {food, events, drinks} = action.payload.data;
            return {...state, food, events, drinks, receivedData: true};
        default:
            return state;
    }
}