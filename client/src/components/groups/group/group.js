import React,{ useState} from 'react';
import { Card, CardActions, CardContent, Typography,  CardMedia, Button} from '@material-ui/core'
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import SingleGroupInfo from './singleGroupInfo'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useDispatch } from 'react-redux';
import { deleteGroup } from '../../../actions/user/user'

const Friend = ({group,user, isDispatched, setIsDispatched}) =>{
    const [showSingle, setShowSingle] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const groupInfo = { groupName:group.name, groupImage:group.groupImage, groupMember:group.members, groupExpences:group.totalExpences, groupId:group._id}


    const [text, setText] = useState(group._id);
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
        setIsCopied(true);
        setTimeout(() => {
        setIsCopied(false);
        }, 1000);
    };
    const handleChange = () =>{
        setShowSingle(true);
    }

    const handleDelete=(e) => {
        e.preventDefault();
        dispatch(deleteGroup(group._id));
    }

    if(showSingle){
        return (
            <SingleGroupInfo 
            setShowSingle={setShowSingle} 
            groupInfo={groupInfo} 
            user={user} 
            isDispatched={isDispatched} 
            setIsDispatched={setIsDispatched}
            />
        )
    }



    return(
        
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={group.groupImage || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />
            <div className={classes.overlay}>
                <Typography variant="h6">{group.groupType}</Typography>
                <Typography variant="h6">Members : {group.members.length}</Typography>
            </div>
            
            <div className={classes.overlay2}>
                <Button  style={{ color: 'white' }} size="small" onClick={handleChange}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
                <CopyToClipboard text={text} onCopy={onCopyText}>
                    <Button  style={{ color: 'white' }} size="small">
                        <FileCopyIcon fontSize="default" />
                    </Button>
                </CopyToClipboard>
            </div>

            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{group.name}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Total Expence : {group.totalExpences}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" >
                <InfoIcon fontSize="small" /> More Info
                </Button>
                <Button size="small" color="secondary" onClick={(e) =>handleDelete(e)}>
                <DeleteIcon fontSize="small" /> Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Friend;