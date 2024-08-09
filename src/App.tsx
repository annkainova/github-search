import { useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './state/store';
import SearchPage from './page/SearchPage/SearchPage';
import ErrorPage from './page/ErrorPage/ErorrPage';
import Detail from './components/Detail/Detail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'repo/:id',
        element: <Detail />,
      },
    ],
  },
  // {
  /*     path: 'search/:pageNumber',
    element: <SearchScreen />, */
  // errorElement:/*  <ErrorPage />, */
  // children: [
  //   {
  //     path: 'card/:cardId',
  //     element: <DetailedInformation />,
  //   },
  // ],
  // },
  // {
  //   path: '*',
  //   element: <NotFoundPage />,
  // },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
