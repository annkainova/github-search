import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import classes from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <div className={classes.notFound}>
    <h1>404 - Страница не найдена</h1>
    <p>Извините, страница, которую вы ищете, не существует.</p>

    <Link to="/">
      <Button type="submit" variant="contained" color="primary" size="medium">
        Вернуться на главную
      </Button>
    </Link>
  </div>
);

export default NotFoundPage;
