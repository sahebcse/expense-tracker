import React, { useState} from 'react';
import { Card, CardActions, CardContent, Typography,  CardMedia, Button} from '@material-ui/core'
import useStyles from './styles'
import Input from '../../forms/auth/input'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import AddIcon from '@material-ui/icons/Add'
import { useDispatch } from 'react-redux';
import { addFriendExpence } from '../../../actions/user/user'

const Friend = ({balance, user})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    const [expence, setExpence] = useState(0);

    const handleExpenceChange = (id) => {
        const sendData = {paidby:user.result._id, recipent:balance.uid._id, amount:expence};
        dispatch(addFriendExpence(sendData));
    }


    console.log(balance)
    return(
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={balance.uid.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
            <div className={classes.overlay}>
                <Typography variant="h6">{balance.uid.email}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button  style={{ color: 'white' }} size="small">
                <MoreHorizIcon fontSize="default" />
                </Button>
            </div>

            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{`${balance.uid.firstName} ${balance.uid.lastName}`}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Balance : {balance.balance}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Input name="addExpence" label="Add Expence" handleChange={(e)=>{setExpence(e.target.value)}} />
                <Button size="small" color="primary" onClick={()=>handleExpenceChange(balance._id)} >
                    <AddIcon fontSize="small" /> Add
                </Button>
                <Button size="small" color="secondary" >
                <DeleteIcon fontSize="small" /> Clear
                </Button>
            </CardActions>
        </Card>
    )
}

export default Friend;