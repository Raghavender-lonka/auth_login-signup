const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const encryptPassword = (req, res, next) => {
  const myPlaintextPassword = req.body.password
  const saltRounds = 5
  bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    req.body.password = hash
    next()
  })
}

module.exports = {
  encryptPassword,
}
