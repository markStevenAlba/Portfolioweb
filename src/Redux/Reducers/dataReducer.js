const initialState = {
        loading : true,
        error: false,
        data: [],
        content: {},
        contentLoaded: true
    },
   getUserReducer = (state = initialState, action) => {
    switch (action.type)
    {   

        case 'SET_CONTENT':
            return {
                ...state,
                contentLoaded: true,
                content: action.payload
         };

         case 'CLEAR_CONTENT':
            return {
                ...state,
                contentLoaded: false,
                content: {}
         };


        case 'REQUEST_DATA':
            return {
                ...state,
                loading: true
         };
        case 'RECEIVE_DATA':
            return Object.assign({}, state, {
                    loading: false,
                    error: false,
                    data: action.payload
                });
        case 'ERROR_DATA':
            return {
                 ...state,
                 loading: false,
                 error: true
            };
        default:
            return state;
    }
}
export default getUserReducer;

