import AWS from 'aws-sdk';
 import serverConfig from './serverConfig.js'
const s2=new AWS.S3({
    region: 'us-east-1',
    accessKeyId: serverConfig.AWS.ACCESS_KEY_ID,
    secretAccessKey: serverConfig.AWS.SECRET_ACCESS_KEY_ID,
}

);