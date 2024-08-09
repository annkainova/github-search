import { Button, Container, Grid, TextField } from '@mui/material';
import classes from './SearchBar.module.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../state/slice/QuerySlice';
import { useNavigate } from 'react-router-dom';

const SearchBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = useState('');
  const [queryLocal, setValueLocalStorge] = useLocalStorage('searchQuery');

  useEffect(() => {
    setQuery(queryLocal);
  }, [queryLocal]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    setValueLocalStorge(trimmedQuery);
    dispatch(setSearchQuery(trimmedQuery));
    navigate('/');
  };

  return (
    <div className={classes.wrapper}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <form className={classes.form} onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              // margin="normal"
              fullWidth
              id="search"
              name="search"
              placeholder="Поисковый запрос"
              onChange={handleChange}
              value={query}
              size="small"
              sx={{
                input: {
                  background: 'white',
                  borderRadius: '4px',
                },
              }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="small"
            >
              Искать
            </Button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default SearchBar;
