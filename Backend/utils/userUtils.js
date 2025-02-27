const {model} = require("../model/userModel") ;

const searchUser = async(email, password)=>{
    const res = await model.findOne({
        $and : [
          {email : {$eq : email} }, 
          {password : {$eq : password}}
        ]}) ;
        return res ? true : false ;
}

module.exports = {searchUser} ;