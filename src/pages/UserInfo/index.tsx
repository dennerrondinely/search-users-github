import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';

import RepoCard from 'components/RepoCard';
import NotFound from 'components/NotFound';
import Tabs, { TabPane } from 'components/Tabs';

import { Repo } from 'types/repo';
import { ErrorMessage } from 'types/error';
import { repoMapper } from 'utils/mappers/repoMapper';
import api from 'services/api';

import * as S from './styles';
import Loading from 'components/Loading';

const defaultAvatar =
  'https://avatars.githubusercontent.com/u/66794148?s=64&v=4';

const UserInfo = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [starred, setStarred] = useState<Repo[]>([]);
  const [reposError, setReposError] = useState(false);
  const [starredError, setStarredError] = useState(false);
  const [reposLoading, setReposLoading] = useState(false);
  const [starredLoading, setStarredLoading] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const getData = async () => {
      setReposError(false);
      setReposLoading(true);

      try {
        const rawRepos = await api.getRepos(id);

        if (rawRepos.message && rawRepos.message === ErrorMessage.NOT_FOUND) {
          setReposError(true);
        } else {
          const serializedRepo = repoMapper(rawRepos);
          setRepos(serializedRepo);
        }
        setReposLoading(false);
      } catch (error) {
        setReposLoading(false);

        setReposError(true);
      }
    };
    getData();
  }, [id]);

  useEffect(() => {
    const getData = async () => {
      setStarredError(false);
      setStarredLoading(true);

      try {
        const rawStarred = await api.getStarred(id);

        if (
          rawStarred.message &&
          rawStarred.message === ErrorMessage.NOT_FOUND
        ) {
          setStarredError(true);
        } else {
          const serializedStarred = repoMapper(rawStarred);

          setStarred(serializedStarred);
        }
        setStarredLoading(false);
      } catch (error) {
        setStarredLoading(false);

        setStarredError(true);
      }
    };
    getData();
  }, [id]);

  const loading = useMemo(() => reposLoading || starredLoading, [
    reposLoading,
    starredLoading
  ]);

  return (
    <S.Wrapper>
      {loading && (
        <S.LoadingWrapper>
          <Loading loading={loading} size={60} />
        </S.LoadingWrapper>
      )}
      {!loading && (
        <Tabs activeTab="Repos">
          <TabPane name="Repos" key={1}>
            {reposError && <MessageDefault />}
            {
              <S.Grid>
                {!reposError &&
                  repos.length &&
                  repos.map((repo) => (
                    <RepoCard
                      repo={{
                        ...repo,
                        avatarUrl: defaultAvatar
                      }}
                      key={repo.name}
                    />
                  ))}
              </S.Grid>
            }
          </TabPane>
          <TabPane name="Starred" key={1}>
            {starredError && <MessageDefault />}
            {!starredError && starred.length && (
              <S.Grid>
                {starred.map((repo) => (
                  <RepoCard repo={repo} key={repo.name} />
                ))}
              </S.Grid>
            )}
          </TabPane>
        </Tabs>
      )}
    </S.Wrapper>
  );
};

const MessageDefault = () => (
  <NotFound title="Desculpe, nenhum resultado encontrado :(">
    <p>O Usuário que você pesquisou</p>
    <p>infelizmente não foi encontrado ou não existe.</p>
  </NotFound>
);

export default UserInfo;
