import TodoCard from "./components/TodoCard"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import { useState , useEffect } from "react"

function App() {
  
  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')

  function keepData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: 
    newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [newTodo, ...todos]
    keepData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    keepData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  function moveToTop(index) {
    const updatedTodos = [...todos]
    const todoToMove = updatedTodos.splice(index, 1)[0]
    updatedTodos.unshift(todoToMove)
    setTodos(updatedTodos)
    keepData(updatedTodos)
  }

  function moveToBottom(index) {
    const updatedTodos = [...todos]
    const todoToMove = updatedTodos.splice(index, 1)[0]
    updatedTodos.push(todoToMove)
    setTodos(updatedTodos)
    keepData(updatedTodos)
  }

  useEffect (() => {
    if (!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')

    if (!localTodos) {
      return
    }

    localTodos = JSON.parse(localTodos).todos
    
    setTodos(localTodos)
  }, [])


  return (
    <>
     <h1>ToDo List!!</h1>
     <TodoInput 
        handleAddTodos={handleAddTodos} 
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        todos={todos}/>
     <TodoList 
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        moveToTop={moveToTop}
        moveToBottom={moveToBottom}
        todos={todos}/>
    </>
  )
}

export default App
