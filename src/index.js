import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

////******* WARNING! DO NOT CHANGE ANYTHING IN THIS FILE */

import './Styles/index.css'

import {BrowserRouter} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Styles/theme'
import 'fontsource-roboto';

import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={MomentUtils}>
            <CssBaseline />
            <App />
          </MuiPickersUtilsProvider>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)