import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RepoInfo } from '../interface/interfaces';

// Создание API-сервиса для взаимодействия с GitHub GraphQL API

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/graphql',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer `);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    searchRepositories: builder.query<
      { data: RepoInfo[] },
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
