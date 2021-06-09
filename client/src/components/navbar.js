import React,{ useState} from 'react';
import { useHistory} from 'react-router-dom';
import { Typography, AppBar,Button, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';

const Navbar = ()=>{
    const history = useHistory();
    const dispatch = useDispatch();

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        history.push('/');
    }

    return(
        <AppBar display="flex" flexDirection="row" justifyContent="space-between" position="static">
            <div display="flex">
                <Typography variant="h2">ExT</Typography>
            </div>
            {localStorage.getItem('profile') &&<Toolbar display="flex" justifyContent="flex-end">
                 <Button  variant="contained" color="secondary" onClick={logout}>Logout</Button>
            </Toolbar>}
        </AppBar>
    )
}

export default Navbar;