const mongoose = require("mongoose") ;

const connectDB =async (url)=>{
    try{
        mongoose.connect(url, {
            useNewUrlParser: true , 
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        })
        console.log("MongoDB connection success")
    }catch(e){
        console.log(e) ;
        
    }

}

module.exports = {connectDB} ;