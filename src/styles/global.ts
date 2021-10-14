import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html,
    body,
    #root {
      height: 100%;
    }
    html {
      font-size: 62.5%;
    }
    body {
      background-color: ${theme.colors['background-body']};
      font-family: ${theme?.font.family};
      font-size: 1.6rem;
    }

    * {
      font-family: ${theme?.font.family};
    }
  `}

`;

export default GlobalStyles;
