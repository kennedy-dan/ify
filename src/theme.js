import { createTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
const greenTheme = "#000000";
const darkTheme = "##1a1b1f";
const darkWhite = "#afafaf";
const greyTheme = "#eeeff1";
// const lightGreen = '#f9fbf9'
const fontFamily = "Poppins";
const lightGreen = "#f9fbf9";
// const blueTheme = '#197519'

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: "#eeeff1",
          fontFamily: 'Poppins'
        },
      },
    },
  },
  palette: {
    common: {
      blue: `${greenTheme}`,
      orange: `${darkTheme}`,
    },
    primary: {
      main: `${greyTheme}`,
    },
    secondary: {
      main: `${greenTheme}`,
    },
    tertiary: {
      main: "rgba(0,0,0,0.4)",
    },
    advance: {
      main: `${darkWhite}`,
    },
    banner: {
      main: `${lightGreen}`,
    },
 
  },
  font: {
    primary: {
      main: `${fontFamily}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
  },
});

export default theme;
