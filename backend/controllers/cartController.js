import userModel from "../models/userModel.js";

//add to cart
const addToCart = async (Req,res) => {
    try {
        let userData = await userModel.findOne({_id:req.body.userId})
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

}

//fetch user cart data
const getCart = async (req,res) => {
    
}

export { addToCart, getCart, removeFromCart };

