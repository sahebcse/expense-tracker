import React,{ useState} from 'react';
import {BrowserRouter, Switch, Route, useHistory} from 'react-router-dom';
import User from './components/user/user'
import Auth from './components/forms/auth/form'
import { Container} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar'
import SingleGroupInfo from './components/groups/group/singleGroupInfo'
import './index.css'

import { Team } from './components/landing/Team'
import  {About}  from './components/landing/about'
import Navigation from './components/landing/navigation'; 
import Home from './components/landing/home'

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
               
                <Switch>
                    <Container >
                        <Route path='/' exact><Navigation />      
       <Home/>
       <About/>
       <Team/> </Route>
       <Navbar/>
                        <Route path='/auth' exact><Auth setCurrentUser={setCurrentUser}/></Route>
                        <Route path='/user' exact><User currentUser={currentUser} setCurrentUser={setCurrentUser}/></Route>
                        <Route path='/group/info' exact><SingleGroupInfo/></Route>
                    </Container>
                </Switch>
            </Container>
        </BrowserRouter>
    )
}

export default App