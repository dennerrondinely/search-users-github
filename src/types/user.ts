export interface IUser {
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
}

export type User = {
  name: string;
  bio: string;
  avatarUrl: string;
  reposNumber: number;
};
