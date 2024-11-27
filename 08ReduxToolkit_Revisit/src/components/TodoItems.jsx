import React , {useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { updateTodo,completeTodo, removeTodo } from '../features/todoSlice'

function TodoItems() {
  const dispatch=useDispatch()
  const todos = useSelector((state)=>state.todos)
  const [update,setUpdate]=useState("")
  return (
    <>
    <div>TodoItems</div> 
    <div>
      {todos.map((todo)=>{
       const obj = {
        id: todo.id,
        msg: update,
      };
      return (
        <li key={todo.id}>
          {todo.text}
          {todo.isCompleted}
          
          <button onClick={()=>dispatch(removeTodo(todo.id))}>❌</button>
          <button onClick={()=>dispatch(completeTodo(todo.id))}>l</button>
          
          <button onClick={() => {
            dispatch(updateTodo(obj))
            setUpdate('')
          }
            }>🖊️</button>
        </li>
      )})
      }
       <input type="text" value={update} placeholder="write update and click 🖊️" onChange={(e)=>setUpdate(e.target.value)} />
    </div>
    </>
    
  )
}

export default TodoItems