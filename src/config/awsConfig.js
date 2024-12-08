import AWS from 'aws-sdk';
import { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY_ID } from './serverConfig.js';

export  const s3=new AWS.S3({
    region: AWS_REGION, 
    accessKeyId:AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY_ID,


});
// import { S3Client } from '@aws-sdk/client-s3';
// import { AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY_ID } from './serverConfig.js';

// // Create the S3 client
// export const s3 = new S3Client({
//     region: AWS_REGION,
//     credentials: {
//         accessKeyId: AWS_ACCESS_KEY_ID,
//         secretAccessKey: AWS_SECRET_ACCESS_KEY_ID,
//     },
// });
