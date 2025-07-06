const express = require("express")
const app = express()
const path = require("path")
const cookieParser = require("cookie-parser")
const flash = require("connect-flash")
const expressSession = require("express-session")
const db = require("./config/mongoose-connection")
const ownersRouter = require("./routes/ownersRouter")
const productsRouter = require("./routes/productsRouter")
const usersRouter = require("./routes/usersRouter")
const indexRouter = require("./routes/index")
require("dotenv").config()

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(expressSession({
    resave: false,
    saveUninitialized: false ,
    secret: 'dev-secret-key'
}))
app.use(flash())
app.use(express.static(path.join(__dirname, "public")))

app.use("/owners", ownersRouter)
app.use("/users", usersRouter)
app.use("/products", productsRouter)
app.use("/", indexRouter)


app.listen(3000, () => {
    console.log("Example port is running on 3000")
})