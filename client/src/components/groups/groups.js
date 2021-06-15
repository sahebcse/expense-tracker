import React from 'react';
import { Typography, Grid, CircularProgress} from '@material-ui/core'
import { useSelector } from 'react-redux'
import Group from './group/group'
import useStyles from './styles'

const Groups = ({user})=>{
    const groups = useSelector((state)=>state.groups);
    const classes = useStyles();

    return(
        <div>
            <Typography variant="h2" align="center">Groups</Typography>
            {!groups ? <CircularProgress/> : (
                <Grid className={classes.container} container alignItems="center" spacing={3} >
                {groups.map((group)=>{
                    return (<Grid key={group._id} item xs={12} sm={8} md={8}>
                        <Group group={group} user={user}/>
                        </Grid> )
                    })}
                </Grid>
            )}
        </div>
    )
}

export default Groups;