import {createMuiTheme} from "@material-ui/core";
import CommonColor from "./common-color";
import {Overrides} from "@material-ui/core/styles/overrides";
import CommonFont from "./common-font";

// enumにしておく
export enum DefaultThemeColor {
  inherit = 'inherit',
  primary = 'primary',
  secondary = 'secondary',
  default = 'default',
}

export enum ThemeColor {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error',
}

const overrides: Overrides = {
  MuiButton: {
    root: {
      textTransform: 'none',
    },
  },
};

const Themes: { [K in ThemeColor]: any } = {
  success: createMuiTheme({
    palette: {
      primary: {
        main: CommonColor.SUCCESS,
        light: CommonColor.SUCCESS_LIGHT,
        dark: CommonColor.SUCCESS_DARK,
        contrastText: CommonColor.SUCCESS_CONTRAST,
      },
    },
    overrides: overrides,
  }),
  info: createMuiTheme({
    palette: {
      primary: {
        main: CommonColor.INFO,
        light: CommonColor.INFO_LIGHT,
        dark: CommonColor.INFO_DARK,
        contrastText: CommonColor.INFO_CONTRAST,
      },
    },
    overrides: overrides,
  }),
  warning: createMuiTheme({
    palette: {
      primary: {
        main: CommonColor.WARNING,
        light: CommonColor.WARNING_LIGHT,
        dark: CommonColor.WARNING_DARK,
        contrastText: CommonColor.WARNING_CONTRAST,
      },
    },
    overrides: overrides,
  }),
  error: createMuiTheme({
    palette: {
      primary: {
        main: CommonColor.ERROR,
        light: CommonColor.ERROR_LIGHT,
        dark: CommonColor.ERROR_DARK,
        contrastText: CommonColor.ERROR_CONTRAST,
      },
    },
    overrides: overrides,
  }),
};

export const DefaultTheme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 980,
      md: 1024,
      lg: 1280,
      xl: 1580,
    },
  },
  palette: {
    primary: {
      main: CommonColor.KEY_COLOR,
      light: CommonColor.KEY_COLOR_LIGHT,
      dark: CommonColor.KEY_COLOR_DARK,
      contrastText: CommonColor.KEY_COLOR_CONTRAST,
    },
    secondary: {
      main: CommonColor.SUB_HEADING,
      light: CommonColor.SUB_HEADING_LIGHT,
      dark: CommonColor.SUB_HEADING_DARK,
      contrastText: CommonColor.SUB_HEADING_CONTRAST,
    },
    text: {
      primary: CommonColor.DEFAULT,
      secondary: CommonColor.MODIFY,
      hint: CommonColor.HINT,
    },
  },
  typography: {
    fontFamily: CommonFont.FONT_FAMILY,
    h1: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    h2: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    h3: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    h4: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '0.875rem',
    },
  },
  overrides: {
    MuiInputBase: {
      input: {
        height: '1.2em',
        paddingTop: 5,
      },
    },
    MuiTypography: {
      root: {
        color: CommonColor.DEFAULT,
        fontSize: '0.875rem',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        paddingTop: 10.5,
        paddingBottom: 10.5,
      },
    },
    MuiTab: {
      root: {
        textTransform: 'none',
      },
    },
    MuiTableCell: {
      body: {
        position: 'relative',
      },
    },
  },
});

export default Themes;
