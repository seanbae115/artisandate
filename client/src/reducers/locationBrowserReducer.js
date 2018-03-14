import types from "../actions/types";

const DEFAULT_STATE = {
        mainEvent: {},
        mainFood: {},
        mainDrinks: {}
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case "Events":
            return {...state, mainEvent: action.payload};
        case "Food":
            return {...state, mainFood: action.payload};
        case "Drinks":
            return {...state, mainDrinks: action.payload};
        default:
            return state;
    }
}