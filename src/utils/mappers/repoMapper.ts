import { IRepo, Repo } from 'types/repo';

export const repoMapper = (repos: IRepo[]): Repo[] => {
  return repos.map((repo) => {
    const { name, owner, description, html_url, stargazers_count } = repo ?? {};
    return {
      name: name ?? '-',
      description: description ?? '-',
      url: html_url,
      avatarUrl: owner?.avatar_url ?? '',
      stargazers: stargazers_count ?? 0
    };
  });
};
