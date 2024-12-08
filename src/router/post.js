
import express from 'express';
import { s3uploader } from '../config/multerConfig.js';
import { createPost,getAllPost } from '../controller/postController.js';
const router= express.Router();
router.get('/',s3uploader.single('image'),createPost);
router.get('/',getAllPost);
export default router;