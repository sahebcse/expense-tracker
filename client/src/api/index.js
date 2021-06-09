import axios from 'axios';

const URL = 'http://localhost:5000';

 
export const createUser = (data) => axios.post(`${URL}/user`, data);
export const getBalances = (data) => axios.get(`${URL}/balances/${data}`);
export const signIn = (data)=> axios.post(`${URL}/user/signIn`, data);
export const addFriend = (data)=>axios.post(`${URL}/addFriend`,data);
export const createGroup = (data)=>axios.post(`${URL}/createGroup`,data);