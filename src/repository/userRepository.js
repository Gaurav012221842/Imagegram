import user from "../schema/user.js";
export const findUserByEmail= async (email)=>{
    try{
        const user=await user.findOne({email});
        return user;
    }
    catch(err){
        console.error(err);
        return null;
    }
}
export const findUser= async ()=>{
    try{
        const users=await user.find();
        return users;
    }
    catch(err){
        console.error(err);
        return null;
    }
}