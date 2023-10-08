import { useContext , createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id: 1 ,
            todoMsg: "hellow" ,
            todoCompleted: false, 
        }
    ] , 
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    completeTodo: (id)=>{},
    addTodo: (todo)=>{}
})

export const TodoProvider = TodoContext.Provider ;

export function useTodo(){
 return useContext(TodoContext);
}