require("dotenv").config()

const Users = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const LoginController = (req, res) => {
  const { email, password } = req.body

  const user = Users.find((ele) => ele.email == email)
  if (user) {
    bcrypt.compare(password, user.password, function (err, result) {
      if (result == true) {
        const token = jwt.sign({ email: email }, process.env.SECRET)
        res.status(200).json({
          message: "Logged In SuccessFully",
          token: token,
        })
      } else {
        res.status(400).json({
          message: "Wrong Password",
        })
      }
    })
  } else {
    res.status(400).json({
      message: "User Not found",
    })
  }
}

const SignupController = (req, res, next) => {
  // const { name, email, phoneNumber, password } = req.body

  Users.push(req.body)

  if (Users.push(req.body)) {
    res.status(200).json({
      message: "User successfully registered",
      data: Users,
    })
  } else {
    res.status(400).json({
      message: "User has not registered, please try again",
    })
  }
}

const UsersController = (req, res) => {
  res.json({
    data: Users,
  })
}

module.exports = {
  LoginController,
  SignupController,
  UsersController,
}
