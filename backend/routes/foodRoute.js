import express from "express";
import multer from "multer";
import { addFood } from "../controllers/foodController.js";

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

foodRouter.post("/add",upload.single("image"),addFood)


export default foodRouter;