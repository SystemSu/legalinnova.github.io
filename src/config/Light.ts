import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary:{
        main:'rgb(1,87,154)',
        dark: 'rgb(1,87,159)',
        light: 'rgb(1,87,154)',
        contrastText:'#ffffff',
    },
    secondary:{
        main:yellow[500],
        dark: yellow[400],
        light: yellow[300],
        contrastText:'#ffffff',
    },


    background:{
        paper:'#ffffff',
        default:'#f7f6f3',

        
    }
  },
  
});
