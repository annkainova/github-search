import { useState } from 'react';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './state/store';
import SearchPage from './page/SearchPage/SearchPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />,
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
