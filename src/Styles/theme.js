import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo'
import teal from '@material-ui/core/colors/teal'
import {grey} from '@material-ui/core/colors'

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
    secondary: {
      main:teal.A700,
    },
    background: {
       default: grey[400]
    },
  },
});

export default theme;