import { IRepo } from 'types/repo';
import { IUser } from 'types/user';
import { http } from './http';

const api = {
  getUser: (userName: string) => http<IUser>(`users/${userName}`),
  getRepos: (userName: string) => http<IRepo[]>(`users/${userName}/repos`),
  getStarred: (userName: string) => http<IRepo[]>(`users/${userName}/starred`)
};

export default api;
