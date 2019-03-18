import { Router } from 'express';
import UserController from '../controllers/users.controller';
import MessageController from '../controllers/messages.controller';
import UserValidator from '../middlewares/users.validator';
import MessageValidator from '../middlewares/messages.validator';
import auth from '../middlewares/auth';

const router = Router();

router.post('/auth/signup', UserValidator.create, UserController.create);
router.post('/auth/login', UserValidator.login, UserController.login);
router.post('/messages', MessageValidator.create, MessageController.create);
router.get('/messages/all', MessageController.getAll);
router.get('/messages', auth, MessageController.getReceived);
router.get('/messages/sent', auth, MessageController.getSent);
router.get('/messages/unread', auth, MessageController.getUnread);
router.get('/messages/:id', auth, MessageController.getOne);
router.delete('/messages/:id', auth, MessageController.delete);

export default router;
