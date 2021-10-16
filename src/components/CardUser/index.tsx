import React from 'react';

import { User } from 'types/user';

import * as S from './styles';

export type CardUserProps = {
  user: User;
  onRepoClick?: (login: string) => void;
};

const CardUser = ({ user, onRepoClick }: CardUserProps) => {
  const handleClick = () => onRepoClick && onRepoClick(user.login);
  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <S.Avatar src={user.avatarUrl} alt={user.name} />
      </S.AvatarWrapper>
      <S.ContentWrapper>
        <S.Title>{user.name}</S.Title>
        <S.Description>{user.bio}</S.Description>
        <S.ReposWrapper>
          <S.ReposButton onClick={handleClick}>Ver repositórios</S.ReposButton>
          <S.ReposNumber>{user.reposNumber}</S.ReposNumber>
        </S.ReposWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default CardUser;
