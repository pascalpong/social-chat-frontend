import { lazy } from 'react';
import Loadable from '../components/Loadable';

const DashboardDefault = Loadable(lazy(() => import('../pages/Dashboard')));

const LoginRoutes = {
  path: '/',
  children: [
    {
      path: 'dashboard',
      element: <DashboardDefault />
    }
  ]
};

export default LoginRoutes;
