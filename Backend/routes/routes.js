const express = require("express") 
const router = express.Router() ;
const {handleCreateUser } = require("../controller/userController")
 

router.post("/createuser", handleCreateUser) ; //yet to implement


module.exports = router ;