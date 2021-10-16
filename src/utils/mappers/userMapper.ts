import { IUser, User } from 'types/user';

export const userMapper = (user?: IUser): User => {
  const { bio, name, avatar_url, public_repos } = user ?? {};
  return {
    name: name ?? '-',
    bio: bio ?? '-',
    avatarUrl: avatar_url ?? '',
    reposNumber: public_repos ?? 0
  };
};
