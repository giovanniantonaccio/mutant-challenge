import { Router } from 'express';

import usersMiddleware from './app/middlewares/users';

import UserController from './app/controllers/UserController';
import WebsiteController from './app/controllers/WebsiteController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ msg: 'hello world' });
});

routes.use(usersMiddleware);

routes.get('/users', UserController.show);

routes.get('/websites', WebsiteController.show);

export default routes;
