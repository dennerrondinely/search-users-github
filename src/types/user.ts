export interface IUser {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  public_repos: number;
}

export type User = {
  name: string;
  login: string;
  bio: string;
  avatarUrl: string;
  reposNumber: number;
};
