require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")

const port = process.env.PORT || 9000

const authRouter = require("./routes/auth.route")

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRouter)

app.listen(port, () => {
  console.log("Server Up And running " + port)
})
