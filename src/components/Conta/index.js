import React, { useEffect } from 'react'
import firebase from '../../firebase'
export default function Conta() {

  useEffect(() => {
    console.log('\nuser...\n')
    console.log(firebase.currentUser)
    console.log(firebase.getCurrentUser())
  })

    return(
      <h1>Conta...</h1>
    )
}