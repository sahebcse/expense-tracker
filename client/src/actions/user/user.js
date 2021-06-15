import axios from 'axios';
import * as api from '../../api/index';

export const getBalances =(id)=>async (dispatch)=>{
    try {
        console.log(`inside get balances.....${id}`)
        const {data}=await api.getBalances(id);
        console.log(`back again with? data.....${data.balances}`)
        dispatch({type:'GET_BALANCES', payload:data.balances});
        dispatch({type:'GET_GROUPS', payload:data.groups});
    } catch (error) {
        console.log(error);
    }
}

export const addFriend =(currentUser,friend)=>async (dispatch)=>{
    try {
        console.log('dispatching add friend....');
        const sendData = {id:currentUser, email:friend}
        const {data}=await api.addFriend(sendData);
        console.log(`received data.....${data.firstName}`);
        dispatch({type:'GET_BALANCES', payload:data.balances});
    } catch (error) {
        console.log(error);
    }
}

export const createGroup =(form)=>async (dispatch)=>{
    try {
        const {data}=await api.createGroup(form);
        dispatch({type:'GET_GROUPS', payload:data.groups});
    } catch (error) {
        console.log(error);
    }
}

export const addFriendExpence = (sendData) => async (dispatch) => {
    try {
        const { data } =  await api.addFriendExpence(sendData);
        dispatch({type:'GET_GROUPS',payload:data.groups});
    } catch (error) {
        console.log(error);
    }
}

export const addMember = (sendData) => async (dispatch) => {
    try {
        const { data } = await api.addMember(sendData);
        dispatch({type:'GET_GROUPS', payload: data.groups});
    } catch (error) {
        console.log(error);
    }
}