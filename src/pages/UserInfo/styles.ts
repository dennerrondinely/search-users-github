import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  ${({ theme }) => css`
    gap: ${theme.spacings.small};
  `}
`;
