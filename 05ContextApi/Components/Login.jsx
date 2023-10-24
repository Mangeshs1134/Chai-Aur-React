import React from 'react'
import useUserHook, { UserContext, UserProvider } from '../Contexts/UserContext'
import { useContext } from 'react'

function Login() {

    const { setUser} = useContext(UserContext)

    // console.log(user);
    // console.lo/ g(setUser);

  return (
    <div>
        <input type="text" placeholder='User-Name' name="" id="" />
        <input type="text" placeholder='Password' name="" id="" />
    </div>
  )
}

export default Login