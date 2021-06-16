import React,{ useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import Input from '../auth/input'
import { useDispatch } from 'react-redux';
import { addMember } from '../../../actions/user/user'
import useStyles from './styles'

const AddGroup = ({user,isDispatched, setIsDispatched}) =>{
    const [id,setId] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('handle submit for addGroup.....')
        const data = {groupId:id, userId:user.result.email, currentUser:user.result._id};
        dispatch(addMember(data,isDispatched, setIsDispatched));
    }

    const handleChange =(e)=>{
        e.preventDefault();
        setId(e.target.value);
    }

    return (
          <Paper  elevation={3} className={classes.paper}>
            <Typography component="h1" variant="h5">Join Group</Typography>
            <form  onSubmit={handleSubmit} className={`${classes.root} ${classes.form}`}>
              <Grid container spacing={2}>
                <Input name="groupId" label="group id" handleChange={handleChange} />
              </Grid>
              <Button className={classes.buttonSubmit} type="submit" fullWidth variant="contained" color="primary">
                Join
              </Button>
            </form>
          </Paper>
      );
    
}

export default AddGroup