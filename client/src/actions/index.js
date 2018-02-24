import types from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:8000/getEverything";

export function getPlanner(zip){
    const request = axios.post(`${BASE_URL}`, zip);
    return {
        type: types.SEND_ZIP,
        payload: request
    }
}

export function getDetails(id){
    const request = axios.post(`${BASE_URL}`, id);

    return{
        type: types.GET_EVENT,
        payload: request
    }
}
/**********************NON AXIOS****************************/
export function locationDetails(id) {
    return{
        type: types.LOCATION_ID,
        payload: id
    }
}