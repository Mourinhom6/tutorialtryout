import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

// import AppAppBar from './components/AppAppBar';
import MainContent from '@/components/Client/MainContent';
import Latest from '@/components/Client/Latest';
// import Footer from './components/Footer';
import ClientLayout from '@/Layouts/ClientLayout';

// import AppTheme from '../shared-theme/AppTheme';

import Grid from '@mui/material/Grid2';

import { CardMedia, Container, Box, Typography, Card, CardContent, Button, MenuItem, Select, FormControl, InputLabel, Stack, Badge } from '@mui/material';

const jobs = [
  { title: 'Front-End Developer', description: 'Responsible for design systems and brand management.', team: 'Consumer', location: 'Madrid' },
  { title: 'Community Manager', description: 'Responsible for creating life in our apps.', team: 'Consulting', location: 'Paris' },
  { title: 'UX/UI Designer', description: 'Help us make the best decisions with qualitative experiments.', team: 'Internal tools', location: 'Yerevan' },
  { title: 'Front-End Developer', description: 'Responsible for design systems and brand management.', team: 'Internal tools', location: 'Madrid' },
  { title: 'Community Manager', description: 'Responsible for creating life in our apps.', team: 'Consulting', location: 'Paris' },
];

function JobOpenings() {
  return (
    <Box py={8}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="overline" color="textSecondary">
            OPEN POSITIONS
          </Typography>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Current job openings
          </Typography>
        </Box>

        {/* Filters */}
        <Grid container spacing={2} mb={4} justifyContent="center" sx={{alignItems:'center'}}>
          <Grid item sx={{alignItems:'center', display: 'flex'}} size={{ xs: 12, sm:4, md: 3}}>
            <FormControl fullWidth>
              <InputLabel>Roles</InputLabel>
              <Select labelId="roles-label" defaultValue="" label="Roles" sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'},}}>
                <MenuItem value="">All Roles</MenuItem>
                <MenuItem value="designer">Designer</MenuItem>
                <MenuItem value="developer">Developer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item size={{ xs: 12, sm:4, md: 3}}>
            <FormControl fullWidth>
              <InputLabel>Teams</InputLabel>
              <Select labelId="teams-label" defaultValue="" label="Teams" sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'},}}>
                <MenuItem value="">All Teams</MenuItem>
                <MenuItem value="consumer">Consumer</MenuItem>
                <MenuItem value="internal">Internal Tools</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item size={{ xs: 12, sm:4, md: 3}}>
            <FormControl fullWidth>
              <InputLabel>Locations</InputLabel>
              <Select labelId="locations-label" defaultValue="" label="Locations" sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'},}}>
                <MenuItem value="">All Locations</MenuItem>
                <MenuItem value="madrid">Madrid</MenuItem>
                <MenuItem value="paris">Paris</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        {/* Job Category Section */}
        <Box mb={4}>
          <Typography variant="h6" fontWeight="bold">
            Design & UX, Engineering
          </Typography>
          <Typography color="textSecondary" variant="body2" mb={2}>
            User experience and design are top priorities at theFront.
          </Typography>
          <Badge color="primary" badgeContent={`${jobs.length} openings`} />
        </Box>

        {/* Job Listings */}
        <Grid container spacing={2}>
            {jobs.map((job, index) => (
                <Grid item size={{ xs: 12}} key={index}>
                    <Card variant="outlined">
                        <CardContent>
                            <Grid container alignItems="center" >
                                <Stack direction={{ xs: 'column', md: 'row' }} size={{ xs: 8, xm: 9, lg: 10}}> {/* first grid */}
                                    <Grid item size={{ xs: 12,  md: 8}}> {/* first grid */}
                                        <Typography variant="h6" fontWeight="bold">
                                            {job.title}
                                        </Typography>
                                        <Typography color="textSecondary">{job.description}</Typography>
                                    </Grid>
                                    <Grid item size={{ xs: 12,  md: 4}} sx={{ display: 'flex', alignItems: 'center', justifyContent:({ xs: 'flex-start',  md: 'flex-end'}), py: 4 }}> {/* secomd grid */}
                                        <Typography color="textSecondary" variant="body2">
                                            {job.team} / {job.location}
                                        </Typography>
                                    </Grid>
                                </Stack>
                                <Grid item size={{ xs: 4, sm: 3,  lg: 2}} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', py: 4 }}> {/* third grid */}
                                    <Button variant="contained" color="primary">Apply</Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
      </Container>
    </Box>
  );
}





const cultureItems = [
  {
    title: "Dynamic teams",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    title: "Great teammates",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    title: "Open communication",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    title: "Autonomy and attitude",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    title: "Support and win",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    title: "Teamwork makes the dream work",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  }
];

const aboutItems = [
    { title: "Innovation", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
    { title: "Collaboration", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?" },
];



function AboutCompany(){
    return (
        <Box sx={{ width: '100%', py: 12 }}>
            <Container maxWidth="lg">
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 12 }}>
                    <Typography variant="h3" color="text.primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                    About our Company
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                    ABOUT
                    </Typography>
                </Box>

                {/* Culture Items Grid */}
                <Grid container spacing={4}>
                    {aboutItems.map((item, index) => (
                        <Grid size={{ xs: 12, sm:6}} item key={index}>
                            <Typography variant="body1" color="text.secondary">
                            {item.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                {/* <Grid item  sx={{ maxWidth: '90%', display: 'flex', justifyContent: 'center', alignItems:'center', height: "350px"}} size={{ xs: 12, sm:6, md: 4 }}>
                    {/* <Card
                        elevation={0}
                        sx={{
                        borderRadius: 2,
                        width: '100%',
                        height: '100%' // Match parent Grid's height
                        }}
                    > */}
                    {/*   <CardMedia
                        component="img"
                        image="https://picsum.photos/800/450?random=1"
                        alt="Teamwork 1"
                        sx={{
                            height: '100%',      // Make it respect parent's height
                            width: '100%',       // Make it cover parent's width
                            objectFit: 'cover',  // Maintain aspect ratio while covering
                            borderRadius: 2,
                        }}
                        />
                    {/* </Card> */}

                {/*</Grid> */}

                <Grid
                    size={{ xs: 12, sm:6, md: 4 }}
                    sx={{
                        height: "350px",
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    >
                    <Box
                        sx={{
                        width: '90%',
                        height: '90%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflow: 'hidden',
                        borderRadius: 2,
                        }}
                    >
                        <CardMedia
                        component="img"
                        image="https://picsum.photos/800/450?random=1"
                        alt="Teamwork 1"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        />
                    </Box>
                    </Grid>


            </Container>
        </Box>
    );
  }

function CompanyCulture2() {
    return (
      <Box sx={{ width: '100%', borderRadius: 2, py: 12}}>
        <Container maxWidth="lg" mb={12}>
          {/* Header Section */}
            <Box sx={{ textAlign: 'center', mb: 12 }}>
                <Typography variant="h3" color="text.primary" sx={{ fontWeight: 'bold', mb: 2 }}>
                    Our company culture
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    COMPANY VALUES
                </Typography>
            </Box>

            {/* Culture Items Grid */}
            <Grid container spacing={4}>
                {cultureItems.map((item, index) => (
                    <Grid size={{ xs: 12, sm:6, md: 4 }} item key={index}>
                        <Card
                            elevation={0}
                            sx={{
                                border: '1px solid',
                                borderColor: 'grey.200',
                                transition: 'box-shadow 0.3s',
                                '&:hover': {
                                boxShadow: 3,
                                },
                            }}
                        >
                            <CardContent sx={{ p: 3 }}>
                                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                                    {item.title}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                 ))}
            </Grid>
        </Container>



      </Box>
    );
  }





function WorkWithUs() {
  return (
    <Box
      sx={{
        padding: 4,
        borderRadius: 2,
        maxWidth: 1200,
        margin: 'auto',
        textAlign: 'center',
      }}
    >
      {/* Heading */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Work with us
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ marginBottom: 3 }}
      >
        Work hard with highly motivated team of talented people and great teammates to launch perfectly crafted products you will love.
      </Typography>

      {/* Call to Action Button */}
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          marginBottom: 4,
          textTransform: 'none',
        }}
      >
        See job openings →
      </Button>

      {/* Image Grid */}
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm:6, md: 4 }}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image='https://picsum.photos/800/450?random=1'
              alt="Teamwork 1"
            />
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, sm:6, md: 4 }}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image='https://picsum.photos/800/450?random=2'
              alt="Teamwork 2"
            />
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, sm:6, md: 4 }}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image='https://picsum.photos/800/450?random=3'
              alt="Teamwork 3"
            />
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, sm:6, md: 6 }}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image='https://picsum.photos/800/450?random=4'
              alt="Teamwork 4"
            />
          </Card>
        </Grid>
        <Grid item size={{ xs: 12, sm:12, md: 6 }}>
          <Card elevation={0} sx={{ borderRadius: 2 }}>
            <CardMedia
              component="img"
              height="200"
              image='https://picsum.photos/800/450?random=45'
              alt="Teamwork 5"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}





export default function Job(props) {
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
        <WorkWithUs />
        <CompanyCulture2 />
        <AboutCompany />
        <JobOpenings />


      </Container>
      {/* <Footer /> */}
        {/* // </AppTheme> */}
    </ClientLayout>
  );
}
