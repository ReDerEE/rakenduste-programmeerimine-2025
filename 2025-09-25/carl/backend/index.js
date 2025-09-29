const express = require("express")
const cors = require("cors")

const app = express()

app.get("/", (req, res) => {
  res.send("Hello World")
})

const catsRoutes = require("./routes/cats.routes")
const todoRoutes = require("./routes/todo.routes")
const authRoutes = require("./routes/auth.routes")

app.use(cors())
app.use(express.json())

app.use("/cats", catsRoutes)
app.use("/todo", todoRoutes)
app.use("/auth", authRoutes)
app.listen(3000)
