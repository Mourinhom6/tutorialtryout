import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import AppAppBar from './components/AppAppBar';
// import Hero from '@/components/Client/Hero';
// import LogoCollection from '@/components/Client/LogoCollection';
// import Highlights from '@/components/Client/Highlights';
// import Pricing from '@/components/Client/Pricing';
// import Features from '@/components/Client/Features';
// import Testimonials from '@/components/Client/Testimonials';
// import FAQ from '@/components/Client/FAQ';

import {
    Tabs,
    Paper,
    Tab,
    Box,
    Card,
    Stack,
    TextField,
    Container,
    Button,
    Divider,
    Checkbox,
    FormControlLabel,
    MenuItem,
    useTheme,
    useMediaQuery,
    Typography
  } from '@mui/material';
  import Grid from '@mui/material/Grid2';


  import useRefComp from '@/components/Client/useRefComp';

  import SmallForm from '@/components/SmallForm';



  import { Masonry } from '@mui/lab';


// import Footer from './components/Footer';
// import AppTheme from '../shared-theme/AppTheme';

import ClientLayout from '@/Layouts/ClientLayout';

// size={{ xs: 12, sm: 4, md: 3, lg: 2}}

const CenteredMasonry = () => {
    const images = [
        { height: 140, url: 'https://picsum.photos/300/140?random' },
        { height: 200, url: 'https://picsum.photos/300/200?random' },
        { height: 300, url: 'https://picsum.photos/300/300?random' },
        { height: 180, url: 'https://picsum.photos/300/180?random' },
        { height: 250, url: 'https://picsum.photos/300/250?random' },
        { height: 170, url: 'https://picsum.photos/300/170?random' },
    ];

    const theme = useTheme();

    // Use media queries to determine screen size
    const isXs = useMediaQuery(theme.breakpoints.only('xs'));
    const isSm = useMediaQuery(theme.breakpoints.only('sm'));
    const isMd = useMediaQuery(theme.breakpoints.only('md'));
    const isLg = useMediaQuery(theme.breakpoints.up('lg'));

    // Determine the number of images to display based on screen size
    let imagesToShow;
    if (isXs) {
        imagesToShow = images.slice(0, 1); // Show 1 image for xs
    } else if (isSm) {
        imagesToShow = images.slice(0, 3); // Show 3 images for sm
    } else if (isMd) {
        imagesToShow = images.slice(0, 4); // Show 4 images for md
    } else if (isLg) {
        imagesToShow = images.slice(0, 6); // Show 6 images for lg and above
    } else {
        imagesToShow = images; // Fallback: show all images
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                // minHeight: '100vh',
                paddingY: 4,
                overflow: 'hidden',
            }}
        >
            <Grid
                container
                spacing={2} // Use spacing to control gaps
                sx={{
                    justifyContent: 'center', // Centers the grid horizontally
                    alignItems: 'center', // Centers the grid vertically
                }}
            >
                {imagesToShow.map((image, index) => (
                    <Grid
                        item
                        size={{ xs: 12, sm: 4, md: 3, lg: 2}}
                        key={index}
                        sx={{
                            borderRadius: '8px',
                            overflow: 'hidden',
                            transition: 'all 0.3s',
                            '&:hover': {
                                boxShadow: theme.shadows[4],
                                transform: 'translateY(-7px)',
                            },
                        }}
                    >
                        <img
                            src={image.url}
                            alt={`Random image ${index + 1}`}
                            style={{
                                width: '100%', // Ensure the image takes up the full width of its container
                                height: `${image.height}px`, // Keep different heights
                                objectFit: 'cover',
                                // borderRadius: '8px', // Optional: Rounded corners
                                // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)', // Optional: Add shadows
                            }}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default function Advertising(props) {

    // const publicityRef = React.useRef(null)

    const { ref, scrollToRef } = useRefComp();



  return (

    // <ClientLayout {...props}>
    <ClientLayout>
        <CssBaseline enableColorScheme />



            <Container
                sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 15 },
                pb: { xs: 8, sm: 12 },
                }}
            >
                <Stack
                    spacing={2}
                    useFlexGap
                    sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}
                >
                    <Typography
                    variant="h1"
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                    }}
                    >
                    A&nbsp;Nossa&nbsp;
                    <Typography
                        component="span"
                        variant="h1"
                        sx={(theme) => ({
                            fontSize: 'inherit',
                            color: '#ff0e0e',
                            ...theme.applyStyles('dark', {
                                color: '#cb0404'
                            }),
                        })}
                    >
                        Publicidade
                    </Typography>
                    </Typography>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            color: 'text.secondary',
                            width: { sm: '100%', md: '80%' },
                        }}
                    >
                        Todos os dias, levamos a sua mensagem a milhares de olhares atentos,
                        transformando os nossos veículos em autênticas montras em movimento.
                        Imagine o impacto de estar sempre no caminho certo com a Self Made FleetMan!

                    </Typography>
                </Stack>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{
                    marginTop: 2,
                    marginBottom: 4,
                    textTransform: 'none',
                    }}
                    // onClick={() => scrollToRef.current.scrollIntoView({ behavior: 'smooth' })}
                    onClick={scrollToRef}
                >
                    Contact us for Advertising →
                </Button>

                <CenteredMasonry/>
                <Paper   ref={ref} elevation={3} sx={{ p: 4, mt: 4 }}>
                    <Typography variant="h4" gutterBottom>
                        Com a Self Made FleetMan, a sua marca nunca para de ser vista!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        A Self Made FleetMan oferece soluções de publicidade exterior em veículos. Contacte-nos para dar visibilidade à sua marca!
                    </Typography>
                    <form>
                        <SmallForm/>
                    </form>
                </Paper>
            </Container>
        </ClientLayout>
    );
}

            {/* </Container>
        <Container maxWidth="md">
            <CenteredMasonry/>
            <Paper   ref={publicityRef} elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                Com a Self Made FleetMan, a sua marca nunca para de ser vista!
                </Typography>
                <Typography variant="body1" paragraph>
                A Self Made FleetMan oferece soluções de publicidade exterior em veículos. Contacte-nos para dar visibilidade à sua marca!
                </Typography>
                <form> */}
                {/* <Grid container spacing={3}>
                    <Grid item size={{ xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        variant="outlined"
                        required
                    />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6}}>
                    <TextField
                        fullWidth
                        label="Company Name"
                        variant="outlined"
                        required
                    />
                    </Grid>
                    <Grid item  size={{ xs: 12}}>
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        type="email"
                        required
                    />
                    </Grid>
                    <Grid item  size={{ xs: 12}}>
                    <TextField
                        fullWidth
                        label="Phone"
                        variant="outlined"
                    />
                    </Grid>
                    <Grid item  size={{ xs: 12}}>
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                        required
                    />
                    </Grid>
                    <Grid item  size={{ xs: 12}}>
                    <Box display="flex" justifyContent="flex-end">
                        <Button variant="contained" color="primary" type="submit">
                        Send Inquiry
                        </Button>
                    </Box>
                    </Grid>
                </Grid> */}
                    {/* <SmallForm/>
                </form>
            </Paper>
        </Container> */}


