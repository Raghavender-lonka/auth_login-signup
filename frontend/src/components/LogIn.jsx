import { useState } from "react"
import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from "axios"
import { Link } from "react-router-dom"

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }

  const callApi = () => {
    axios
      .post("http://localhost:9090/api/auth/login", state)
      .then((response) => {
        console.log("Success")
        console.log("Token =>", response.data.token)
        localStorage.setItem("userInfo", JSON.stringify(response.data.token))
      })
      .catch((err) => {
        console.log(err)
      })

    setState({
      email: "",
      password: "",
    })
  }
  return (
    <div className="container">
      <h1 className="container-header">Log-In Here...</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "500px", marginTop: "5px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          onChange={handleChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          variant="outlined"
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" onClick={callApi}>
          Log In
        </Button>
      </Box>
      <small>
        Don't have an account?{" "}
        <Link to={"/signup"} className="signup-link">
          Sign Up
        </Link>
      </small>
    </div>
  )
}

export default Login
