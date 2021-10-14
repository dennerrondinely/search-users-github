import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.grid.container};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.small};
  `}
`;

export const LogoWrapper = styled.div`
  width: 40rem;
  height: 40rem;
`;
