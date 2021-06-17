export default (groups=[], action) =>{
    switch(action.type){
       case 'GET_GROUPS':
           return action.payload;
        
        case 'DELETE_GROUP':
            return groups.filter((group) => group._id !== action.payload)

        default:
            return groups;
    }
}

