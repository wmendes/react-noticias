import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home'
import Login from '../Auth/login'
import Registro from '../Auth/registro'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registro" exact component={Registro} />
        </Switch>
    </main>
)

export default Main
