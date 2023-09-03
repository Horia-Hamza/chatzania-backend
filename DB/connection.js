import mongoose from "mongoose"
const connetDB =async()=>{
  return await mongoose.connect(process.env.DBURI)
   .then(res=>console.log(`connect successfully to...${process.env.DBURI}`))
   .catch(err=>console.log(`fail to connect to DB.......... ${err}`))
} 
export default connetDB