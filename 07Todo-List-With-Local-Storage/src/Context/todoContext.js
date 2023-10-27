import { useContext , createContext } from "react";

export const TodoContext = createContext({

    todoContent : [ {
        id : 1,
        todoMessage : "todo msg",
        isCompleted : false ,
    }, ],

    addTodo : (todo)=>{},
    updateTodo : (id , todoMessage)=>{},
    deleteTodo : (id)=>{},
    collapseToggle : (id)=>{},

})

export const TodoProvider = TodoContext.Provider

export default function useTodoContext(){
    return useContext(TodoContext)
}