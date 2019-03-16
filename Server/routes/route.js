import { Router } from 'express';
import UserController from '../controllers/users.controller';
import MessageController from '../controllers/messages.controller';
import UserValidator from '../middlewares/users.validator';
import MessageValidator from '../middlewares/messages.validator';

const router = Router();

router.post('/auth/signup', UserValidator.create, UserController.create);
router.post('/auth/login', UserValidator.login, UserController.login);
router.post('/messages', MessageValidator.create, MessageController.create);
router.get('/messages/all', MessageController.getAll);
router.get('/messages', MessageController.getReceived);
router.get('/messages/sent', MessageController.getSent);
router.get('/messages/unread', MessageController.getUnread);
router.get('/messages/:id', MessageController.getOne);
router.delete('/messages/:id', MessageController.delete);

export default router;
