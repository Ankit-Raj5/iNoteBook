import mongoose from "mongoose";
const mongoUri = "";
const connectToMongo = () =>{
    console.log("object")
    mongoose.connect(mongoUri, ()=>{
        console.log("Connected to MongoDB");
    });
}

export default connectToMongo;