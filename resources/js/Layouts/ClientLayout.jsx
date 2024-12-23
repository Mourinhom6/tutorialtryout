import { Link } from "@inertiajs/react";
import NativeSelectInput from "@mui/material/NativeSelect/NativeSelectInput";
import AppAppBar from '@/Components/Client/AppAppBar';
import Footer from '@/Components/Client/Footer';
import AppThemeClient from '@/Components/AppTheme';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import { Autocomplete, TextField } from '@mui/material';
import * as locales from '@mui/material/locale';

// import AppTheme from '@/Components/AppTheme';

// const mainTheme = createTheme({
//     cssVariables: {
//       colorSchemeSelector: 'data-toolpad-color-scheme',
//     },
//     colorSchemes: {
//       light: {
//         palette: {
//           primary: {
//             main: '#1976d2', // Custom primary color for light mode
//           },
//           secondary: {
//             main: '#ff4081', // Custom secondary color
//           },
//           background: {
//             default: '#ffffff',
//             paper: '#f5f5f5',
//           },
//           text: {
//             primary: '#000000',
//             secondary: '#555555',
//           },
//         },
//       },
//       dark: {
//         palette: {
//           primary: {
//             main: '#90caf9', // Custom primary color for dark mode
//           },
//           secondary: {
//             main: '#f48fb1',
//           },
//           background: {
//             default: '#121212',
//             paper: '#1e1e1e',
//           },
//           text: {
//             primary: '#ffffff',
//             secondary: '#bbbbbb',
//           },
//         },
//       },
//     },
//     breakpoints: {
//       values: {
//         xs: 0,
//         sm: 600,
//         md: 900,
//         lg: 1200,
//         xl: 1536,
//       },
//     },
//   });



export default function ClientLayout({ children }) {

    // const [locale, setLocale] = React.useState('ptPT');

    // React.useEffect(() => {
    //     console.log('ClientLayout: Current locale:', locale);
    //   }, [locale]);

    //   const handleLocaleChange = (newLocale) => {
    //     console.log('ClientLayout: Changing locale to:', newLocale);
    //     setLocale(newLocale);
    //   };
    return (
        <>
            {/* <ThemeProvider theme={mainTheme}> */}
            {/* <AppThemeClient locale={locale}> */}
            <AppThemeClient>
                <AppAppBar />
                        <main>{children}</main>
                <Footer />
            </AppThemeClient>
            {/* </ThemeProvider> */}
        </>
    );
}
