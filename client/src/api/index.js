import axios from 'axios';

const URL = 'http://localhost:5000';

const jwtToken=localStorage.getItem('profile');
var parsedToken
if(jwtToken!=null)
{
    parsedToken=JSON.parse(jwtToken).token
}


export const createUser = (data) => axios.post(`${URL}/user`, data,{
    headers:{
        authorization:'Bearer'+ parsedToken
    }
});
export const getBalances = (data) => axios.get(`${URL}/balances/${data}`,{
    headers:{
        authorization:'Bearer'+ parsedToken
    }
});
export const signIn = (data)=> axios.post(`${URL}/user/signIn`, data);
export const addFriend = (data)=>axios.post(`${URL}/addFriend`,data,{
    headers:{
        authorization:'Bearer'+ parsedToken
    }
});
export const createGroup = (data)=>axios.post(`${URL}/createGroup`,data,{
    headers:{
        authorization:'Bearer'+ parsedToken
    }
});