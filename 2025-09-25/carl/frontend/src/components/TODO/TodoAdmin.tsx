import { Box, Button, List, ListItem, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"

type Todo = {
  id: string
  title: string
  description: string
  createdAt: number
  updatedAt: number | null
  deleted: boolean
}

const TodoAdmin = () => {
  const [todo, setTodos] = useState<Todo[]>([])

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todo/adminRead")
    const data = await response.json()
    console.log(data)
    setTodos(data)
  }

  const changeDeleted = async (id: string) => {
    await fetch("http://localhost:3000/todo", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
    fetchTodos()
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <Box>
      <Typography variant="h1">TODOs</Typography>
      <TodosList todos={todo} onDelete={changeDeleted}/>
      {/* <SubmitCat fetchCats={fetchTodos} /> */}
    </Box>
  )
}

type TodoListProps = {
  todos: Todo[]
  onDelete: (id: string) => void
}

const TodosList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <>
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          {JSON.stringify(todo)}
          <br />
          <Button variant="outlined" onClick={() => onDelete(todo.id)}>FLIP {todo.id}</Button>
        </ListItem>
      ))}
    </List>
    <Button href="/">To user</Button>
    </>
  )
}
export default TodoAdmin
