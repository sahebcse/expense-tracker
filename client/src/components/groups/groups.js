import React from 'react';
import { Typography, Grid} from '@material-ui/core'
import { useSelector } from 'react-redux'
import Group from './group/group'

const Groups = ()=>{
    const groups = useSelector((state)=>state.groups);
    console.log(groups);
    return(
        <div>
            <Typography variant="h2" align="center">Groups</Typography>
            {groups.map((group)=>{
                return (<Grid key={group._id} item xs={12} sm={8} md={8}>
                    <Group group={group}/>
                </Grid> )
            })}
        </div>
    )
}

export default Groups;