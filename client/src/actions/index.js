import types from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:9000/getEverything";


export function getPlanner(){
    const request = axios.post(`${BASE_URL}`);
    return {
        type: types.GET_EVENT,
        payload: request
    }
}

export function sendZip(zip){
    const request = axios.post(`${BASE_URL}`,zip);
    return{
        type: types.SEND_ZIP,
        payload:request
    }
}


