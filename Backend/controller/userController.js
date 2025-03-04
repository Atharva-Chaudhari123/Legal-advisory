const { model } = require("../model/userModel");
const {searchUser } = require("../utils/userUtils") ;
const { lawyerModel } = require("../model/lawyerModel") ;


const handleCreateUser = async (req, res) => {
    try {
        doc = await searchUser(req.body.email, req.body.password)
        // return res.json(doc) ;
        if(doc){
            res.json({message :  "User already exist", status : "Exist"})
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
            message : "New user created successufully"
        });

    } catch (e) {
        res.json({
            success: false,
            status: "Bad",
            message :  "New user creation FAILED!"
        });
    }
}

const handleSearchUser = async(req, res)=>{
    console.log(req.email, " \n", req.password)
    doc = await searchUser(req.body.email , req.body.password)  ;
    console.log(doc)
    if(doc == false ) {
        return res.json({
            message  :  "User not Found",
            status  : "Bad"
        })
    }else{
        return res.json({
            message : "User found" ,
            status : "OK",
            userName : doc.name,
            email : doc.email
        })
    }

}

const handleGetFilteredLawyers = async(req, res) =>{
    try{
        const law = req.query.law ;
        const lang = req.query.lang ;
        console.log(law, lang) ;
        const arr = await lawyerModel.find({
            $and : [
                {specialization : {$eq : law } },
                {languages : {$eq : lang}},
            ]
        });
        
        res.json(arr) ;
    }catch(e){
        console.log(e) ;
        res.json({error : "error fetching lawyers"}) ;
    }
}



module.exports = {handleCreateUser, handleSearchUser, handleGetFilteredLawyers} ;