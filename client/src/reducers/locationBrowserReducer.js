import types from "../actions/types";

const DEFAULT_STATE = {
        mainEvent: {},
        mainFood: {},
        mainDrinks: {}
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case "events":
            return {...state, mainEvent: action.payload};
        case "food":
            return {...state, mainFood: action.payload};
        case "drinks":
            return {...state, mainDrinks: action.payload};
        default:
            return state;
    }
}