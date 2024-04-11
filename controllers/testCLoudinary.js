import getDataUri from "../utils/Datauri.js"
import cloudinary from "cloudinary"

const testcloudinary =async (req,res,next)=>{
    console.log("reqbody")
    console.log(req.body)
    console.log("reqbod y")
    const fileuri = getDataUri(req.file)
    console.log("req.file",req.file)
    // console.logk("filuri",fileuri)
    // const mycloud= await cloudinary.v2.uploader.upload(fileuri.content);
    // console.log(mycloud)
    res.send(req.file)
}

export default testcloudinary