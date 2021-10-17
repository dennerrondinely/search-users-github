import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import RepoCard from 'components/RepoCard';
import Tabs, { TabPane } from 'components/Tabs';

import api from 'services/api';
import { Repo } from 'types/repo';
import { repoMapper } from 'utils/mappers/repoMapper';

import * as S from './styles';

const UserInfo = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [starred, setStarred] = useState<Repo[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getData = async () => {
      const [rawRepos, rawStarred] = await Promise.all([
        api.getRepos(id),
        api.getStarred(id)
      ]);

      const serializedRepo = repoMapper(rawRepos);
      const serializedStarred = repoMapper(rawStarred);

      setStarred(serializedStarred);
      setRepos(serializedRepo);
    };
    getData();
  }, [id]);
  return (
    <S.Wrapper>
      <Tabs activeTab="Repos">
        <TabPane name="Repos" key={1}>
          <S.Grid>
            {repos.map((repo) => (
              <RepoCard
                repo={{
                  ...repo,
                  avatarUrl:
                    'https://avatars.githubusercontent.com/u/66794148?s=64&v=4'
                }}
                key={repo.name}
              />
            ))}
          </S.Grid>
        </TabPane>
        <TabPane name="Starred" key={1}>
          <S.Grid>
            {starred.map((repo) => (
              <RepoCard repo={repo} key={repo.name} />
            ))}
          </S.Grid>
        </TabPane>
      </Tabs>
    </S.Wrapper>
  );
};

export default UserInfo;
