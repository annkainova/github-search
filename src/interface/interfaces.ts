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
  forkCount: number;
  id: number;
  license: string;
  name: string;
  primaryLanguage: string;
  stargazerCount: number;
  updatedAt: string;
}
