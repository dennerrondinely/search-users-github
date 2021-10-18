import React, { ReactNode } from 'react';

import * as S from './styles';

export type MessageProps = {
  title: string;
  children: ReactNode;
};

const Message = ({ title, children }: MessageProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.TextWrapper>{children}</S.TextWrapper>
    </S.Wrapper>
  );
};

export default Message;
