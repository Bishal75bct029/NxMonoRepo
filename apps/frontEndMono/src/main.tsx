import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { Provider } from 'react-redux';
import store from './rtk/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
