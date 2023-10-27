import React, { useState ,useEffect } from 'react'
import useTodoContext from '../Context/todoContext';

function TodoForm() {

    const {addTodo} = useTodoContext()

    const [todoMsg , setTodoMsg ] = useState("")

    const add = (e)=>{
        e.preventDefault()
        if(!todoMsg)
         return
        addTodo(todoMsg)
        setTodoMsg("")
    }
    useEffect(() => {
    console.log(todoMsg);
    }, [todoMsg])
    
    

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                value={todoMsg}
                onChange={(e)=>(setTodoMsg(e.target.value))}
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;