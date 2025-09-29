const {validationResult} = require("express-validator")

const todos = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    title: "TeorInf",
    description: "AAAAAAAAAAAAAAAAAA",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    title: "Robootika",
    description: "Tee pomm",
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
//   if (req.body.title && req.body.description) {
const errors = validationResult(req)
if(!errors.isEmpty()){
    return res.sendStatus(400)
}
    newTodo = new todoData()
    newTodo.id = crypto.randomUUID()
    newTodo.title = req.body.title
    newTodo.description = req.body.description
    newTodo.createdAt = Date.now()
    todos.push(newTodo)
    res.sendStatus(200)
}

exports.readAdmin = (req, res) => {
  res.send(todos)
}

exports.read = (req, res)=>{
    res.send(todos.filter(todo => todo.deleted == false))
}

exports.update = (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.sendStatus(400)
    }
    updateTodo = todos.find(todo => (todo.id == req.body.id))
    updateTodo.title = req.body.updateTitle
    updateTodo.description = req.body.updateDescription
    updateTodo.updatedAt = Date.now()
    res.sendStatus(200)

}

exports.delete = (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.sendStatus(400)
    }
  deleteTodo = todos.find(todo => (todo.id == req.body.id))
  deleteTodo.deleted = !deleteTodo.deleted
  deleteTodo.updatedAt = Date.now()
  res.sendStatus(200)
}

