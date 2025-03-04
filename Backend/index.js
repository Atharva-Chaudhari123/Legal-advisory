const express = require("express") ; 
const app = express() ;
const dotenv = require("dotenv") ; 
const router = require("./routes/routes.js") ;
const {connectDB} = require("./config/connection.js")
const cors =require("cors")

app.use(express.json()) ;
app.use(express.urlencoded({extended : true})) ;


//handling cors
app.use(cors()) ;

//load dotenv
dotenv.config() ;
const port = process.env.PORT ;

//database connection 
connectDB(process.env.CONNECTION) ;

app.get("/", (req, res)=>{
    console.log("Hello there") ;
    res.send("Hello there") ; 
    res.end() ; 

}) ;

app.use("/user",router) ;
app.use("/filter", router)

app.listen(port , (err)=>{
    if(!err){    
        console.log("Server started successfully at port ", port) ;
    }else{
        console.log("Error starting server") ;
    }
})























