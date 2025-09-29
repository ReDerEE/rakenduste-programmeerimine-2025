const authRouteMiddleware = (req, res, next) => {
    console.log("Time: ", Date.now())
    next()
  }
  
  const authGetRouteMiddleware = (req, res, next) => {
    console.log("GET middleware")
    next()
  }
  
  module.exports = { authRouteMiddleware, authGetRouteMiddleware }
  