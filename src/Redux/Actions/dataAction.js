import axios from 'axios';
import { API_URL } from '../../commonData';



export function sendEmail  (data) {

    return dispatch => {
      return axios.post(`${API_URL}/auth/email`, data)
            .then(response => {
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    dispatch(failure(response));
                    return response
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


export function createContent  (data) {

    return dispatch => {
      return axios.post(`${API_URL}/auth/email`, data)
            .then(response => {
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    dispatch(failure(response));
                    return response
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

export function updateContent  (data) {

    return dispatch => {
      return axios.post(`${API_URL}/auth/email`, data)
            .then(response => {
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    dispatch(failure(response));
                    return response
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

export function getContentById (data) {

    return dispatch => {
      return axios.post(`${API_URL}/auth/email`, data)
            .then(response => {
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    dispatch(failure(response));
                    return response
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

export function getContent (id) {

    return dispatch => {
      return axios.get(`${API_URL}/profile/${id}`)
            .then(({data, status}) => {
                console.log(data)
                    if(status === 200 && data.username) {
                        console.log(data)
                        dispatch({type: 'SET_CONTENT', payload: data});
                    }
                    return data
                }
            ).catch(error => {
                console.log(error)
        });
    };
}

export function deleteContentById (data) {

    return dispatch => {
      return axios.post(`${API_URL}/auth/email`, data)
            .then(response => {
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    dispatch(failure(response));
                    return response
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
