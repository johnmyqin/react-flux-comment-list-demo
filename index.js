/*!
 * webpack入口文件
 */
import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('react-root-node')
);
