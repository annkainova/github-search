export interface RepoInfo {
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
}

export interface ChosenRepo {
  description: string;
  forks: number;
  id: number;
  language: string;
  license: string;
  name: string;
  stars: number;
  updatedAt: string;
}
