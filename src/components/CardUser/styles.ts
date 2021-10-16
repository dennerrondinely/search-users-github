import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  width: 100%;
  max-width: 30rem;
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
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};
  `}
`;

export const Description = styled.span`
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

export const ReposTitle = styled.div`
  display: flex;
  justify-content: space-between;
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;

export const ReposNumber = styled.span`
  display: inline-flex;
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
