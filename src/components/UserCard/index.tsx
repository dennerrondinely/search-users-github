import Icon from 'components/Icon';
import React from 'react';

import { User } from 'types/user';

import * as S from './styles';

export type UserCardProps = {
  user: User;
  onRepoClick?: (login: string) => void;
};

const UserCard = ({ user, onRepoClick }: UserCardProps) => {
  const handleClick = () => onRepoClick && onRepoClick(user.login);
  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <S.Avatar src={user.avatarUrl} alt={user.name} />
      </S.AvatarWrapper>
      <S.ContentWrapper>
        <S.Title title={user.name}>{user.name}</S.Title>
        <S.Description title={user.bio}>{user.bio}</S.Description>
        <S.ReposWrapper>
          <S.ReposButton onClick={handleClick}>Ver repositórios</S.ReposButton>
          <S.ReposNumber title="Número de repositórios">
            {user.reposNumber}
            <Icon icon="octocat" color="black" size={16} />
          </S.ReposNumber>
        </S.ReposWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default UserCard;
