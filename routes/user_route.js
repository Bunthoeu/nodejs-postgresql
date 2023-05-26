const express = require("express");
const controllerUser=require("../controller/controller")

const userRouter=express.Router()
userRouter.get("/",controllerUser.getUser)
userRouter.get("/:id",controllerUser.getUserById)
userRouter.post("/",controllerUser.createUser)
userRouter.put("/:id",controllerUser.uqdateUser)
userRouter.delete("/:id",controllerUser.delectUser)

module.exports=userRouter;