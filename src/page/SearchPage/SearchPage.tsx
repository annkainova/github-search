import { Outlet } from 'react-router-dom';
import { useSearchRepositoriesQuery } from '../../api/getRepo';
import SearchBar from '../../components/SearchBar/SearchBar';
import DataTable from '../../components/Table/Table';
import { Grid } from '@mui/material';

const SearchPage = () => {
  const { data, error, isLoading } = useSearchRepositoriesQuery({
    queryString: 'react',
    first: 10,
  });

  console.log('Data:', data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  return (
    <>
      <SearchBar />
      <DataTable />
    </>
  );
};

export default SearchPage;
