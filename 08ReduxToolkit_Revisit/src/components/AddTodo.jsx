import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { addTodo } from '../features/todoSlice';

function AddTodo() {
    const [input , setInput] = useState("")
    const dispatch = useDispatch()

    function addTodoHandler (e){
        // console.log("ok")
        e.preventDefault()
        if (input != "") {
            dispatch(addTodo(input))
            setInput("")
        }
    }
  return (
    <>
     <form onSubmit={addTodoHandler}>
        <input type="text"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder='add Todo'
        />
        <button type="submit">Add Todo</button>
     </form> 
     <div>
        Here are your Todos
        </div>    
    </>
  )
}

export default AddTodo