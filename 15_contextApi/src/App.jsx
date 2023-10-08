import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/Form'
import { TodoProvider } from './context'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo){
    setTodos((oldTodo)=>[{id: Date.now() , ...todo}, ...oldTodo])
  }

  function updateTodo(id , todo){
    setTodos((prev)=> prev.map((prevValue)=> prevValue.id === id ? todo : prevValue));
  }

  function deleteTodo(id){
    setTodos((prev)=> prev.filter((prevValue)=> prevValue.id !== id));
  }

  function completeTodo(id){
    //different
    setTodos((prev)=> prev.map((prevValue)=> prevValue.id === id ? {...prevValue , todoCompleted: !prevValue.todoCompleted} : prevValue ))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'));
    if(todos && todos.length > 0){
      setTodos(todos);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos' , JSON.stringify(todos));
  },[todos]);

  return (
    <TodoProvider value={{todos , updateTodo , deleteTodo , completeTodo , addTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {
              todos.map((todo)=> (
                <div className=' w-full' key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              ) )
            }
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
