import {createTheme, responsiveFontSizes} from '@mui/material/styles';

let theme = createTheme({	
    palette: {
        mode: 'dark',
        primary: {
            main: '#696969',
        },
        secondary: {
            main: '#4f8e3e',
        },
       
    },
    typography: {
        fontFamily: 'Helvetica Neue' 
    }
});

theme = responsiveFontSizes(theme);

export default theme;