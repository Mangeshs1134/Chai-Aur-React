import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos : [
        {
        id : 1,
        text : "Ram",
        isCompleted : false
    },
]   ,
};

export const todoSlice = createSlice({
    name : 'todo' ,
    initialState ,
    reducers : {
        addTodo : (state ,action) =>{
            console.log("addTodo");
            
            const todo ={
                id : nanoid,
                text : action.payload,
                isCompleted : false
            }
            state.todos.push(todo)
            console.log(state.todos[0].text);
        } ,
        removeTodo : (state , action) =>{
           state.todos= state.todos.filter((todo)=> {todo.id !== action.payload})
        } ,
        completeTodo : (state , action) =>{
            state.todos = state.todos.map((prev)=> prev.id === action.payload ? {...prev ,isCompleted: !prev.isCompleted} : prev)
        } ,
        updateTodo : (state , action) =>{
            // let msg= action.payload.msg
            // state.todos= state.todos.map((prev)=> prev.id === action.payload.id ? {...prev , text : msg}: prev)
            const msg = action.payload.msg
      
      state.todos = state.todos.map((prevTodo) => prevTodo.id === action.payload.id ? {...prevTodo , text : msg } : prevTodo )
        } ,
    },
})

export const {addTodo , removeTodo , completeTodo , updateTodo} = todoSlice.actions;
export default todoSlice.reducer