import React from "react"
import { deleteTodo } from "../lib/api/todos"
import { Todo } from "../interfaces/index"

interface TodoItemProps {
  todo: Todo
  setTodos: Function
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, setTodos }) => {
  const handleDeleteTodo = async (id: number) => {
    try {
      const res = await deleteTodo(id)
      console.log(res)

      if (res?.status === 200) {
        setTodos((prev: Todo[]) => prev.filter((todo: Todo) => todo.id !== id))
      } else {
        console.log(res.data.message)
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <tr>
      <td>{todo.title}</td>
      <td>
        <button onClick={() => handleDeleteTodo(todo.id || 0)}>Delete</button>
      </td>
    </tr>
  )
}
