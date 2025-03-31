const express=require("express")
const router=express.Router()
const getUserController=require("../controller/getUserController")


router.route("/").get(getUserController.handleUser)

module.exports=router