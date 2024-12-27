import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import AppAppBar from './components/AppAppBar';
import MainContent from '@/components/Client/MainContent';
import Latest from '@/components/Client/Latest';
// import Footer from './components/Footer';
import ClientLayout from '@/Layouts/ClientLayout';

// import AppTheme from '../shared-theme/AppTheme';

export default function Blog( blogs, queryParams = null,) {
  return (
    // <AppTheme {...props}>

    <ClientLayout>
      <CssBaseline enableColorScheme />
      {/* <AppAppBar /> */}
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
      >
        <MainContent blogs={blogs} queryParams={queryParams} />
        <Latest />
      </Container>
      {/* <Footer /> */}
        {/* // </AppTheme> */}
    </ClientLayout>
  );
}
