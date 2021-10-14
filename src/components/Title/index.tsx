import React from 'react';

import * as S from './styles';

export type TitleProps = {
  title: string;
};

const Title = ({ title }: TitleProps) => <S.Wrapper>{title}</S.Wrapper>;

export default Title;
