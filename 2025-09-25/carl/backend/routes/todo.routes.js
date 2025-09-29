const express = require("express")
const { body } = require("express-validator")
const router = express.Router()
const todoController = require("../controllers/todo.controller")
const {
  todoRouteMiddleware,
  todoGetRouteMiddleware,
} = require("../middlewares/todo.middlewares")

router.use(todoRouteMiddleware)

// /cats/ Get endpoint level middleware
router.get("/", todoController.read)
router.get("/adminRead", todoController.readAdmin)
router.post(
  "/",
  [body("title").notEmpty(), body("description").notEmpty()],
  todoController.create,
)
router.put(
  "/",
  [
    body("id").notEmpty(),
    body("updateTitle").notEmpty(),
    body("updateDescription").notEmpty(),
  ],
  todoController.update,
)
router.delete("/", [body("id").notEmpty()], todoController.delete)

module.exports = router
