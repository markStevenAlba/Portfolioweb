const initialState = {
    isAuth: false,
    contents: [],
    profile: {},
    user: {}
},



getAuthReducer = (state = initialState, action) => {
switch (action.type)
{
    case 'SET_AUTHENTICATED':
        return {
            ...state,
            isAuth: true
        };
    
    case 'LOGOUT':
        return {
            ...state,
            isAuth: false,
            contents: [],
            profile: {},
            user: {}
        };


    case 'SET_CONTENTS':
        return {
            ...state,
            contents: action.payload
        };


    case 'SET_USER':
        return {
             ...state,
             user: action.payload.user,
             profile: action.payload.profile 
            };
    default:
        return state;
}
}
export default getAuthReducer;

