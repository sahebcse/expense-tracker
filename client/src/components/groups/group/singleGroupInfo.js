import React,{ useState} from 'react';
import { Card, CardActions, CardContent, Typography,  CardMedia, Button} from '@material-ui/core'
import useStyles from './styles'
import DeleteIcon from '@material-ui/icons/Delete';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineTwoToneIcon from '@material-ui/icons/CheckCircleOutlineTwoTone';
import Input from '../../forms/auth/input'

const SingleGroupInfo = ({setShowSingle, groupInfo})=>{
    const classes = useStyles();

    const { groupName, groupImage, groupMember, groupExpences} = groupInfo;
    const [members,setMembers] = useState(groupMember);
    const [expence, setExpence] = useState(groupExpences);
    console.log("members are.....",members)
    const [newExpence, setNewExpence] = useState(0);
    const [addMember, setAddMember] = useState('');

    const handleChange = (e)=>{
        e.preventDefault();
        setAddMember(e.target.value);
    }

    const handleAddMember = (e)=>{
        e.preventDefault();
        setExpence(expence+newExpence)
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
                        <ListItemText primary={member.firstName} secondary={member.email} />
                    </ListItem>)
                    })}
                </List>
                <Typography variant="body2" color="textSecondary" component="p">Total Expence : {expence}</Typography>
                <Input name="addMember" label="Add Member" handleChange={handleChange} type="email" />
                <Input name="addExpence" label="Add Expence" handleChange={(e)=>{setNewExpence(e.target.value)}} />
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={handleAddMember} >
                <DeleteIcon fontSize="small" /> Add
                </Button>
                <Button size="small" color="secondary" >
                <DeleteIcon fontSize="small" /> Delete
                </Button>
                <Button size="small" color="primary" onClick={()=>setShowSingle(false)} >
                <DeleteIcon fontSize="small" /> Back
                </Button>
            </CardActions>
        </Card>
    )
}

export default SingleGroupInfo;