import { Button } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error('mistake!!:', error);

  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate('/search/1');
  };

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error && error.message}</i>
      </p>
      <Button>Return to main</Button>
    </div>
  );
};

export default ErrorPage;
