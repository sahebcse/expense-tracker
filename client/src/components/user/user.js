import React,{useEffect, useState} from 'react';
import { Container, Grid, Typography, Grow, Button } from '@material-ui/core';

import Friends from '../friends/friends';
import Groups from '../groups/groups';
import AddFriend from '../forms/forms/addFriend'
import { getBalances } from '../../actions/user/user'
import { useDispatch } from 'react-redux';
import CreateGroup from '../forms/forms/createGroup'
import AddGroupSelf from '../forms/forms/addGroupSelf'


const User = ({currentUser,setCurrentUser})=>{
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(()=>{
        console.log(`use effect ${user.result._id}`)
        dispatch(getBalances(user.result._id));
    },[dispatch])

    return(
        <Grow in>
            <Container>
                <Grid container justify="space-between" spacing="0">
                    <Grid item xs={12} sm={8}>
                        <Friends user={user} />
                        <Groups user={user}/>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Container align="center">
                            <AddFriend user={user}/>
                            <AddGroupSelf user={user}/>
                            <CreateGroup user={user}/>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default User;