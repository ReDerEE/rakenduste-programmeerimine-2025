const { validationResult } = require("express-validator")
const jwt = require("jsonwebtoken")
const secret = "megaBrian   "
exports.login = (req, res) => {
  const payload = {
    userId: crypto.randomUUID(),
    username: req.body.username,
    role: req.body.role,
  }
  const token = jwt.sign(payload, secret)
  res.send(token)
}

exports.ping = (req, res) => {
  const authHeader = req.headers["authorization"]
  console.log(authHeader)
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.sendStatus(401)
  }

  const token = authHeader.slice(7)
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401)
    }
    // Kui token on korrektne, vastame, et kõik on korras
    res.send({ message: "Works", user: decoded })
  })
}
