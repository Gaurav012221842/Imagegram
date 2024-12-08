import Post from "../schema/post.js";
export const CreatePost= async (caption ,image,user)=>{
    try{
        // const post=new Post({caption,image,user});
        // await post.save();
        // return post;
        const newPost= await Post.create({caption,image,user});
        return newPost;

    }
    catch(err){
        console.error(err);
        return null;
    }
}
export const findAllPost= async ()=>{
    try{
        const posts=await Post.find().populate("user");
        return posts;
    }
    catch(err){
        console.error(err);
        return null;
    }
}
export const findPostById = async (id)=>{
    try{
        const post=await Post.findById(id).populate("user");
        return post;
    }
    catch(err){
        console.error(err);
        return null;
    }
}
export const findPostByIdDelete= async (id)=>{
    try{
        const post=await Post.findByIdAndDelete(id);
        return post;
    }
    catch(err){
        console.error(err);
        return null;
    }
}