import axios from "axios"; 
import { browserHistory } from 'react-router';
import types from './types';

const BASE_URL = "http://localhost:8000";

export function getPlanner(zip){
    console.log("The ZIP:", zip);
    return async dispatch => {
        try {
            const request = await axios.post(`${BASE_URL}/getEverything`, zip);
            dispatch({
                type: types.SEND_ZIP,
                payload: request
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function signUp(cred) {
    return async dispatch => {
        try {
            const request = await axios.post(`${BASE_URL}/auth/signup`, cred);
            localStorage.setItem('token', request.data.token);
            dispatch({
                type: types.SIGN_UP
            });
        } catch (err) {
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Error signing up'
            });
        }
    }
}

export function signIn(cred) {
    return dispatch => {
        axios.post(`${BASE_URL}/auth/signin`, cred).then(res => {
            console.log('Signin Resp:', res);

            localStorage.setItem('token', res.data.token);

            dispatch({
                type: types.SIGN_IN
            });
        }).catch(err => {
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Invalid Username and/or Password'
            });
        });
    }
}
/**********************NON AXIOS****************************/
export function locationDetails(id) {
    console.log("IN ACTIONS: ", id)
    return{
        type: types.LOCATION_ID,
        payload: id
    }
}