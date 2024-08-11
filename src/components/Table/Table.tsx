import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSearchRepositoriesQuery } from '../../api/getRepo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/store';

import classes from './Table.module.scss';
import { setChosenRepo } from '../../state/slice/chosenRepo';
import { Outlet, useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import { setSearchQuery } from '../../state/slice/QuerySlice';
import { CircularProgress, Grid } from '@mui/material';
import { ChosenRepo, RepoInfo } from '../../interface/interfaces';
import { columns } from './TableSetting';

// Компонент DataTable: отвечает за отображение данных в таблице и обработку кликов по строкам
export default function DataTable() {
  const [queryLocal, ,] = useLocalStorage('searchQuery');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchQuery = useSelector(
    (state: RootState) => state.searchQuery.searchQuery
  );

  // Выполнение запроса к API для получения списка репозиториев
  const { data, error, isFetching } = useSearchRepositoriesQuery({
    queryString: searchQuery,
    first: 100,
  });

  // useMemo для обновления поискового запроса при изменении значения из localStorage
  React.useMemo(() => {
    if (queryLocal) {
      dispatch(setSearchQuery(queryLocal));
    }
  }, [dispatch, queryLocal]);

  // Отображение индикатора загрузки, если данные загружаются
  if (isFetching)
    return (
      <div className="loader">
        <CircularProgress />
      </div>
    );

  // Отображение сообщения об ошибке, если произошла ошибка при запросе
  if (error instanceof Error) return <p>Error occurred: {error.message}</p>;

  function handleRowClick(params: { row: ChosenRepo }) {
    dispatch(setChosenRepo(params.row));
    navigate(`repo/${params.row.id}`);
  }

  const repo = data.data.search.edges.map(
    (repo: RepoInfo, index: number): ChosenRepo => {
      console.log('edge', repo);
      const {
        name,
        description,
        stargazerCount,
        forkCount,
        primaryLanguage,
        updatedAt,
        licenseInfo,
      } = repo.node;

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
    }
  );

  console.log('repo', repo);

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <div className={classes.table}>
          <h2 className={classes.header}>Результаты поиска</h2>

          {repo.length ? (
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
          ) : (
            'Репозитории не найдены.'
          )}
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
