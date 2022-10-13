import express from 'express';
import Controller from '../controllers/userController';
const router = express.Router();

router.post('/users', Controller.getData);

export default router;