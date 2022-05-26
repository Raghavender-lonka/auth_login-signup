import { useState } from "react"
import * as React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from "axios"
import { Link } from "react-router-dom"

const SignUp = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
  })

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  // console.log(state)
  const callApi = () => {
    axios
      .post("http://localhost:9090/api/auth/signup", state)
      .then((response) => {
        console.log("Success")
        setState({
          name: "",
          email: "",
          phoneNumber: "",
          password: "",
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div className="container">
      <h1 className="container-header">Sign-Up Here...</h1>
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
          label="Name"
          name="name"
          variant="outlined"
          value={state.name}
          onChange={handleChange}
          //   fullWidth
        />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          value={state.email}
          onChange={handleChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Phone Number"
          name="phoneNumber"
          variant="outlined"
          value={state.phoneNumber}
          onChange={handleChange}
        />
        <br />

        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          variant="outlined"
          value={state.password}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" onClick={callApi}>
          Sign Up
        </Button>
      </Box>
      <small>
        Already have an account?{" "}
        <Link to={"/login"} className="login-link">
          Log In
        </Link>
      </small>
    </div>
  )
}

export default SignUp
