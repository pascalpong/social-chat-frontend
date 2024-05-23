import { lazy } from 'react';
import Loadable from '../components/Loadable';

const LoginDefault = Loadable(lazy(() => import('../pages/Login')));

const LoginRoutes = {
  path: '/',
  element: <LoginDefault />
};

export default LoginRoutes;
