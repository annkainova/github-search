// Интерфейс, представляющий информацию о репозитории, возвращаемую GitHub API
export interface RepoInfo {
  node: {
    name: string;
    description: string;
    stargazerCount: number;
    forkCount: number;
    primaryLanguage: {
      name: string;
    };
    updatedAt: string;
    licenseInfo: {
      name: string;
    };
  };
}

// Интерфейс, представляющий информацию об данных возвращаемых GitHub API
export interface RepositoriesResponse {
  search: {
    edges: RepoInfo[];
  };
}

// Интерфейс, представляющий информацию о выбранном репозитории
export interface ChosenRepo {
  description: string;
  forkCount: number;
  id: number;
  license: string;
  name: string;
  primaryLanguage: string;
  stargazerCount: number;
  updatedAt: string;
}
