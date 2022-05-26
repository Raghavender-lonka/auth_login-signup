import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
  return (
    <>
      <div className="home-container">
        <Link to={"/signup"} className="home-signup">
          Sign Up
        </Link>
        ||
        <Link to={"login"} className="home-login">
          Log In
        </Link>
      </div>
    </>
  )
}
