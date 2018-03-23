import types from "../actions/types";

const DEFAULT_STATE = {
    receivedData: false,
    status: "idle",
    events: [],
    food: [],
    drinks: []
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.SEND_ZIP:
            const {receivedData} = state;
            const status = receivedData ? "sent" : "idle";
            const {food, events, drinks} = action.payload.data;
            return {...state, food, events, drinks, receivedData: true, status: status};
        case types.ZIP_SENDING:
            console.log("Results Sending triggered");
            return {...state, status: "sending"};
        default:
            return state;
    }
}