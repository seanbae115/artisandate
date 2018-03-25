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
        case types.CLEAR_DETAILS:
            console.log("Details Reducer: CLEAR_DETAILS: ", {...state, DEFAULT_STATE});
            return {...state, data: DEFAULT_STATE.data};
        default:
            return state;
    }
}