import types from "./types";
import axios from "axios";

const BASE_URL = "http://localhost:8000/getEverything";

export function getPlanner(zip){
    const request = axios.post(`${BASE_URL}`, zip);
    return {
        type: types.GET_EVENT,
        payload: request
    }
}