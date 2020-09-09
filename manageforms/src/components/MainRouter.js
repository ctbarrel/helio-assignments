import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import {LoggedInProvider} from './LoggedInContext'
import Login from './Login'
import SignUp from './SignUp'
import Home from './Home'
import Forgot from './Forgot'

export default function MainRouter () {

    return (
    <LoggedInProvider>
        <Router>
            <Switch>
                <Route path='/signup'>
                    <SignUp></SignUp>
                </Route>
                <Route path='/login'>
                    <Login></Login>
                </Route>
                <Route path='/forgot'>
                    <Forgot></Forgot>
                </Route>
                <Route path='/'>
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    </LoggedInProvider>
)}