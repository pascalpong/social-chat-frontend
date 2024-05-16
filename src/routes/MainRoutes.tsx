import { lazy, useEffect, useState } from 'react';

// project import
import Loadable from '../components/Loadable';
import { Navigate } from 'react-router-dom';

 
const ComponenetChatDefault = Loadable(lazy(() => import('../components/Chat')));
const PublicChatDefault = Loadable(lazy(() => import('../pages/PublicChat')));
const ChatList = Loadable(lazy(() => import('../pages/ChatList')));

// ==============================|| MAIN ROUTING ||============================== //
const PrivateRoute = ({
  element: Element
}: {
  element: React.ComponentType;
}) => {
  const isLoggedIn = localStorage.getItem('AuthUser') === null ? false : true ;
  return isLoggedIn ? <Element /> : <Navigate to="/" replace />;
};

const MainRoutes = {
  path: '/',
  children: [
    {
      path: 'chat',
      children: [
        {
          path: '',
          element: <PrivateRoute element={ChatList} />,
        },
        {
          path: ':slug',
          element: <PrivateRoute element={PublicChatDefault} />
        }
      ]
    },
    {
      path: 'all',
      children: [
        {
          path: 'component',
          element: <ComponenetChatDefault />
        }
      ]
    },
  ]
};

export default MainRoutes;
