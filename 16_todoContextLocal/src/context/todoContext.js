import {useContext , createContext} from 'react';

export const TodoContext = createContext({
    todos: [
        {
        id: 1,
        todoMsg: "I am todo Msg",
        completed: false
        }
    ],
    addTodo: (todo)=>{},
    updateTodo: (id , todo)=>{},
    toggleComplete: (id)=>{},
    deleteTodo: (id)=>{}

});

export const TodoProvider = TodoContext.Provider ;

export function useTodo(){
    return useContext(TodoContext);
}