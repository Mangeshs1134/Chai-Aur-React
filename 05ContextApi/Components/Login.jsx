import React, { useContext } from 'react'
import { UserContext } from '../Contexts/UserContext'

function Login(){

    const {user} = useContext(UserContext)
    const {setuser}=useContext(UserContext)

    setuser("mangesh")

  return (
    
    <div>Login $ {user}</div>
  )
}

export default Login