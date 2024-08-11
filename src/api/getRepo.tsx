import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RepositoriesResponse } from '../interface/interfaces';

// Создание API-сервиса для взаимодействия с GitHub GraphQL API
export const clientSecret = import.meta.env.VITE_CLIENT_SECRET || '';
console.log('clientSecret', clientSecret);

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/graphql',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${clientSecret}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchRepositories: builder.query<
      { data: RepositoriesResponse },
      { queryString: string; first: number; after?: string }
    >({
      query: ({ queryString, first, after }) => ({
        url: '',
        method: 'POST',
        body: {
          query: `
            query($queryString: String!, $first: Int!, $after: String) {
              search(query: $queryString, type: REPOSITORY, first: $first, after: $after) {
                edges {
                  node {
                    ... on Repository {
                      name
                      description
                      stargazerCount
                      forkCount
                      primaryLanguage {
                        name
                      }
                      updatedAt
                      licenseInfo {
                        name
                      }
                    }
                  }
                }
                pageInfo {
                  endCursor
                  hasNextPage
                }
              }
            }`,
          variables: { queryString, first, after },
        },
      }),
    }),
  }),
});

export const { useSearchRepositoriesQuery } = githubApi;
