import { baseApiGithub } from 'env';
import { IError } from 'types/error';
import { IRepo } from 'types/repo';
import { IUser } from 'types/user';
import { http } from './http';

const api = {
  getUser: (userName: string) =>
    http<IUser & IError>(`${baseApiGithub}users/${userName}`),
  getRepos: (userName: string) =>
    http<IRepo[] & IError>(`${baseApiGithub}users/${userName}/repos`),
  getStarred: (userName: string) =>
    http<IRepo[] & IError>(`${baseApiGithub}users/${userName}/starred`)
};

export default api;
