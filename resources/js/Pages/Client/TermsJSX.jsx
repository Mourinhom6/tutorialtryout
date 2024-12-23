// import * as React from 'react';
// import { useTheme } from '@mui/material';

// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// // import AppAppBar from './components/AppAppBar';
// import MainContent from '@/components/Client/MainContent';
// import Latest from '@/components/Client/Latest';
// // import Footer from './components/Footer';
// import ClientLayout from '@/Layouts/ClientLayout';

// // import AppTheme from '../shared-theme/AppTheme';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';

// import InputLabel from '@mui/material/InputLabel';
// import Link from '@mui/material/Link';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';

// import { visuallyHidden } from '@mui/utils';
// import { styled } from '@mui/material/styles';


// const StyledBox = styled('div')(({ theme }) => ({
//   alignSelf: 'center',
//   width: '100%',
//   height: 400,
//   marginTop: theme.spacing(8),
//   borderRadius: (theme.vars || theme).shape.borderRadius,
//   outline: '6px solid',
//   outlineColor: 'hsla(220, 25%, 80%, 0.2)',
//   border: '1px solid',
//   borderColor: (theme.vars || theme).palette.grey[200],
//   boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
//   backgroundImage: `url('https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard.jpg)`,
//   backgroundSize: 'cover',
//   [theme.breakpoints.up('sm')]: {
//     marginTop: theme.spacing(10),
//     height: 700,
//   },
//   ...theme.applyStyles('dark', {
//     boxShadow: '0 0 24px 12px hsla(210, 100%, 25%, 0.2)',
//     backgroundImage: `url('https://mui.com'}/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
//     outlineColor: 'hsla(220, 20%, 42%, 0.1)',
//     borderColor: (theme.vars || theme).palette.grey[700],
//   }),
// }));

// function Hero() {
//   return (
//     <Box
//       id="hero"
//       sx={(theme) => ({
//         width: '100%',
//         backgroundRepeat: 'no-repeat',
//         backgroundImage:
//           'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 90%), transparent)',
//         ...theme.applyStyles('dark', {
//           backgroundImage:
//             'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
//         }),
//       })}
//     >
//       <Container
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           pt: { xs: 14, sm: 20 },
//           pb: { xs: 8, sm: 12 },
//         }}
//       >
//         <Stack
//           spacing={2}
//           useFlexGap
//           sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
//         >
//           <Typography
//             variant="h1"
//             sx={{
//               display: 'flex',
//               flexDirection: { xs: 'column', sm: 'row' },
//               alignItems: 'center',
//               fontSize: 'clamp(3rem, 10vw, 3.5rem)',
//             }}
//           >
//             Our&nbsp;latest&nbsp;
//             <Typography
//               component="span"
//               variant="h1"
//               sx={(theme) => ({
//                 fontSize: 'inherit',
//                 color: 'primary.main',
//                 ...theme.applyStyles('dark', {
//                   color: 'primary.light',
//                 }),
//               })}
//             >
//               products
//             </Typography>
//           </Typography>
//           <Typography
//             sx={{
//               textAlign: 'center',
//               color: 'text.secondary',
//               width: { sm: '100%', md: '80%' },
//             }}
//           >
//             Explore our cutting-edge dashboard, delivering high-quality solutions
//             tailored to your needs. Elevate your experience with top-tier features
//             and services.
//           </Typography>
//           <Stack
//             direction={{ xs: 'column', sm: 'row' }}
//             spacing={1}
//             useFlexGap
//             sx={{ pt: 2, width: { xs: '100%', sm: '350px' } }}
//           >
//             <InputLabel htmlFor="email-hero" sx={visuallyHidden}>
//               Email
//             </InputLabel>
//             <TextField
//               id="email-hero"
//               hiddenLabel
//               size="small"
//               variant="outlined"
//               aria-label="Enter your email address"
//               placeholder="Your email address"
//               fullWidth
//               slotProps={{
//                 htmlInput: {
//                   autoComplete: 'off',
//                   'aria-label': 'Enter your email address',
//                 },
//               }}
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               sx={{ minWidth: 'fit-content' }}
//             >
//               Start now
//             </Button>
//           </Stack>
//           <Typography
//             variant="caption"
//             color="text.secondary"
//             sx={{ textAlign: 'center' }}
//           >
//             By clicking &quot;Start now&quot; you agree to our&nbsp;
//             <Link href="#" color="primary">
//               Terms & Conditions
//             </Link>
//             .
//           </Typography>
//         </Stack>
//         {/* <StyledBox id="image" /> */}
//       </Container>
//     </Box>
//   );
// }


// const SquareDiv = styled(Box)(({ theme }) => ({
//     width: '100%',
//     height: '200px', // Adjust as needed
//     backgroundColor: theme.palette.primary.main,
//     padding: theme.spacing(2),
//   }));

//   const BubbleSection = styled(Box)(({ theme }) => ({
//     position: 'relative',
//     width: '100%',
//     height: '300px', // Adjust as needed
//     backgroundColor: theme.palette.background.paper,

//     overflow: 'hidden',
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '30%',
//       backgroundColor: theme.palette.primary.main,
//       borderBottomLeftRadius: '40% 100%',
//       borderBottomRightRadius: '40% 100%',
//       zIndex: 1,
//     }
//   }));

// function Hero(){
//   const theme = useTheme();

//   return (
//     <Box
//       sx={{
//         alignSelf: 'center',
//         width: '100%',
//         height: { xs: 800, sm: 1200 },
//         marginTop: { xs: 8, sm: 10 },
//         borderRadius: theme.shape.borderRadius,
//         outline: '6px solid',
//         outlineColor: 'hsla(220, 25%, 80%, 0.2)',
//         border: '1px solid',
//         borderColor: theme.palette.grey[200],
//         boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
//         padding: 0,
//         overflow: 'auto',
//         backgroundColor: theme.palette.background.paper,
//       }}
//     >
//         <Box
//             sx={{
//                 alignSelf: 'center',
//                 alignItems: 'center',
//                 width: '100%',
//                 height: { xs: 100, sm: 200 },
//                 // marginTop: { xs: 8, sm: 10 },
//                 backgroundColor:  theme.palette.primary.main,
//               }}
//         >
//             <Typography variant="h2" gutterBottom>Terms & Conditions</Typography>
//             <Typography variant="body1">Last modified on 23 Aug, 2021</Typography>
//         </Box>
//         <BubbleSection />
//         <Box
//             sx={{
//                 alignSelf: 'center',
//                 alignItems: 'center',
//                 width: '90%',
//               }}
//         >
//             <Typography variant="h4" gutterBottom>1. What information do we collect?</Typography>
//             <Typography variant="body">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </Typography>
//             <Typography variant="h4" gutterBottom>1. What information do we collect?</Typography>
//             <Typography variant="body">
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </Typography>
//         </Box>


//     </Box>
//   );
// };


// import React from 'react';
// import { Box, Typography } from '@mui/material';





// export default function Terms(props) {
//     return (
//       // <AppTheme {...props}>

//       <ClientLayout>
//         <CssBaseline enableColorScheme />
//         {/* <AppAppBar /> */}
//         <Container
//           maxWidth="lg"
//           component="main"
//           sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
//         >
//             <Hero>
//                 <SquareDiv />
//                 <BubbleSection />
//             </Hero>


//         </Container>
//       </ClientLayout>
//     );
//   }


import * as React from 'react';
import { useTheme } from '@mui/material';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ClientLayout from '@/Layouts/ClientLayout';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { visuallyHidden } from '@mui/utils';

import useIsSuperTiny  from "@/MediaQuery";
import isMobileFunction from "@/MediaQuery";


// function BubbleSection() {
//   const theme = useTheme();
//   return (
//     <Box
//       sx={{
//         position: 'relative',
//         width: '100%',
//         height: '300px',
//         backgroundColor: theme.palette.background.paper,
//         overflow: 'hidden',
//         '&::after': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '30%',
//           backgroundColor: theme.palette.primary.main,
//           borderBottomLeftRadius: '40% 100%',
//           borderBottomRightRadius: '40% 100%',
//           zIndex: 1,
//         },
//       }}
//     />
//   );
// }

function Hero() {
  const theme = useTheme();

    const { isMobile } = isMobileFunction();
  const {isSuperTiny} = useIsSuperTiny();


  return (
    <Box
      sx={{
        alignSelf: 'center',
        width: '100%',
        height: { xs: 800, sm: 1200 },
        marginTop: { xs: 8, sm: 10 },
        borderRadius: theme.shape.borderRadius,
        outline: '6px solid',
        outlineColor: 'hsla(220, 25%, 80%, 0.2)',
        border: '1px solid',
        borderColor: theme.palette.grey[200],
        boxShadow: '0 0 12px 8px hsla(220, 25%, 80%, 0.2)',
        padding: 0,
        overflow: 'auto',
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '100%',
          height: { xs: 100, sm: 200 },
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" gutterBottom>
          Terms & Conditions
        </Typography>
        <Typography variant="body1">Last modified on 23 Aug, 2021</Typography>
      </Box>
      {/* <BubbleSection /> */}
      <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '300px',
        backgroundColor: theme.palette.background.paper,
        overflow: 'hidden',
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          overflowY: 'hidden',

          height: isMobile ? (isSuperTiny ? '15%' : '30%') : '40%',
          backgroundColor: theme.palette.primary.main,
          borderBottomLeftRadius: '40% 100%',
          borderBottomRightRadius: '40% 100%',
          zIndex: 1,
        },
      }}
    />
      <Box
        sx={{
          alignSelf: 'center',
          alignItems: 'center',
          width: '90%',
          margin: 'auto',
          paddingTop: theme.spacing(4),
        }}
      >
        <Typography variant="h4" gutterBottom>
          1. What information do we collect?
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Typography variant="h4" gutterBottom>
          2. How do we use your information?
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </Box>
    </Box>
  );
}

export default function Terms(props) {
  return (
    <ClientLayout>
      <CssBaseline enableColorScheme />
      <Container
        maxWidth="lg"
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          my: 16,
          gap: 4,
        }}
      >
        <Hero />
      </Container>
    </ClientLayout>
  );
}


