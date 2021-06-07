const reducer = (state={authData:null}, action) =>{
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({...action.payload}));
            return {...state, authData:action.payload};

        case 'ADD_FRIEND':
            return {...state, authdata:action.payload};

        case 'LOGOUT':
            localStorage.clear();
            return {...state, authdata:null};

        default:
            return state;
    }
}

export default reducer;