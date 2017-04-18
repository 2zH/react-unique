import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './styles/theme';
import Router from './router';
import './index.css';
import './loadServiceWorker';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={theme}>
    <Router />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
