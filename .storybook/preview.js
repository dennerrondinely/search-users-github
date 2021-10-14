import GlobalStyles from '../src/styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Story />
      </ThemeProvider>
    )
  }
];
