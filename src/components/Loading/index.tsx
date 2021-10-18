import React from 'react';

import Icon from 'components/Icon';

import { Colors } from 'styles/colors';

export type LoadingProps = {
  size?: number | string;
  loading?: boolean;
  ms?: '500' | '600' | '700' | '800' | '900' | '1000' | '2000' | '3000';
  color?: Colors;
};

import * as S from './styles';

const Loading = ({
  color = 'secondary',
  size = 32,
  ms = '1000',
  loading = false
}: LoadingProps) => (
  <>
    {loading && (
      <S.Wrapper size={size} ms={ms}>
        <Icon icon="loading" color={color} size={size} />
      </S.Wrapper>
    )}
  </>
);

export default Loading;
