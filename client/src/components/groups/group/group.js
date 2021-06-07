import React,{ useState} from 'react';
import { Card, CardActions, CardContent, Typography,  CardMedia, Button} from '@material-ui/core'
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import SingleGroupInfo from './singleGroupInfo'

const Friend = ({group})=>{
    const [showSingle, setShowSingle] = useState(false);
    const classes = useStyles();
    const groupInfo = { groupName:group.name, groupImage:group.groupImage, groupMember:group.members, groupExpences:group.totalExpences}
    const handleChange = () =>{
        setShowSingle(true);
    }

    if(showSingle){
        return (
            <SingleGroupInfo setShowSingle={setShowSingle} groupInfo={groupInfo}/>
        )
    }

    return(
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={group.groupImage || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
            <div className={classes.overlay}>
                <Typography variant="h6">{group.groupType}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button  style={{ color: 'white' }} size="small" onClick={handleChange}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>

            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{group.name}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Total Expence : {group.totalExpences}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" >
                <DeleteIcon fontSize="small" /> More Info
                </Button>
                <Button size="small" color="secondary" >
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Friend;