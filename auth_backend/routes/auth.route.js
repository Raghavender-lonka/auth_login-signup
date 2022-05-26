const express = require("express")
const authRouter = express.Router()
// const Users = require("../models/User")
const {
  LoginController,
  SignupController,
  UsersController,
} = require("../controllers/auth.controller")
const { encryptPassword } = require("../middlewares/auth.middleware")

authRouter.post("/signup", encryptPassword, SignupController)
authRouter.post("/login", LoginController)
authRouter.get("/user", UsersController)

module.exports = authRouter
