import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import validator from 'validator';
import userModel from "../models/userModel.js";

//login
const loginUser = async (req,res) =>{
    
}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register
const registerUser = async (req,res) => {
    const {name,password,email} = req.body;
    try {
        const exists = await userModel.findOne({email});
        if (exists) {
            return res.json({success:false,message:"User already exists!"})
        }

        if (!validator.isEmail(email)) {
            return res.json({success:false,message:"Please enter a valid email!"})
        }

        if (password.length<8) {
            return res.json({success:false,message:"Please enter a strong password!"})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success:true,token});

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"An unexpected error occurred during registration. Please try again later!"})
    }
}


export { loginUser, registerUser };
