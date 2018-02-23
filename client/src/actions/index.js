import types from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:8000";


export function getPlanner(zip){
    const request = axios.post(`${BASE_URL}/getEverything`, zip);
    return {
        type: types.GET_EVENT,
        payload: request
    }
}

export function getIndividual(id){
    const request = axios.post(`${BASE_URL}/getOneBusiness`, id);
    return {
        type: types.GET_DETAILS,
        payload: request
    }
}