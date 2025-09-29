const todos = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    title: "schizoDev",
    description: "this dev shit",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    title: "Kitty",
    description: "a",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
]

class todoData {
  constructor(
    id,
    title,
    description,
    createdAt,
    updatedAt = false,
    deleted = false,
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.createdAt = createdAt
    this.updatedAt
    this.updatedAt = updatedAt
    this.deleted = deleted
  }
}

exports.create = (req, res) => {
  if (req.body.title && req.body.description) {
    newTodo = new todoData()
    newTodo.id = crypto.randomUUID()
    newTodo.title = req.body.title
    newTodo.description = req.body.description
    newTodo.createdAt = Date.now()
    todos.push(newTodo)
    //   res.send(req.params.name)
    //   console.log(req.body)
    //   const { name } = req.body
    //   console.log({ name })  
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
}

exports.read = (req, res) => {
  res.send(todos)
}

exports.update = (req, res) => {
  if (req.body.updateTitle && req.body.updateDescription) {
    updateTodo = todos.find(todo => (todo.id = req.body.id))
    updateTodo.title = req.body.updateTitle
    updateTodo.description = req.body.updateDescription
    updateTodo.updatedAt = Date.now()
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
}

exports.delete = (req, res) => {
  deleteTodo = todos.find(todo => (todo.id = req.body.id))
  deleteTodo.deleted = true
  deleteTodo.updatedAt = Date.now()
  res.sendStatus(200)
}
