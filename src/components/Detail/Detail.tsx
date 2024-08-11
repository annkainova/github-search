import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { Chip, Grid } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import classes from './Detail.module.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { amber } from '@mui/material/colors';

const Detail = () => {
  const navigate = useNavigate();
  const chosenRepo = useSelector(
    (state: RootState) => state.chosenRepo.chosenRepo
  );

  useEffect(() => {
    if (!chosenRepo) {
      navigate('/search');
    }
  }, [chosenRepo, navigate]);

  return (
    <div className={classes.detail}>
      <h3 className={classes.detail__name}>{chosenRepo?.name}</h3>

      {chosenRepo && (
        <div className={classes.detail__info}>
          <Chip
            color="primary"
            variant="filled"
            size="medium"
            label={chosenRepo?.primaryLanguage}
          />
          <div className={classes.star}>
            <StarIcon sx={{ color: amber[500] }} />
            {chosenRepo?.stargazerCount || 0}
          </div>
        </div>
      )}

      <p className={classes.detail__description}>{chosenRepo?.description}</p>
    </div>
  );
};

export default Detail;
