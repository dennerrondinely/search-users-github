import styled, { css } from 'styled-components';
import { IconProps } from '.';

type WrapperProps = Pick<IconProps, 'size' | 'color'>;

export const Container = styled.svg<WrapperProps>`
  ${({ size }) => css`
    height:${size}px};
    width:${size}px};
  `}
  height: ${({ size }) => `${size}px`};
  width: ${({ size }) => `${size}px`};
  stroke: ${({ color, theme }) => !!color && theme.colors[color]};
  fill: ${({ color, theme }) => !!color && theme.colors[color]};
`;
