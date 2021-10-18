import styled, { keyframes } from 'styled-components';
import { LoadingProps } from '.';

type WrapperProps = Pick<LoadingProps, 'ms' | 'size'>;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  animation-name: ${spin};
  animation-duration: ${({ ms }) => ms}ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  display: inline-flex;
`;
