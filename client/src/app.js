import React,{ useState} from 'react';
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';
import User from './components/user/user'
import Auth from './components/forms/auth/form'
import { Container} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar'
import SingleGroupInfo from './components/groups/group/singleGroupInfo'
import './index.css'

const App = ()=>{
    const [currentUser, setCurrentUser] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const logout=()=>{
        dispatch({type:'LOGOUT'});
        history.push('/');
    }

    return(
        <BrowserRouter>
            <Container maxWidth="lg">
               <Navbar/>
                <Switch>
                    <Container >
                        <Route path='/' exact><Auth setCurrentUser={setCurrentUser}/></Route>
                        <Route path='/user' exact><User currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
                        <Route path='/group/info' exact><SingleGroupInfo/></Route>
                    </Container>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App