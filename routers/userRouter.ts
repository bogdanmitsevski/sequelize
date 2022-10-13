import express from 'express';
import Controller from '../controllers/userController';
const router = express.Router();
router.post('/users', Controller.saveData);
router.get('/allusers', Controller.getAllData);
router.get('/allusers/:id', Controller.getSomeData);
router.post('/posts', Controller.createPost);
router.get('/getposts', Controller.getPost);
router.delete('/delete/:id', Controller.deleteSomeData);
router.put('/put/:id', Controller.putSomeData);

export default router;