import { IUser } from 'types/user';
import { http } from './http';

const api = {
  getUser: (userName: string) => http<IUser>(`users/${userName}`)
};

export default api;
