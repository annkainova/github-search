import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { Chip, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import classes from './Detail.module.scss';

const Detail = () => {
  const chosenRepo = useSelector(
    (state: RootState) => state.chosenRepo.chosenRepo
  );

  console.log('chosenRepo', chosenRepo);
  return (
    <div className={classes.detail}>
      <h2>{chosenRepo?.name}</h2>

      {/* {chosenRepo && ( */}
      <div>
        <Chip
          color="primary"
          variant="filled"
          size="medium"
          label={chosenRepo?.primaryLanguage}
        />
        <p>
          <StarIcon />
          {chosenRepo?.stargazerCount || 0}
        </p>
      </div>
      {/* )} */}

      <p>{chosenRepo?.description}</p>
    </div>
  );
};

export default Detail;
