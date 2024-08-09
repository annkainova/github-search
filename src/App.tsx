import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Box } from '@mui/material';
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
  const [count, setCount] = useState(0);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
