import { createTheme } from '@mui/material/styles';
import { blue, lightBlue } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#584E56"
        },
        secondary: {
            main: lightBlue[600],
            midNightBlue: "#4F2F4F"
        }
    }
});