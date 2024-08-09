import { Box, Button, Container, Input, TextField } from '@mui/material';
import classes from './SearchBar.scss';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

const SearchBar: React.FC = () => {
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
    console.log(trimmedQuery);
  };

  return (
    <Container component="main" maxWidth="lg">
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="search"
          name="search"
          placeholder="Search More"
          onChange={handleChange}
          value={query}
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SearchBar;
