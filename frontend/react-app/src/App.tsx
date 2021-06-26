import React, { useState, useEffect } from "react"
import { TodoList } from "./components/TodoList"
import { TodoForm } from "./components/TodoForm"

import { getTodos } from "./lib/api/todos"
import { Todo} from "./interfaces/index"

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleGetTodos = async () => {
    try {
      const res = await getTodos()
      console.log(res)

      if (res?.status === 200) {
        setTodos(res.data.todos)
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleGetTodos()
  }, [])

  return (
    <>
      <h1>Todo App</h1>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}

export default App
