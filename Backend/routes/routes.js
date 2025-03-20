const express = require("express") 
const router = express.Router() ;
const {handleCreateUser, handleSearchUser, handleGetFilteredLawyers, handleIncomingUserPrompt } = require("../controller/userController")
 

router.post("/createuser", handleCreateUser) ; 
router.post("/searchuser", handleSearchUser ) ;
router.get("/getlawyer", handleGetFilteredLawyers) ;
router.post("/prompt", handleIncomingUserPrompt) ;
 
module.exports = router ;