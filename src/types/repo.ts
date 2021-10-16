export interface IOwner {
  avatar_url: string;
}

export interface IRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  owner: IOwner;
}

export type Repo = {
  name: string;
  description: string;
  url: string;
  stargazers: number;
  avatarUrl: string;
};
