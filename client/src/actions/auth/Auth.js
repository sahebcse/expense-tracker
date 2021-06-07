
import * as api from '../../api/index'
const jwtToken=localStorage.getItem('profile')

export const createUser =(userData,router,setCurrentUser)=> async (dispatch) =>{
    const {data}= await api.createUser(userData);
    dispatch({type:'AUTH', payload: data});
    router.push(`/user`);
}

export const signIn =(userData,router,setCurrentUser)=> async (dispatch) =>{
    console.log('here.')
    const {data}=await api.signIn(userData);
    console.log('i am waiting....',data)
    dispatch({type:'AUTH', payload: data});
    router.push(`/user`);
}