import { useEffect, useState } from 'react'
import './App.css'
import { TodoContext, TodoProvider } from './context/todoContext'
import TodoForm from './Components/TodoForm';
import TodoItem from './Components/TodoComponents';

function App() {
  const [todos , setTodos] = useState([]);

  function addTodo(todo){
    setTodos((prev)=> [...prev , {id: Date.now() , ...todo }]);
  }

  function updateTodo(id , todo){
    setTodos(
      (prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo , todoMsg: todo.todoMsg} : prevTodo)
    )
  }

  function deleteTodo(id){
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id !== id)) ;
  }

  function toggleComplete(id){
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo , completed: !prevTodo.completed} : prevTodo ));
  }

  useEffect(()=>{
    const storedtodos = JSON.parse(localStorage.getItem('todos'));
    if(storedtodos && storedtodos.length > 0){
      setTodos(storedtodos);
    }
  },[]);

  useEffect(()=>{
      localStorage.setItem('todos', JSON.stringify(todos));
  },[todos])

  return (
    <TodoProvider value={{todos , updateTodo , addTodo , toggleComplete , deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo)=>
                <div key={todo.id} className=' w-full'>
                  <TodoItem todo={todo} />
                </div>
              )
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
