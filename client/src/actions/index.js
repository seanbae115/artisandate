import types from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:9000/getEverything";


export function getEvent(){
    const request = axios.post(`${BASE_URL}`);
    return {
        type: types.GET_EVENT,
        payload: request
    }
}


