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

const Todo = () => {
  const [todo, setTodos] = useState<Todo[]>([])

  const fetchTodos = async () => {
    const response = await fetch("http://localhost:3000/todo")
    const data = await response.json()
    console.log(data)
    setTodos(data)
  }


  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <Box>
      <Typography variant="h1">TODOs</Typography>
      <TodosList todos={todo} />
      {/* <SubmitCat fetchCats={fetchTodos} /> */}
    </Box>
  )
}

type TodoListProps = {
  todos: Todo[]
}

const TodosList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <>
    <List>
      {todos.map(todo => (
        <ListItem key={todo.id}>
          {JSON.stringify(todo)}
        </ListItem>
      ))}
    </List>
    <Button href="/admin">To admin</Button>
    </>
  )
}
export default Todo
