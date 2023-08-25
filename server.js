const express=require("express")
const connectDB = require("./config/connectDB")
const path=require("path")
const app=express()
app.use (express.json())
connectDB()
const port=5000
app.use("/userAuth",require("./routes/user"))
app.use("/api/car", require("./routes/Car"))
app.use("/api/uploads", require("./routes/uploadRoute"))
app.use("/api/book", require ("./routes/Book"))

app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
app.listen(port,(err)=>{
    err?console.log(err):console.log(`server is running on port ${port}`)
    
    })
