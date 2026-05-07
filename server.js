const express = require("express")
const app = express()
const mogoose = require("mongoose")
const authRoutes = require("./routes/auth")



app.use(express.json())

app.use("/", authRoutes)

app.get("/", (req,res)=>{
    res.send("Server is running")
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log("Server is running on port " + PORT)
})

mogoose.connect("mongodb://localhost:27017/authdb")
.then(()=>{
    console.log("Connected to mongoDB")
})
.catch((err)=>{
    console.log("Error connecting to DB", err)
})
