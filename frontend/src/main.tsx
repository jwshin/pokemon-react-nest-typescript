import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Pokemon from './Pokemon';
import { list } from './api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/list/0" replace={true} />,
  },
  {
    path: '/list/:page',
    element: <Pokemon />,
    loader: ({ params }) => {
      return list(params.page);
    },
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
