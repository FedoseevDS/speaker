import { createBrowserRouter } from 'react-router';

import Main from '../pages/main';

export const router = createBrowserRouter([
  {
    Component: Main,
    path: '/',
  },
]);
