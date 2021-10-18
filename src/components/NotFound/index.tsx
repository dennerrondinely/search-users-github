import React, { ReactNode } from 'react';

import * as S from './styles';

export type NotFoundProps = {
  title: string;
  children: ReactNode;
};

const NotFound = ({ title, children }: NotFoundProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TextWrapper>{children}</S.TextWrapper>
    </S.Wrapper>
  );
};

export default NotFound;
