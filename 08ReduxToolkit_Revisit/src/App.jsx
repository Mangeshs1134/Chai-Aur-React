import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <AddTodo/>
     <TodoItems/>
    </>
  )
}

export default App
