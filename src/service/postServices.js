import { CreatePost  } from "../repository/postRepository.js";
export const CreatePostService = async (CreatePostObject)=>{
    const caption =CreatePostObject.caption;
    const image = CreatePostObject.image;
    // const user = CreatePostObject.user;
    const post=await CreatePost(caption,image);
    return post;

    // try{
    //     const response = await fetch('/api/posts', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(CreatePostObject)
    //     });
    //     return await response.json();
    // }
    // catch(err){
    //     console.error(err);
    //     return null;
    // }

    //Take the image of the post and upload to AWS write code
    // const image = CreatePostObject.image;
    // const uploadData = new FormData();
    // uploadData.append('image', image);
    // const response = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: uploadData
    // });
    // const imageUrl = await response.json();

    // CreatePostObject.image = imageUrl.url;


    //Make the API call to create post in the database
    // const response = await fetch('/api/posts', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(CreatePostObject)
    // });

    // return await response.json();
    //end of CreatePost function


    //Get the url of the image from image response
    

    //Create a post within the caption and the image url using the db repository

    // Return the post object

}
