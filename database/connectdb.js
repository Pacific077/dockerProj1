import mongoose from "mongoose";
const mongooseUrl = "mongodb+srv://rahmanfaisal516:5P9C3qD60xTWwLTH@cluster0.f4uvwzc.mongodb.net/?retryWrites=true&w=majority"
const connectDb = ()=>{
    try{
        mongoose.connect(mongooseUrl);
        console.log("connected to mongoose")
    }
    catch(er){
        console.log(er);
    }
}

export default connectDb;

