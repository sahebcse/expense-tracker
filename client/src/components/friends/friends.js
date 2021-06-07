import React from 'react';
import {  Typography,  Grid} from '@material-ui/core';
import Friend from './friend/friend';
import { useSelector } from 'react-redux';

const Friends=()=>{
    const balances = useSelector((state)=>state.balances)
    return (
        <div>
            <Typography variant="h2" align="center">Friends</Typography>
            {balances.map((balance)=>{
                return (<Grid key={balance.uid._id} item xs={12} sm={6} md={6}>
                    <Friend balance={balance}/>
                </Grid> )
            })}
        </div>
    )
}

export default Friends;