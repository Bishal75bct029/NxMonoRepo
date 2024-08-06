import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { API_ROUTES } from '@monorepo/shared';

import App from './app/app';

console.log(API_ROUTES);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
