const express = require("express") 
const router = express.Router() ;
const {handleCreateUser, handleSearchUser, handleGetFilteredLawyers } = require("../controller/userController")
 

router.post("/createuser", handleCreateUser) ; 
router.post("/searchuser", handleSearchUser ) ;
router.get("/getlawyer", handleGetFilteredLawyers) ;

module.exports = router ;