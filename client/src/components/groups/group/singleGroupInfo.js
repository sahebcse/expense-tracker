import React,{ useState} from 'react';
import { Card, CardActions, CardContent, Typography,  CardMedia, Button, Grid} from '@material-ui/core'
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AddIcon from '@material-ui/icons/Add';
import Input from '../../forms/auth/input'
import { addFriendExpence, addMember } from '../../../actions/user/user'
import { useDispatch } from 'react-redux'

const SingleGroupInfo = ({ setShowSingle, groupInfo, user }) =>{
    const classes = useStyles();
    const dispatch = useDispatch();

    const { groupName, groupImage, groupMember, groupExpences, groupId} = groupInfo;
    const [members,setMembers] = useState(groupMember);
    const [expence, setExpence] = useState(0); 
    console.log("members are.....",members)
    const [memberEmail, setMemberEmail] = useState('');

    const handleChange = (e)=>{
        e.preventDefault();
        setMemberEmail(e.target.value);
    }

    const handleAddMember = ()=>{
        const data = {groupId:groupId, userId:memberEmail, currentUser:user.result._id};
        dispatch(addMember(data));
    }

    const handleExpenceChange = (id)=>{
        console.log('chalo tum bhi kya yaad rakhogey......')
        const sendData = { paidby:user.result._id, recipent:id, amount:expence, groupId:groupId};
        setExpence(0);
        dispatch(addFriendExpence(sendData));
    }

    return(
        <Card className={classes.card}>
            <Typography variant="h3" align="center">update group</Typography>
            <CardMedia className={classes.media} image={groupImage || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />

            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{groupName}</Typography>
            <CardContent>
                <List className={classes.SingleGroupList}>
                    {members.map(member =>{
                    return (<ListItem key={member._id}>
                        <ListItemAvatar>
                            <Avatar>
                                <CheckCircleOutlineTwoToneIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <Grid>
                            <ListItemText primary={member.firstName} secondary={member.email} />
                            {member.email!==user.result.email && <Grid className={classes.cardActions}>
                                <Input name="addExpence" label="Add Expence" handleChange={(e)=>{setExpence(e.target.value)}} />
                                <Button size="small" color="primary" onClick={()=>handleExpenceChange(member._id)} >
                                    <AddIcon fontSize="small" /> Add
                                </Button>
                            </Grid>}
                        </Grid>
                            
                    </ListItem>)
                    })}
                </List>
                <Typography variant="body2" color="textSecondary" component="p">Total Expence : {groupExpences}</Typography>
                <Input name="addMember" label="Add Member" handleChange={handleChange} type="email" />
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleAddMember} >
                <AddCircleOutlineIcon fontSize="small" /> Add
                </Button>
                <Button size="small" color="secondary" >
                <DeleteIcon fontSize="small" /> Delete
                </Button>
                <Button size="small" color="primary" onClick={()=>setShowSingle(false)} >
                <ArrowBackIosIcon fontSize="small" /> Back
                </Button>
            </CardActions>
        </Card>
    )
}

export default SingleGroupInfo;