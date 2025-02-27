const mongoose = require("mongoose") ;


const userSchema = mongoose.Schema({
    name : {
        type:  String , 
        required: true ,

    },
    email :  {
        type : String ,
        required : true , 
        unique : true
    }, 
    password : {
        type : String ,
        required : true ,
    },
    chatreference : [{
        type: mongoose.Schema.Types.ObjectId,
        ref :  "Chat"
    }]

}, {timestamps : true}) ;

const model = mongoose.model("users", userSchema, "users") ;

module.exports = {model} ;