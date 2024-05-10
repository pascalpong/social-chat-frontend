import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';
// import AuthLayout from '../layout/AuthLayout';

// render - login
const LoginDefault = Loadable(lazy(() => import('../pages/Login')));
// const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  // element: <AuthLayout />,
  children: [
    {
      path: '/',
      element: <LoginDefault />
    },
    // {
    //   path: 'register',
    //   element: <AuthRegister />
    // }
  ]
};

export default LoginRoutes;
