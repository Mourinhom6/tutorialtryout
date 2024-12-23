import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import AppAppBar from './components/AppAppBar';
import MainContent from '@/components/Client/MainContent';
import Latest from '@/components/Client/Latest';
// import Footer from './components/Footer';
import ClientLayout from '@/Layouts/ClientLayout';

// import AppTheme from '../shared-theme/AppTheme';

import Grid from '@mui/material/Grid2';
import { useMediaQuery, useTheme, Box, Typography, Stack, List, TextField, Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadFileIcon from '@mui/icons-material/UploadFile';

import useIsSuperTiny  from "@/MediaQuery";
import isMobileFunction from "@/MediaQuery";

function JobApplicationForm(){
    const theme = useTheme();
    const { isMobile } = isMobileFunction();
    const {isSuperTiny} = useIsSuperTiny();

  return (
    <Box
        sx={{
        padding: 4,
        borderRadius: 2,
        boxShadow: 1,
        maxWidth: '90%',
        margin: 'auto',
        }}
    >
        {/* Heading */}
        <Typography variant={isMobile ? (isSuperTiny ? "h5" : "h4") : "h3"} textAlign="center" fontWeight="bold" gutterBottom>
        Apply for this job
        </Typography>
        <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        gutterBottom
        >
        We develop intelligent solutions for companies to reduce their
        operational costs, increase their profitability and improve service
        quality.
        </Typography>

        {/* Form */}
        <Box component="form" noValidate autoComplete="off">
        {/* Full Name */}
            <TextField
                fullWidth
                label="Full name"
                placeholder="Your full name"
                margin="normal"
            />


<Grid container spacing={2} sx={{ my: 2 }}>
  <Grid  size={{ xs: 12, md: 8 }}>
    <TextField
      fullWidth
      label="E-mail"
      placeholder="Your e-mail address"
      margin="normal"
    />
  </Grid>
  <Grid size={{ xs: 12, md: 4 }}>
    <TextField
      fullWidth
      label="Phone Number"
      placeholder="Your phone number"
      margin="normal"
    />
  </Grid>
</Grid>



            {/* Upload Buttons */}
            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item size={{ xs: 12, sm: 6 }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<UploadFileIcon />}
                        size="large"
                    >
                        Upload CV
                    </Button>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6 }}>
                    <Button
                        fullWidth
                        variant="outlined"
                        startIcon={<UploadFileIcon />}
                        size="large"
                    >
                        Upload cover letter
                    </Button>
                </Grid>
            </Grid>

            {/* Message */}
            <TextField
                fullWidth
                label="Message"
                placeholder="Your question about our services"
                margin="normal"
                multiline
                rows={4}
            />

            {/* Submit Button */}
            <Button
                fullWidth
                variant="contained"
                size="large"
                sx={{ mt: 2 }}
            >
                Apply now
            </Button>
        </Box>
    </Box>
    );
}

function JobDescription() {
    return (
      <Box sx={{ padding: 4 }}>
        {/* Job Title and Info */}
        <Typography variant="h4" gutterBottom>
          UX / UI Designer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          San Francisco, CA · Full time
        </Typography>

        <Box sx={{ borderBottom: '1px solid', borderColor: 'grey.300', my: 4 }} />

        {/* Who we are */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            Who we are
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim
            lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus
            sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna
            velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent
            vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
          </Typography>
        </Box>

        {/* What we're looking for */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            What we’re looking for
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis
            sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et
            lectus rhoncus laoreet.
          </Typography>

          <List>
            {[
              'Our sign up is dead simple. We only require your basic company information',
              'We support bulk uploading via SQL, integrations with most data storage products',
              'Simply select where you’d like to transfer your data',
            ].map((item, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Why to apply */}
        <Box>
          <Typography variant="h5" gutterBottom>
            Why to apply
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim
            lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus
            sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna
            velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent
            vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet.
          </Typography>
        </Box>
      </Box>
    );
  }

export default function Carreer(props) {
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
        <JobDescription />


        <JobApplicationForm />
        {/* <JobApplicationForm /> */}

      </Container>
    </ClientLayout>
  );
}
