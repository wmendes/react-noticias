import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from './components/Header'
import Feed from './components/Feed'
import Login from './components/Auth/login'
import Registro from './components/Auth/registro'
import Conta from './components/Conta'
import Salvos from './components/Salvos'
import ProtectedRoute from './ProtectedRoute'
import firebase from './firebase'
import './App.css';

function App() {

  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => {
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
      console.log('firebaseInit:\n')
      console.log(firebaseInitialized)
    })
  })

  return firebaseInitialized !== false ?  (
   <Router>
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
       </Router>
    
  ) : <div id="loader"><CircularProgress /></div>
    
}

export default App
