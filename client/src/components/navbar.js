import React,{ useState} from 'react';
import { useHistory} from 'react-router-dom';
import { Typography, AppBar,Button, Toolbar, Avatar } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles'

const Navbar = ()=>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        history.push('/');
        setUser(null)
    }

    return(
        <AppBar className={classes.appBar} display="flex" flexDirection="row" justifyContent="space-between" position="static">
            <div display="flex" className={classes.brandContainer}>
                <Typography variant="h2">SplitWise Clone</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.selectedFile}>{user?.result.name}</Avatar>
                        <Typography className={classes.userName} variant="h4">{`${user?.result.firstName} ${user?.result.lastName}`}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
                    </div>
                    ) : (
                    <Button variant="contained" color="primary">Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;