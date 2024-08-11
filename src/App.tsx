import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './state/store';
import SearchPage from './page/SearchPage/SearchPage';
import ErrorPage from './page/ErrorPage/ErorrPage';
import Detail from './components/Detail/Detail';
import NotFoundPage from './page/notFoundPage/NotFoundPage';
import WelcomePage from './page/WelcomePage/WelcomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search',
    element: <SearchPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'repo/:id',
        element: <Detail />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
