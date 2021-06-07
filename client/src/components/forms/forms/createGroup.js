import React,{ useState} from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { createGroup } from '../../../actions/user/user'
import Input from '../auth/input'
import { useDispatch} from 'react-redux';


const CreateGroup = ({user}) => {

  const initialState = { name:'', groupType:'', totalExpences:0, groupImage:'', createdBy:user.result._id};
  const [form, setForm] = useState(initialState);
  const history = useHistory();
  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createGroup(form));
  };

  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file);
    setForm({...form,groupImage:base64})
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result);
      }
      fileReader.onerror = (error) => {
        reject(error);
      }
    })
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <Paper  elevation={3} >
    <Typography component="h1" variant="h5">Create Group</Typography>
    <form  onSubmit={handleSubmit}>
        <Grid container spacing={2}>
        <>
            <Input name="name" label="name" handleChange={handleChange} autoFocus />
            <Input name="groupType" label="groupType" handleChange={handleChange} />
        </>
        <div >
            <input
                id="groupImage"
                type="file"
                inputProps={{ accept: 'image/*, .xlsx, .xls, .csv, .pdf, .pptx, .pptm, .ppt' }}
                required
                label="Document"
                name="groupImage"
                onChange={(event) => handleFileRead(event)}
                size="small"
                variant="standard"
            />
            Group Image
        </div>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
            Create
        </Button>

    </form>
    </Paper>
  );
};

export default CreateGroup;