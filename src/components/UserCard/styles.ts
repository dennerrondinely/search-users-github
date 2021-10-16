import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  width: 100%;
  max-width: 34rem;
`;

export const AvatarWrapper = styled.div`
  border-radius: 1rem;
  overflow: hidden;
  height: 9rem;
  width: 9rem;
`;

export const Avatar = styled.img`
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1rem;
  width: calc(100% - 11rem);
`;

export const Title = styled.h2`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};
  `}
`;

export const Description = styled.span`
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors['primary-light']};
  `}
`;

export const ReposWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ReposButton = styled.button`
  border: none;
  cursor: pointer;
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.transparent};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const ReposNumber = styled.span`
  min-width: 3rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  line-height: 1.4rem;
  border-radius: 1.4rem;

  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xsmall};
    border: 0.1rem dashed ${theme.colors['secondary-light']};
    padding: ${theme.spacings.minimal} ${theme.spacings.xxsmall};
  `}
`;
