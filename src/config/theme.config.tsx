import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

type ThemeProps = {
  children: JSX.Element;
};
export enum themePalette {
  BG = "#F5F5F5",
  AZUL = "#01579A",
  FONT_GLOBAL = "Ubuntu, sans-serif",
  //estilo de alerta
  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
  SUCCESS_MAIN = "#66bb6a",
  BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)"
}
const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: themePalette.BG,
    },
    primary: {
      main: themePalette.AZUL,
    },
  },
  typography: {
    fontFamily: themePalette.FONT_GLOBAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "0.6em",
          border:'none',
          color:'white',
          
        },
     

      },

      
    },

    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "2em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError:{
          border:`1px solid ${themePalette.ERROR_MAIN}`,
          background:themePalette.BG_ERROR_MAIN,
        },
        standardSuccess:{
          border:`1px solid ${themePalette.SUCCESS_MAIN}`,
          background:themePalette.BG_SUCCESS_MAIN,
          paddingTop:'30px'
        }
      },
    },
    MuiAppBar:{
      defaultProps:{
        style: {
         
        },
      }
    },
    MuiToolbar:{
      defaultProps:{
        style: {
         background:'rgb(1,87,154)',
         color:'white',
         minWidth:'480px',
        
         
         
        },
      }
    }
  },
  
  
});
export const ThemeConfig: React.FC<ThemeProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
