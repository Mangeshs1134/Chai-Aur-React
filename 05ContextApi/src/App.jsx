import React from 'react'
import useUserHook, { UserProvider } from '../Contexts/UserContext'
import Login from '../Components/Login';

function App() {

   
  
    

  return (
    <UserProvider   value= { 'user' : "Mangesh Gupta" , setUser }>
 
      <Login/>

    </UserProvider>
  )
}

export default App