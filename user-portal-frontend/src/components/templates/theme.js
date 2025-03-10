import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        '& $notchedOutline': {
          borderColor: '#3D8D7A',
        },
        '&:hover $notchedOutline': {
          borderColor: '#3D8D7A',
        },
        '&$focused $notchedOutline': {
          borderColor: '#3D8D7A',
        },
      },
    },
    MuiInputLabel: {
      root: {
        '&$focused': {
          color: '#3D8D7A',
        },
      },
    },
  },
});

export default theme;