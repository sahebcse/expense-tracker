export default (groups=[], action) =>{
    switch(action.type){
       case 'GET_GROUPS':
           return action.payload;

        default:
            return groups;
    }
}

