import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
    backgroundColor: "#0F8241"
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
    fontSize:"24px",
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
  },
  brandContainer: {
    display: 'flex',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  buttons:{
    display:'flex',
    justifyContent: 'space-between',
    padding:'4px',
    margin:'3px',
  },
  button:{
    margin:"2px",
    backgroundColor:"inherit",
  },
  link:{
    backgroundColor:"inherit",
    fontSize:"16px",
    color:"#fff",
    textDecoration: 'none',
  },
  teamicons:{
    display:'flex',
    justifyContent: 'center',
  },
  teamiconssingle:{
    margin:"5px",
    color:"#000"
  }
  
}));