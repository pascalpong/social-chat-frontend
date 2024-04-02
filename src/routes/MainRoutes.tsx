import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

const PublicChatDefault = Loadable(lazy(() => import('../pages/PublicChat')));
const ComponenetChatDefault = Loadable(lazy(() => import('../components/Chat')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  // element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <PublicChatDefault/>
    },
    {
      path: 'chat',
      children: [
        {
          path: 'default',
          element: <PublicChatDefault />
        },
        {
          path: 'component',
          element: <ComponenetChatDefault />
        }
      ]
    },
  ]
};

export default MainRoutes;
