import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>404 - Page not found</h1>
    <p>Sorry, the page you are looking for does not exist.</p>

    <Link to="/">
      <Button>Return to main</Button>
    </Link>
  </div>
);

export default NotFoundPage;
