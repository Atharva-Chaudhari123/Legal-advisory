const mongoose = require("mongoose")

const lawyerSchema = mongoose.Schema({
    id : {
        type : Number ,
        required : true ,
        unique : true ,
        validate : {
            validator : Number.isInteger,
            message : '{VALUE} is not an integer'
        }
    },
    name : {
        type :  String ,
        required : true 
    },
    specialization : {
        type :  String ,
        required : true 
    },
    experience : {
        type : Number ,
        required : true 
    },
    location : {
        type : String,
        required : true ,
    },
    languages : {
        type : String,
        required : true ,
    },
    consultationFee : {
        type : String,
        required : true ,
    },
    successRate : {
        type : String,
        required : true ,
    }

}) ;

const lawyerModel = mongoose.model("lawyers", lawyerSchema, "lawyers") ;

module.exports = {lawyerModel} ;