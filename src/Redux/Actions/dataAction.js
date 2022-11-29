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
