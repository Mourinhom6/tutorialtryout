import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import AppAppBar from './components/AppAppBar';
import Hero from '@/Components/Client/Hero';
import LogoCollection from '@/Components/Client/LogoCollection';
import Highlights from '@/Components/Client/Highlights';
import Pricing from '@/Components/Client/Pricing';
import Features from '@/Components/Client/Features';
import Testimonials from '@/Components/Client/Testimonials';
import FAQ from '@/Components/Client/FAQ';
// import Footer from './components/Footer';
// import AppTheme from '../shared-theme/AppTheme';

import ClientLayout from '@/Layouts/ClientLayout';

export default function Marketing(props) {
  return (

    // <ClientLayout {...props}>
    <ClientLayout>
      <CssBaseline enableColorScheme />
      <Hero />
      <div>
        <LogoCollection />
        <Features />
        <Divider />
        <Testimonials />
        <Divider />
        <Highlights />
        <Divider />
        {/* <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
      </div>
    </ClientLayout>
  );
}
