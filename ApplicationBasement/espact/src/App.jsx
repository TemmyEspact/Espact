import { useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import BaseRoutes from './BaseRoutes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from 'react-responsive';

const theme = createTheme({
    palette: {
        primary: {
            main: '#37353D',
        },
        secondary: {
            main: '#FA6017',
        },
    },
    typography: {
        fontFamily: ['"AvertaStandardRegular"'].join(','),
        fontSize: 14,
        button: {
            textTransform: 'none',
        },
    },
});

function App() {
    useEffect(() => {
        if (window?.onWindowLoaded) {
            window?.onWindowLoaded('loaded');
        }
    }, []);

    return (
        <HashRouter basename={'/'}>
            <ThemeProvider theme={theme}>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                  <BaseRoutes /> 
                </LocalizationProvider>
            </ThemeProvider>
            <ToastContainer />
        </HashRouter>
    );
}

export default App;
