import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import AppAppBar from './components/AppAppBar';
import MainContent from '@/Components/Client/MainContent';
import Latest from '@/Components/Client/Latest';
// import Footer from './components/Footer';
import ClientLayout from '@/Layouts/ClientLayout';

// import AppTheme from '../shared-theme/AppTheme';

// export default function Blog( blogsmain, bloglatest, queryParams = null,) {
export default function Blog( props) {

    console.log("prop2s", props);
    console.log("blogsmain", props.blogsmain);
    console.log("bloglatest", props.bloglatest);
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
        <MainContent blogs={props.blogsmain} queryParams={props.queryParams} />
        <Latest blogs={props.bloglatest} queryParams={props.queryParams}/>
      </Container>
      {/* <Footer /> */}
        {/* // </AppTheme> */}
    </ClientLayout>
  );
}
