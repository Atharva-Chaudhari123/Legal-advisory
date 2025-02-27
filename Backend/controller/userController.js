const { model } = require("../model/userModel");
const {searchUser } = require("../utils/userUtils") ;


const handleCreateUser = async (req, res) => {
    try {
        
        if(searchUser()){
            res.json({message :  "User already exist", status : "User exist"})
            return ;
        }
        await model.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({
            success: true,
            status: "OK",
        });

    } catch (e) {
        res.json({
            success: false,
            status: "Internal server error "
        });
    }
}
module.exports = {handleCreateUser} ;