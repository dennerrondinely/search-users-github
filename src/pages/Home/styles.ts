import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 60rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: ${theme.spacings.small};
  `}
`;

export const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
