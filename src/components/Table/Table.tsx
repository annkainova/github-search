import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useSearchRepositoriesQuery } from '../../api/getRepo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';

import classes from './Table.module.scss';
import { setChosenRepo } from '../../state/slice/chosenRepo';
import { Outlet, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { setSearchQuery } from '../../state/slice/QuerySlice';
import { Grid } from '@mui/material';

const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Название',
    width: 400,
    sortable: false,
    filterable: false,
  },
  {
    field: 'primaryLanguage',
    headerName: 'Язык',
    width: 130,
    sortable: false,
    filterable: false,
  },
  {
    field: 'forkCount',
    headerName: 'Число форков',
    width: 180,
    type: 'number',
  },
  {
    field: 'stargazerCount',
    headerName: 'Число звезд',
    type: 'number',
    width: 200,
  },
  {
    field: 'updatedAt',
    headerName: 'Дата обновления',
    width: 200,
  },
];

export default function DataTable() {
  const [queryLocal, ,] = useLocalStorage('searchQuery');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchQuery = useSelector(
    (state: RootState) => state.searchQuery.searchQuery
  );

  const { data, error, isLoading } = useSearchRepositoriesQuery({
    queryString: searchQuery,
    first: 20,
  });

  React.useMemo(() => {
    if (queryLocal) {
      dispatch(setSearchQuery(queryLocal));
    }
  }, [dispatch, queryLocal]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  function handleRowClick(params) {
    dispatch(setChosenRepo(params.row));
    navigate(`repo/${params.id}`);

  }

  const repo = data.data.search.edges.map((edge, index) => {
    const {
      name,
      description,
      stargazerCount,
      forkCount,
      primaryLanguage,
      updatedAt,
      licenseInfo,
    } = edge.node;

    return {
      id: index,
      name: name || 'Unknown',
      description: description || 'No description available',
      stargazerCount: stargazerCount,
      forkCount: forkCount,
      primaryLanguage: primaryLanguage ? primaryLanguage.name : 'Unknown',
      updatedAt: new Date(updatedAt).toLocaleDateString(),
      license: licenseInfo ? licenseInfo.name : 'No license',
    };
  });

  console.log('repo', repo);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div className={classes.table}>
          <h2 className={classes.header}>Результаты поиска</h2>
          <DataGrid
            rows={repo}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 25]}
            onRowClick={handleRowClick}
          />
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className={classes.outlet}>
          <Outlet />
        </div>
      </Grid>
    </Grid>
  );
}
