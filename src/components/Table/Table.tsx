import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { idID } from '@mui/material/locale';
import { useSearchRepositoriesQuery } from '../../api/getRepo';
import { Repo } from '../../interface/interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import { Container, Grid } from '@mui/material';

import classes from './Table.module.scss';

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
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 200,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

export default function DataTable() {
  const searchQuery = useSelector(
    (state: RootState) => state.searchQuery.searchQuery
  );

  const { data, error, isLoading } = useSearchRepositoriesQuery({
    queryString: searchQuery,
    first: 20,
  });

  console.log('Data:', data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  const rows = [];

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
      name: name || 'Unknown', // Заменить null значением по умолчанию
      description: description || 'No description available',
      stars: stargazerCount,
      forks: forkCount,
      language: primaryLanguage ? primaryLanguage.name : 'Unknown',
      updatedAt: new Date(updatedAt).toLocaleDateString(),
      license: licenseInfo ? licenseInfo.name : 'No license',
    };
  });

  console.log('repo', repo);

  return (
    <Grid container>
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
          />
        </div>
      </Grid>
    </Grid>
  );
}
