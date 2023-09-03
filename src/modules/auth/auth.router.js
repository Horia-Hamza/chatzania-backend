import { Router } from "express";
import {Server} from "socket.io"
import userModel from "../../../DB/models/user.model.js"
const router = Router()
router.post('/signup',(req,res)=>{
   console.log("fdfdfd");
   const {phoneNumber,password} = req.body
   const user = new userModel({phoneNumber,password})
   return res.json({message:"done",user})
})
router.get('/:id',async(req,res)=>{
   console.log("get by id");
   const {id} = req.params
   const user =await userModel.findById(id)
   return res.json({message:"done",user})
})
export default router



