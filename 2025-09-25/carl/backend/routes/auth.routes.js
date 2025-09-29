const express = require("express")
const { body } = require("express-validator")
const router = express.Router()
const authController = require("../controllers/auth.controller")
const {
  authRouteMiddleware,
  authGetRouteMiddleware,
} = require("../middlewares/auth.middlewares")

router.use(authRouteMiddleware)

// /cats/ Get endpoint level middleware
router.get("/ping", authController.ping)
router.post("/login", authController.login)

module.exports = router
