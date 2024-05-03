import cors from "cors"
import 'dotenv/config'
import express from "express"
import { connectDB } from "./config/db.js"
import cartRouter from "./routes/cartRoute.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})