import React from 'react';
import { Card, CardActions, CardContent, Typography,  CardMedia, Button} from '@material-ui/core'
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Friend = ({balance})=>{
    const classes = useStyles();
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
                <Button size="small" color="secondary" >
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Friend;