import { Button } from '@mui/material';
import { useNavigate, useRouteError } from 'react-router-dom';
import classes from './ErrorPage.module.scss';

const ErrorPage = () => {
  const error = useRouteError() as Error;
  console.error('mistake!!:', error);

  const navigate = useNavigate();

  const handleClickReturn = () => {
    navigate('/search/1');
  };

  return (
    <div className={classes.error} id="error-page">
      <h1>Oops!</h1>
      <p>Извините, произошла непредвиденная ошибка.</p>
      <p>
        <i>{error && error.message}</i>
      </p>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="medium"
        onClick={handleClickReturn}
      >
        Вернуться на главную
      </Button>
    </div>
  );
};

export default ErrorPage;
