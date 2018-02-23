import axios from "axios"; 
import { browserHistory } from 'react-router';
import types from './types';

const BASE_URL = "http://localhost:8000";
<<<<<<< HEAD

=======
>>>>>>> fc2ee0377f88ce36236ea49c8a16efcfad6a59c6

export function getPlanner(zip){
    const request = axios.post(`${BASE_URL}/getEverything`, zip);
    return {
        type: types.GET_EVENT,
        payload: request
    }
}

<<<<<<< HEAD
export function getIndividual(id){
    const request = axios.post(`${BASE_URL}/getOneBusiness`, id);
    return {
        type: types.GET_DETAILS,
        payload: request
=======
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
>>>>>>> fc2ee0377f88ce36236ea49c8a16efcfad6a59c6
    }
}