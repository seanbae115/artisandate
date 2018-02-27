import types from "../actions/types";

const DEFAULT_STATE = {
    details: {}
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_DETAILS:
            const { data } = action.payload;
            return { ...state, data };
        default:
            return state;
    }
}