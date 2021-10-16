import React from 'react';

import { User } from 'types/user';

import * as S from './styles';

export type CardUserProps = {
  user: User;
};

const CardUser = ({ user }: CardUserProps) => {
  return (
    <S.Wrapper>
      <S.AvatarWrapper>
        <S.Avatar src={user.avatarUrl} alt={user.name} />
      </S.AvatarWrapper>
      <S.ContentWrapper>
        <S.Title>{user.name}</S.Title>
        <S.Description>{user.bio}</S.Description>
        <S.ReposWrapper>
          <S.ReposTitle>Repositorios</S.ReposTitle>
          <S.ReposNumber>{user.reposNumber}</S.ReposNumber>
        </S.ReposWrapper>
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default CardUser;
