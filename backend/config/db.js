import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://aarruwanthie:JHnRNIljnWmoJzFg@cluster0.rju77ok.mongodb.net/peppers-and-plates').then(()=>console.log('DB Connected'));
}