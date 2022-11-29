import { combineReducers } from 'redux';
import authReducer from './Reducers/authReducer';
import dataReducer from './Reducers/dataReducer';

export default combineReducers({
    data : dataReducer,
    auth: authReducer
});

