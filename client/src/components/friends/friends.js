import React from 'react';
import {  Typography,  Grid, CircularProgress} from '@material-ui/core';
import Friend from './friend/friend';
import { useSelector } from 'react-redux';
import useStyles from './styles'

const Friends=({user})=>{
    const balances = useSelector((state)=>state.balances)
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h2" align="center" spacing={3}>Friends</Typography>

            {!balances ? <CircularProgress/> : (
                <Grid className={classes.container} alignItems="stretch" container spacing={3}>
                {balances.map((balance)=>{
                    return (<Grid key={balance.uid._id} item xs={12} sm={6} md={6}>
                        <Friend balance={balance} user={user}/>
                        </Grid> )
                    })}
                </Grid>
            )}
        </div>
    )
}

export default Friends;