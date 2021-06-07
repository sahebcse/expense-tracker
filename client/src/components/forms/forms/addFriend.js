import React,{ useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import Input from '../auth/input'
import { useDispatch } from 'react-redux';
import { addFriend } from '../../../actions/user/user'

const AddFriend = ({user}) =>{
    const [friend,setFriend] = useState('');
    const dispatch = useDispatch();

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log('handle submit for addFriend.....')
        dispatch(addFriend(user.result._id,friend));
    }

    const handleChange =(e)=>{
        setFriend(e.target.value);
    }

    return (
          <Paper  elevation={3}>
            <form  onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Input name="addFriend" label="Add Friend" handleChange={handleChange} type="email" />
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Add Friend
              </Button>
            </form>
          </Paper>
      );
    
}

export default AddFriend