import Icon from 'components/Icon';
import React from 'react';
import { Repo } from 'types/repo';

import * as S from './styles';

export type RepoCardProps = {
  repo: Repo;
};

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <S.Avatar src={repo.avatarUrl} alt={repo.name} />
      </S.AvatarWrapper>
      <S.ContentWrapper>
        <S.Title title={repo.name}>{repo.name}</S.Title>
        <S.Description title={repo.description}>
          {repo.description}
        </S.Description>
        <S.InfoWrapper>
          <S.LinkButton href={repo.url} target="_blank">
            Ver no github
          </S.LinkButton>
          <S.Stargazers title="Número de estrelas">
            {repo.stargazers}
            <Icon icon="star" color="yellow" size={14} />
          </S.Stargazers>
        </S.InfoWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default RepoCard;
