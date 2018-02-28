import types from "../actions/types";

const DEFAULT_STATE = {
    emailSent: false,
    status: "idle"
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.SEND_MAIL:
            console.log("REDUCER", action.payload);
            const {sent} = action.payload.data;
            const status = sent ? "sent" : "idle";
            return {...state, emailSent: sent, status: status};
        case "sending":
            return {...state, status: "sending"};
        default:
            return state;
    }
}