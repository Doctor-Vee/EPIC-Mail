import { Router } from 'express';
import UserController from '../controllers/users.controller';
import MessageController from '../controllers/messages.controller';
import UserValidator from '../middlewares/users.validator';

const router = Router();

router.post('/auth/signup',
  UserValidator.valCreate,
  UserController.create);
router.post('/auth/login', UserController.login);
router.post('/messages', MessageController.create);
router.get('/messages', MessageController.getAll);
router.get('/messages/:id', MessageController.getOne);

export default router;
