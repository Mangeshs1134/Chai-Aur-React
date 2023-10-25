import React , {useState}from 'react'
import { UserProvider } from '../Contexts/UserContext'
import Login from '../Components/Login'

function App() {

  const [user, setuser] = useState("Mangesh")

  return (
    <UserProvider value={{user , setuser}}>
    
    <Login />
    
    </UserProvider>
    
  )
}

export default App