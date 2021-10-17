import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from 'routes';

import GlobalStyles from 'styles/global';
import { theme } from 'styles/theme';
import SearchProvider from 'context/searchContext';

function App() {
  return (
    <SearchProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </SearchProvider>
  );
}

export default App;
