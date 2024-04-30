import cors from "cors"
import express from "express"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})