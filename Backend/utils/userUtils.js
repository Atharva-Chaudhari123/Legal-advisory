const {model} = require("../model/userModel") ;

const searchUser = async(email, password)=>{
    const res = await model.findOne({
        $and : [
          {email : {$eq : email} }, 
          {password : {$eq : password}}
        ]}) ;

        console.log(res) ;
        return res!=null ? res : false ;
}

module.exports = {searchUser} ;