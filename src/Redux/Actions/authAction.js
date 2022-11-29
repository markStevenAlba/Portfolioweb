import axios from 'axios';
import { API_URL } from '../../commonData';
import { LOGOUT, SET_AUTHENTICATED, SET_USER } from '../types';
import { authHeader } from './auth-header';



export function login(data) {
    return dispatch => {
      return axios.post(`${API_URL}/users/login`, data)
    };
}


export function logout  (data) {

    return dispatch => {
        dispatch({type: LOGOUT})
    };
   
}


export function getUserData  () {

    return dispatch => {
      return axios.get(`${API_URL}/users/me`, { headers: authHeader() })
            .then(res => {
                const { profile } = res.data;
                    if(res.status === 200) {
                        dispatch({type: SET_AUTHENTICATED});
                        dispatch({type: SET_USER, payload: { profile, user: res.data }})
                    }
                    dispatch(failure(res));
                    return res
                }
            ).catch(error => {
                console.log(error)
            dispatch(failure(error));
        });
    };
    function request() { return { type: 'REQUEST_DATA' }}
    function success(data) { return { type: 'RECEIVE_DATA', payload : data }}
    function failure(error) { return { type: 'ERROR_DATA', error }}
}
