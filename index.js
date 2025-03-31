const express=require("express")
const cookieParser=require('cookie-parser')
const bodyParser=require("body-parser")
const cors=require('cors')
const connectDB=require("./config/dbConn")
const mongoose=require("mongoose")

const verify=require("./middleware/verify")

const app=express()

app.use(bodyParser.urlencoded({extended:false}))//parse the url encoded data(form data)body and make the parsed data available under req.body
app.use(cors(
    {
        origin:"http://localhost:5173", //change it with the frontend url
        credentials:true,
    }
))

app.use(express.json())//parse incoming json request bodies and convert them into javascript objects
app.use(express.text())//parse incoming text request and make them available at req.body
app.use(cookieParser())//parse cookie sent by the client in the Cookie header
require('dotenv').config()

connectDB() //connect to the database

app.use("/api/create",require("./routes/register")) //To create new user
app.use("/api/login",require("./routes/login")) //To login the user

app.use(verify) //middleware so only user can access their profile

app.use("/api/getuser",require("./routes/getuser"))



mongoose.connection.once('open',()=>{
    console.log("Database is connected");
    app.listen(3500,()=>{console.log('Server is listening at port 3500')})
})

