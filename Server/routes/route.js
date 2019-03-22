import { Router } from 'express';
import UserController from '../controllers/users.controller';
import MessageController from '../controllers/messages.controller';
import GroupController from '../controllers/groups.controllers';
import GroupMemberController from '../controllers/groupmembers.controllers';
import UserValidator from '../middlewares/users.validator';
import MessageValidator from '../middlewares/messages.validator';
import GroupValidator from '../middlewares/groups.validator';
import RouteValidator from '../middlewares/routes.validator';
import auth from '../middlewares/auth';

const router = Router();

router.post('/auth/signup', UserValidator.create, UserController.create);
router.post('/auth/login', UserValidator.login, UserController.login);
router.post('/messages', MessageValidator.create, MessageController.create);
router.get('/messages/all', MessageController.getAll);
router.get('/messages/:id/inbox', RouteValidator.id, MessageController.getInbox);
router.get('/messages/:id/sent', RouteValidator.id, MessageController.getSent);
router.get('/messages/:id/unread', RouteValidator.id, MessageController.getUnread);
router.get('/messages/:id', RouteValidator.id, MessageController.getOne);
router.delete('/messages/:id', RouteValidator.id, MessageController.delete);
router.post('/groups', GroupValidator.create, GroupController.create);
router.get('/groups', GroupController.getAll);
router.delete('/groups/:id', RouteValidator.id, GroupController.delete);
router.post('/groupmembers', GroupMemberController.create);
router.delete('/groupmembers/:id', RouteValidator.id, GroupMemberController.delete);

export default router;
