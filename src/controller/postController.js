
import { CreatePostService } from "../service/postServices.js";
export async function createPost(req,res){
    const post=await CreatePostService({
        caption: req.body.caption,
        image:req.body.image,
        // user: req.user._id
    });
    return res.status(201).json({
        success: true,
        message: "Post created successfully",
        data: post
    });
}
export async function getAllPost(req, res){
    return res.status(501).json({success: false, message: "No post found"});
}