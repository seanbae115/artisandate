import types from "../actions/types";

const DEFAULT_STATE = {
    details: {}
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_DETAILS:
            const { details } = action.payload.data;
            return { ...state, details };
        default:
            return state;
    }
}