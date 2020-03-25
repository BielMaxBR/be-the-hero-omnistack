import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './pages/Logon'
import Register from './pages/Register'
import Profile from './pages/Profile'

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact componet={Logon} />
                <Route path="/register" componet={Register} />
                
                <Route path="/profile" componet={Profile} />
            </Switch>
        </BrowserRouter>
    )
}