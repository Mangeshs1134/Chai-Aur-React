import { useState , useEffect } from 'react'
import './App.css'
import { TodoProvider , TodoContext } from './Context/todoContext'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  

  const [todoContent, setTodoContent] = useState([])

  const addTodo=(todo)=>{

    setTodoContent((prev)=>([{id:Date.now(), todoMessage :todo , isCompleted : false}, ...prev]))
    console.log(todoContent);
  }
  const deleteTodo=(id)=>{
    setTodoContent( (prev) => prev.filter((prevTodo)=> prevTodo.id !== id)  )
    // setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }
  const updateTodo=(id ,todo)=>{
    setTodoContent((prev) => prev.map((prevTodo) => (prevTodo.id===id ? todo : prevTodo) ) )
  }
 
  const collapseToggle=(id)=>{
    setTodoContent(  (prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo , isCompleted : !prevTodo.isCompleted}  : prevTodo   )
    )  )
  }
  
  useEffect(() => {
    const todoContent = JSON.parse(localStorage.getItem("Todo"))

    if (todoContent && todoContent.length > 0) {
      setTodoContent(todoContent)
    }
  }, [])
  
useEffect(() => {
    localStorage.setItem("Todo" , JSON.stringify(todoContent))
    // console.log();
}, [todoContent])

  return (
    <TodoProvider value={{todoContent , addTodo ,deleteTodo , updateTodo ,collapseToggle}}> 
    
<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm/>
                        {/* Todo form goes here */} 
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todoContent.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
