export default (balances=[], action) =>{
    switch(action.type){
       case 'GET_BALANCES':
           return action.payload;

        default:
            return balances;
    }
}

