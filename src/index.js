import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import Site from './components/Site';

ReactDOM.render(
  <React.StrictMode>
    <Site />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
