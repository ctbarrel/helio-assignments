import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './Home'
import SignUp from './SignUp'
import Login from './Login'
import ForgotPass from './ForgotPass'

export default function MainRouter () {
    return (
        <Router>
            <Switch>
                <Route path='/signup'><SignUp></SignUp></Route>
                <Route path='/login'><Login></Login></Route>
                <Route path='/forgot'><ForgotPass></ForgotPass></Route>
                <Route path='/'><Home></Home></Route>
            </Switch>
        </Router>
    )
}