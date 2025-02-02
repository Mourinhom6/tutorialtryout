import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// import AppAppBar from './components/AppAppBar';
import MainContent from '@/Components/Client/MainContent';
import Latest from '@/Components/Client/Latest';
// import Footer from './components/Footer';
import ClientLayout from '@/Layouts/ClientLayout';

// import AppTheme from '../shared-theme/AppTheme';
import { ThemeProvider, createTheme } from '@mui/material';

import Grid from '@mui/material/Grid2';
import { useMediaQuery, useTheme, Box, Typography, Stack, List, TextField, Button, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { MuiTelInput } from 'mui-tel-input'

import useIsSuperTiny  from "@/MediaQuery";
import isMobileFunction from "@/MediaQuery";
import { height } from '@mui/system';
import { Link, router } from "@inertiajs/react";

import {useRoute} from "&/ziggy"
const routing = useRoute();

import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

function MinHeightTextarea() {
  const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

  const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
  };

  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 320px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 8px 12px;
    border-radius: 8px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }

    /* firefox */
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  return (
    <Textarea aria-label="minimum height" fullwidth minRows={2} maxRows={6} placeholder="Escreva-nos uma Mensagem" />
  );
}




// const MyComponent = () => {
//     const [value, setValue] = React.useState('')

//     const handleChange = (newValue) => {
//       setValue(newValue)
//     }

//     return <MuiTelInput value={value} onChange={handleChange} />
//   }

const customTheme = createTheme({
    components: {
        MuiTelInput: {
            styleOverrides: {
                root: {
                    border: 'none', // Remove border
                    boxShadow: 'none', // Remove any box shadow
                    // Add more overrides as needed
                },
                input: {
                    border: 'none', // Remove border from input
                    outline: 'none', // Remove outline on focus
                },
            },
          },
    },
  });

function JobApplicationForm(){
    const theme = useTheme();
    const { isMobile } = isMobileFunction();
    const {isSuperTiny} = useIsSuperTiny();

    const [value, setValue] = React.useState('+351')

    const handleChange = (newValue) => {
      setValue(newValue)
    }

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
                sx={{ height: '56px', // Set height here
            '& .MuiInputBase-root': {
              height: '100%', // Ensure input base takes full height
            }, }}

                fullWidth
                label="Full name"
                placeholder="Your full name"
                margin="normal"
            />


            <Grid container spacing={2} sx={{ alignItems: "center",  my: 2 }}>
                <Grid  size={{ xs: 12, md: 8 }}>
                    <TextField
                        sx={{height: '56px', // Set height here
                            '& .MuiInputBase-root': {
                            height: '100%', // Ensure input base takes full height
                            }, }}
                            fullWidth
                            label="E-mail"
                            placeholder="Your e-mail address"
                            margin="normal"
                    />
                </Grid>
                <Grid container size={{ xs: 12, md: 4 }}   >
                    <ThemeProvider theme={customTheme}>
                        <MuiTelInput fullWidth value={value} onChange={handleChange} />
                    </ThemeProvider>
                </Grid>
            </Grid>

{/* MuiFormControl-root MuiFormControl-fullWidth MuiTextField-root MuiTelInput-TextField css-cmpglg-MuiFormControl-root-MuiTextField-root */}

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
            {/* <TextField
                fullWidth
                label="Message"
                placeholder="Your question about our services"
                margin="normal"
                multiline

                rows={4}
            /> */}
            <MinHeightTextarea/>

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

function JobDescription(work) {
    console.log("work",work);
    return (
      <Box sx={{ padding: 4 }}>
        {/* Job Title and Info */}
        <Typography variant="h4" gutterBottom>
          {/* UX / UI Designer */}
          {work.work.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {/* San Francisco, CA · Full time */}
          {work.work.location} / {work.work.type}
        </Typography>

        <Box sx={{ borderBottom: '1px solid', borderColor: 'grey.300', my: 4 }} />

        {/* Who we are */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            Who we are
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {/* We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim
            lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus
            sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna
            velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent
            vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet. */}
            {work.work.who_we_are}
          </Typography>
        </Box>

        {/* What we're looking for */}
        <Box sx={{ marginBottom: 4 }}>
          <Typography variant="h5" gutterBottom>
            What we’re looking for
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            {/* Aenean gravida est nec diam suscipit iaculis. Praesent urna velit, auctor nec turpis et, vehicula lobortis
            sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent vitae venenatis enim. Nulla tincidunt felis et
            lectus rhoncus laoreet. */}
            {work.work.what_were_looking}

          </Typography>

          <List>
            {/* {[
              'Our sign up is dead simple. We only require your basic company information',
              'We support bulk uploading via SQL, integrations with most data storage products',
              'Simply select where you’d like to transfer your data',
            ].map((item, index) => ( */}
            {work.work.props.map((item) => (
              <ListItem key={item.id}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={item.name}/>  {/*secondary={secondary ? 'Secondary text' : null}/> */}
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
            {/* We believe lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat elit vitae enim
            lacinia semper. Cras nulla lectus, porttitor vitae urna iaculis, malesuada tincidunt lectus. Proin nec tellus
            sit amet massa auctor imperdiet id vitae diam. Aenean gravida est nec diam suscipit iaculis. Praesent urna
            velit, auctor nec turpis et, vehicula lobortis sem. Vivamus convallis mi sagittis eleifend laoreet. Praesent
            vitae venenatis enim. Nulla tincidunt felis et lectus rhoncus laoreet. */}
            {work.work.why_to_apply}
          </Typography>
        </Box>
      </Box>
    );
  }

export default function Carreer(props) {

    console.log("props",props)
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
        <JobDescription  work={props.job} />


        <JobApplicationForm />
        {/* <JobApplicationForm /> */}

      </Container>
    </ClientLayout>
  );
}
