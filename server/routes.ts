import { Application, Router } from 'express';
import UserController from './controllers/UserController';

export default function setRoutes(app: Application) {
  const router: Router = Router();

  // const catCtrl = new CatCtrl();
  const user = new UserController();

  // Users
  router.route('/login').post(user.login);
  router.route('/register').post(user.register);
  // router.route('/users').get(userCtrl.getAll);
  // router.route('/users/count').get(userCtrl.count);
  // router.route('/user').post(userCtrl.insert);
  // router.route('/user/:id').get(userCtrl.get);
  // router.route('/user/:id').put(userCtrl.update);
  // router.route('/user/:id').delete(userCtrl.delete);

  // Apply the routes to our application with the prefix /api
  app.use('/api', router);
}
