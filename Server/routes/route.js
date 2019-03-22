import { Router } from 'express';
import UserController from '../controllers/users.controller';
import MessageController from '../controllers/messages.controller';
import GroupController from '../controllers/groups.controllers';
import UserValidator from '../middlewares/users.validator';
import MessageValidator from '../middlewares/messages.validator';
import GroupValidator from '../middlewares/groups.validator';
import auth from '../middlewares/auth';

const router = Router();

router.post('/auth/signup', UserValidator.create, UserController.create);
router.post('/auth/login', UserValidator.login, UserController.login);
router.post('/messages', MessageValidator.create, MessageController.create);
router.get('/messages/all', MessageController.getAll);
router.get('/messages/:id/inbox', MessageController.getInbox);
router.get('/messages/:id/sent', MessageController.getSent);
router.get('/messages/:id/unread', MessageController.getUnread);
router.get('/messages/:id', MessageController.getOne);
router.delete('/messages/:id', MessageController.delete);
router.post('/groups', GroupValidator.create, GroupController.create);
router.get('/groups', GroupController.getAll);
router.delete('/groups/:id', GroupController.delete);

export default router;
