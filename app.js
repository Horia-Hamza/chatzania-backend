import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import {Server} from 'socket.io'
import connetDB from './DB/connection.js'
const __dirname =path.dirname(fileURLToPath(import.meta.url))
dotenv.config({path:path.join(__dirname,'./config/.env')})
import authRouter from './src/modules/auth/auth.router.js'
const app = express()

const port = process.env.PORT || 5000
const baseUrl = process.env.BASEURL

//convert Buffer Data
app.use(express.json())
app.use(express.urlencoded({extended: false }))
app.use(cors({}))
app.use(`${baseUrl}/auth`, authRouter)
app.use('*', (req, res, next) => {
   res.json({ message: "In-valid Routing" })
})

const httpServer = app.listen(port,()=>console.log(`Running Successfully on port.....${port}`))
const io = new Server(httpServer,{
   cors:"*"
})


io.on('connection',(socket)=>{
   console.log(socket.id);
   console.log('A user connected');
   socket.emit('welcome', 'Welcome to the server!');
})


// connetDB()