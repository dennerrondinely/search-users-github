import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    width: 100%;
    max-width: 60rem;
    margin: 0 auto;
    padding: ${theme.spacings.medium} ${theme.spacings.small} 0;
    display: flex;
  `}
`;
