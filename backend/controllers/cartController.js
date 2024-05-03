import userModel from "../models/userModel.js";

//add to cart
const addToCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1;
        } else {
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Successfully added to the cart!"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error adding to the cart!"})
    }
}

//remove items
const removeFromCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0) {
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Successfully removed from the cart!"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error removing from the cart!"})
    }
}

//fetch user cart data
const getCart = async (req,res) => {
    
}

export { addToCart, getCart, removeFromCart };

