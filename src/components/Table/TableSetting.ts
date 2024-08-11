import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef[] = [
  {
    field: 'name',
    headerName: 'Название',
    width: 360,
    sortable: false,
    filterable: false,
  },
  {
    field: 'primaryLanguage',
    headerName: 'Язык',
    width: 150,
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
    width: 180,
  },
  {
    field: 'updatedAt',
    headerName: 'Дата обновления',
    width: 180,
  },
];
