import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

router.post('/auth/signup', UserController.create);

export default router;