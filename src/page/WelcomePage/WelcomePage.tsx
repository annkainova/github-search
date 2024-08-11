import SearchBar from '../../components/SearchBar/SearchBar';
import classes from './WelcomePage.module.scss';

const WelcomePage = () => {
  return (
    <div>
      {' '}
      <SearchBar />
      <div className={classes.welcome}>
        <h1 className="h1">Добро пожаловать</h1>
      </div>
    </div>
  );
};

export default WelcomePage;
