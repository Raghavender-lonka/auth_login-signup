import "./App.css"
import Home from "./components/Home"
import SignUp from "./components/SignUp"
import Login from "./components/LogIn"

import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
// "Create a front-end appliction which contains Login page and Register Page. When user registers himself, by giving Name, Phone, Email and Password, then :

// Create an API /register which saves the data and create the user.

// 1. Your API should hash the password before saving the data.
// 2. Your API should return correct status codes in success and failure scenarios
// 3. In success, send ""User successfully registered"" message in response.
// 4. In failure scenario, send ""User has not registered, please try again"", error message in response
// 5. This API should accept Name, Phone, Email and Password

// Create another API /login. This api will be called when user will try to login from your front-end application.

// 1. This API should accept email and password.
// 2. It should validate the user if registered or not.
// 3. If user is valid, then create JWT token and send in the sucess response of the API.
// 4. In succcess scenario, send ""User has logged in successfully"" message and token. This token should be stored in the local storage.
// 5. In failure scenario, send ""User is not registered"" message"
