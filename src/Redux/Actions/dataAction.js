import axios from 'axios';
import { API_URL } from '../../commonData';



export function sendEmail  (data) {
    console.log(data)

    return dispatch => {
        console.log(data)
      return axios.post(`${API_URL}/auth/email`, data)
            .then(response => {
                console.log(response)
                    if(response.status === 200) {
                        dispatch(success(response.data));
                    }
                    dispatch(failure(response));
                    console.log(response);
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
