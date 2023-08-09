import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { App } from './App';
import { Providers } from './providers';

const root = ReactDOM.createRoot(
  document.querySelector('#root') as HTMLElement
);

root.render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);
