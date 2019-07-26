/* import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from '../Header'
import Feed from '../Feed'
import Login from '../Auth/login'
import Registro from '../Auth/registro'
import Conta from '../Conta'
import Salvos from '../Salvos'
import ProtectedRoute from './protegida.js'

const Main = () => (
    <div>
    <Header />
    <main>
        <Switch>
            <Route exact path='/' component={Feed} />
            <Route path="/login" component={Login} />
            <Route path="/registro" exact component={Registro} />
            <ProtectedRoute path="/conta" exact component={Conta} />
            <ProtectedRoute path="/salvos" exact component={Salvos} />
        </Switch>
    </main>
    </div>
)

export default Main
 */