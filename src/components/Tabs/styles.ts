import styled, { css } from 'styled-components';

type HeaderItemProps = {
  active: boolean;
};

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  `}
`;

export const Header = styled.ul`
  list-style: none;
  display: flex;
`;

export const HeaderItem = styled.li<HeaderItemProps>`
  position: relative;
  cursor: pointer;
  transform: translateY(0.1rem);
  ${({ theme, active }) => css`
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    color: ${active ? theme.colors.secondary : theme.colors['gray-bright']};
    gap: ${theme.spacings.small};

    &::before {
      content: '';
      height: 0.6rem;
      width: 0.6rem;
      border-radius: 0.3rem;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: ${theme.spacings.minimal};
      transition: background-color 0.3s;
      background-color: ${active
        ? theme.colors.secondary
        : theme.colors.transparent};
    }
  `}
`;

export const TabPane = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.medium} 0;
  `}
`;
