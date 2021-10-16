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
          <S.ReposNumber>{user.reposNumber}</S.ReposNumber>
        </S.ReposWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default UserCard;
