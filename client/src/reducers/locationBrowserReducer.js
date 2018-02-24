import types from "../actions/types";

const DEFAULT_STATE = {
        mainEvent: {},
        mainFood: {},
        mainDrinks: {}
};

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case "events":
            console.log("LBR EVENT", {...state, mainEvent: action.payload});
            return {...state, mainEvent: action.payload};
        case "food":
            console.log("LBR Food",{...state, mainFood: action.payload});
            return {...state, mainFood: action.payload};
        case "drinks":
            console.log("LBR DRINKS",{...state, mainDrinks: action.payload});
            return {...state, mainDrinks: action.payload};
        default:
            return state;
    }
}