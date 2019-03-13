import { Router } from 'express';
import UserController from '../controllers/users.controller';
import MessageController from '../controllers/messages.controller';

const router = Router();

router.post('/auth/signup', UserController.create);
router.post('/auth/login', UserController.login);
router.post('/messages', MessageController.create);
router.get('/messages', MessageController.getAll);
router.get('/messages/:id', MessageController.getOne);

export default router;
