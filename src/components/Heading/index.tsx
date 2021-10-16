import React from 'react';
import { Colors } from 'styles/colors';

import * as S from './styles';

export type HeadingProps = {
  children: React.ReactNode;
  color?: Colors;
  size?: 'small' | 'medium' | 'huge';
};

const Heading = ({
  children,
  color = 'white',
  size = 'medium'
}: HeadingProps) => (
  <S.Wrapper color={color} size={size}>
    {children}
  </S.Wrapper>
);

export default Heading;
