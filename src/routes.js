import { Router } from 'express';

import usersMiddleware from './app/middlewares/users';

import UserController from './app/controllers/UserController';
import WebsiteController from './app/controllers/WebsiteController';
import SuiteController from './app/controllers/SuiteController';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({ msg: 'hello world' });
});

routes.use(usersMiddleware);

routes.get('/users', UserController.show);

routes.get('/websites', WebsiteController.show);

routes.get('/suites', SuiteController.show);

export default routes;
