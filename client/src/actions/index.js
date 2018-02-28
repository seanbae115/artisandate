import axios from "axios"; 
import { browserHistory } from 'react-router';
import types from './types';

const BASE_URL = "http://localhost:8000";

export function getPlanner(zip){
    // console.log("The ZIP:", zip);
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

export function getIndividual(id){
    return async dispatch => {
        try {
            const request = await axios.post(`${BASE_URL}/getOneBusiness`, id);
            dispatch({
                type: types.GET_DETAILS,
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
                type: types.SIGN_UP,
                email: cred.email
            });
            // console.log('Successful sign in')
        } catch (err) {
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Error signing up'
            });
        }
    }
}

export function signIn(cred) {
    return async dispatch => {
        try {
            const request = await axios.post(`${BASE_URL}/auth/signin`, cred);
            localStorage.setItem('token', request.data.token);
            dispatch({
                type: types.SIGN_IN,
                email: cred.email
            });
        } catch(err) {
            dispatch({
                type: types.AUTH_ERROR,
                error: 'Invalid Username and/or Password'
            });
        }
    }
}

export function sendMail(data) {
    return dispatch => {
        console.log('Button Clicked');
        console.log('Email: ', data.email);
        axios.post(`${BASE_URL}/send`, data).then (res =>{
            console.log('INCOMING', res);
            dispatch({
                type: types.SEND_MAIL,
                payload: res
            })
        }).catch (err => {
            console.log('ERRORRRR: ', err);
        })
    }
}

/**********************NON AXIOS****************************/
export function locationDetails(props, name) {
    return{
        type: name,
        payload: props
    }
}

export function loadSpinner(){
    return{
        type: "sending"
    }
}