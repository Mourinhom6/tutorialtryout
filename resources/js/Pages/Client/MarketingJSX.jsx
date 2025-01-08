import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
// import AppAppBar from './components/AppAppBar';
import Hero from '@/components/Client/Hero';
import LogoCollection from '@/components/Client/LogoCollection';
import Highlights from '@/components/Client/Highlights';
import Pricing from '@/components/Client/Pricing';
import Features from '@/components/Client/Features';
import Testimonials from '@/components/Client/Testimonials';
import FAQ from '@/components/Client/FAQ';
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
