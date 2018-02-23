import types from "./types";
import axios from "axios";

<<<<<<< HEAD
const BASE_URL = "http://localhost:9000/getEverything";
=======
const BASE_URL = "http://localhost:8000/getEverything";
>>>>>>> 2cec8537caf8ac949f07427f901731d98452ccbf

export function getPlanner(zip){
    const request = axios.post(`${BASE_URL}`, zip);
    return {
        type: types.GET_EVENT,
        payload: request
    }
}