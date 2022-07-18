import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from './assets/theme';

export const history = createBrowserHistory({ window });

import App from './App';
import './index.css';

let container: HTMLElement | null = null;

document.addEventListener('DOMContentLoaded', function (event) {
  if (!container) {
    container = document.getElementById('root') as HTMLElement;
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <HistoryRouter history={history}>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </HistoryRouter>
      </React.StrictMode>
    );
  }
});
