import types from "../actions/types";

const DEFAULT_STATE = {
    data: {}
};

export default function (state = DEFAULT_STATE, action) {
    switch (action.type) {
        case types.GET_DETAILS:
            console.log("Details reducer: ", action.payload);
            const { data } = action.payload;
            return { ...state, data };
        default:
            return state;
    }
}