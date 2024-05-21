import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

// render - login
const LoginDefault = Loadable(lazy(() => import('../pages/Login')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: ':slug?',
      element: <LoginDefault />
    }
  ]
};

export default LoginRoutes;
