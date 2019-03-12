import { Router } from 'express';
import UserController from '../controllers/user.controller';

const router = Router();

router.post('/auth/signup', UserController.create);
router.post('/auth/login', UserController.login);

export default router;
