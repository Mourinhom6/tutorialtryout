import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

// import AppAppBar from './components/AppAppBar';
// import MainContent from '@/components/Client/MainContent';
// import Latest from '@/components/Client/Latest';
// import Footer from './components/Footer';
import ClientLayout from '@/Layouts/ClientLayout';

// import AppTheme from '../shared-theme/AppTheme';
// import CircularSke from '@/components/Skeletons';

import Grid from '@mui/material/Grid2';
import { Link, router } from "@inertiajs/react";

import { useTheme, useMediaQuery, CardMedia, Container, Box, Typography, Card, CardContent, Button, MenuItem, Select, FormControl, InputLabel, Stack, Badge } from '@mui/material';

// const jobs = [
//   { title: 'Front-End Developer', description: 'Responsible for design systems and brand management.', team: 'Consumer', location: 'Madrid' },
//   { title: 'Community Manager', description: 'Responsible for creating life in our apps.', team: 'Consulting', location: 'Paris' },
//   { title: 'UX/UI Designer', description: 'Help us make the best decisions with qualitative experiments.', team: 'Internal tools', location: 'Yerevan' },
//   { title: 'Front-End Developer', description: 'Responsible for design systems and brand management.', team: 'Internal tools', location: 'Madrid' },
//   { title: 'Community Manager', description: 'Responsible for creating life in our apps.', team: 'Consulting', location: 'Paris' },
// ];

import {useRoute} from "&/ziggy"
const routing = useRoute();
import { styled } from '@mui/system';


const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    '&:focus-visible': {
      outline: '3px solid',
      outlineColor: 'hsla(210, 98%, 48%, 0.5)',
      outlineOffset: '2px',
    },
  }));

// const SyledCardContent = styled(CardContent)({
//     display: 'flex',
//     flexDirection: 'column',
//     gap: 4,
//     padding: 16,
//     flexGrow: 1,
//     '&:last-child': {
//       paddingBottom: 16,
//     },
//   });
// function JobOpenings(props) {

// // const JobOpenings = React.forwardRef((props, ref) => {

//   return (
//     <Box py={8}>
//       <Container maxWidth="lg">
//         {/* Section Header */}
//         <Box textAlign="center" mb={4}>
//           <Typography variant="overline" color="textSecondary">
//             OPEN POSITIONS
//           </Typography>
//           <Typography ref={ref} variant="h4" fontWeight="bold" gutterBottom>
//             Current job openings
//           </Typography>
//         </Box>

//         {/* Filters */}
//         <Grid container spacing={2} mb={4} justifyContent="center" sx={{alignItems:'center'}}>
//           <Grid item sx={{alignItems:'center', display: 'flex'}} size={{ xs: 12, sm:4, md: 3}}>
//             <FormControl fullWidth>
//               <InputLabel>Roles</InputLabel>
//               <Select labelId="roles-label" defaultValue="" label="Roles" sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'},}}>
//                 <MenuItem value="">All Roles</MenuItem>
//                 <MenuItem value="designer">Designer</MenuItem>
//                 <MenuItem value="developer">Developer</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item size={{ xs: 12, sm:4, md: 3}}>
//             <FormControl fullWidth>
//               <InputLabel>Teams</InputLabel>
//               <Select labelId="teams-label" defaultValue="" label="Teams" sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'},}}>
//                 <MenuItem value="">All Teams</MenuItem>
//                 <MenuItem value="consumer">Consumer</MenuItem>
//                 <MenuItem value="internal">Internal Tools</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//           <Grid item size={{ xs: 12, sm:4, md: 3}}>
//             <FormControl fullWidth>
//               <InputLabel>Locations</InputLabel>
//               <Select labelId="locations-label" defaultValue="" label="Locations" sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'},}}>
//                 <MenuItem value="">All Locations</MenuItem>
//                 <MenuItem value="madrid">Madrid</MenuItem>
//                 <MenuItem value="paris">Paris</MenuItem>
//               </Select>
//             </FormControl>
//           </Grid>
//         </Grid>

//         {/* Job Category Section */}
//         <Box mb={4}>
//           <Typography variant="h6" fontWeight="bold">
//             Design & UX, Engineering
//           </Typography>
//           <Typography color="textSecondary" variant="body2" mb={2}>
//             User experience and design are top priorities at theFront.
//           </Typography>
//           <Badge color="primary" badgeContent={`${jobs.length} openings`} />
//         </Box>

//         {/* Job Listings */}
//         <Grid container spacing={2}>
//             {jobs.map((job, index) => (
//                 <Grid item size={{ xs: 12}} key={index}>
//                     <Card variant="outlined">
//                         <CardContent>
//                             <Grid container alignItems="center" >
//                                 <Stack direction={{ xs: 'column', md: 'row' }} size={{ xs: 8, xm: 9, lg: 10}}> {/* first grid */}
//                                     <Grid item size={{ xs: 12,  md: 8}}> {/* first grid */}
//                                         <Typography variant="h6" fontWeight="bold">
//                                             {job.title}
//                                         </Typography>
//                                         <Typography color="textSecondary">{job.description}</Typography>
//                                     </Grid>
//                                     <Grid item size={{ xs: 12,  md: 4}} sx={{ display: 'flex', alignItems: 'center', justifyContent:({ xs: 'flex-start',  md: 'flex-end'}), py: 4 }}> {/* secomd grid */}
//                                         <Typography color="textSecondary" variant="body2">
//                                             {job.team} / {job.location}
//                                         </Typography>
//                                     </Grid>
//                                 </Stack>
//                                 <Grid item size={{ xs: 4, sm: 3,  lg: 2}} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', py: 4 }}> {/* third grid */}
//                                     <Button variant="contained" color="primary">Apply</Button>
//                                 </Grid>
//                             </Grid>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//         </Grid>
//       </Container>
//     </Box>
//     );
// });





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





// function WorkWithUs(jobOpeningsRef ) {

//   return (
//     <>
//         <Box
//         sx={{
//             padding: 4,
//             borderRadius: 2,
//             maxWidth: 1200,
//             margin: 'auto',
//             textAlign: 'center',
//         }}
//         >
//         {/* Heading */}
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//             Work with us
//         </Typography>
//         <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{ marginBottom: 3 }}
//         >
//             Work hard with highly motivated team of talented people and great teammates to launch perfectly crafted products you will love.
//         </Typography>

//         {/* Call to Action Button */}
//         <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             sx={{
//             marginBottom: 4,
//             textTransform: 'none',
//             }}
//             onClick={() => jobOpeningsRef.current.scrollIntoView({ behavior: 'smooth' })}
//         >
//             See job openings →
//         </Button>






//         {/* Image Grid */}
//         <Grid container spacing={2}>
//             <Grid item size={{ xs: 12, sm:6, md: 4 }}>
//             <Card elevation={0} sx={{ borderRadius: 2 }}>
//                 <CardMedia
//                 component="img"
//                 height="200"
//                 image='https://picsum.photos/800/450?random=1'
//                 alt="Teamwork 1"
//                 />
//             </Card>
//             </Grid>
//             <Grid item size={{ xs: 12, sm:6, md: 4 }}>
//             <Card elevation={0} sx={{ borderRadius: 2 }}>
//                 <CardMedia
//                 component="img"
//                 height="200"
//                 image='https://picsum.photos/800/450?random=2'
//                 alt="Teamwork 2"
//                 />
//             </Card>
//             </Grid>
//             <Grid item size={{ xs: 12, sm:6, md: 4 }}>
//             <Card elevation={0} sx={{ borderRadius: 2 }}>
//                 <CardMedia
//                 component="img"
//                 height="200"
//                 image='https://picsum.photos/800/450?random=3'
//                 alt="Teamwork 3"
//                 />
//             </Card>
//             </Grid>
//             <Grid item size={{ xs: 12, sm:6, md: 6 }}>
//             <Card elevation={0} sx={{ borderRadius: 2 }}>
//                 <CardMedia
//                 component="img"
//                 height="200"
//                 image='https://picsum.photos/800/450?random=4'
//                 alt="Teamwork 4"
//                 />
//             </Card>
//             </Grid>
//             <Grid item size={{ xs: 12, sm:12, md: 6 }}>
//             <Card elevation={0} sx={{ borderRadius: 2 }}>
//                 <CardMedia
//                 component="img"
//                 height="200"
//                 image='https://picsum.photos/800/450?random=45'
//                 alt="Teamwork 5"
//                 />
//             </Card>
//             </Grid>
//         </Grid>
//         </Box>
//     );
//     }


function Connector(trabalhinho){

        const [roleFilter, setRoleFilter] = React.useState('');
        const [teamFilter, setTeamFilter] = React.useState('');
        const [locationFilter, setLocationFilter] = React.useState('');

        React.useEffect(() => {
            console.log("roleFilter:", roleFilter);
            console.log("teamFilter:", teamFilter);
            console.log("locationFilter:", locationFilter);
        }, [roleFilter, teamFilter, locationFilter]);

        const handleRoleChange = (event) => {
            const value = event.target.value;
            const updatedRole = value === 'default' ? '' : value;
            setRoleFilter(updatedRole);
            applyFilters(updatedRole, teamFilter, locationFilter);
        };

        const handleTeamChange = (event) => {
            const value = event.target.value;
            const updatedTeam = value === 'default' ? '' : value;
            setTeamFilter(updatedTeam);
            applyFilters(roleFilter, updatedTeam, locationFilter);
        };

        const handleLocationChange = (event) => {
            const value = event.target.value;
            const updatedLocation = value === 'default' ? '' : value;
            setLocationFilter(updatedLocation);
            applyFilters(roleFilter, teamFilter, updatedLocation);
        };

        const applyFilters = (role, team, location) => {
            const filters = {};
            if (role) filters.role = role;
            if (team) filters.team = team;
            if (location) filters.location = location;

            console.log('Sending query filters:', filters);

            if (Object.keys(filters).length > 0) {
                router.get(routing("job"), filters);
            } else {
                // If all filters are empty, fetch all jobs or reset to initial state
                console.log('No filters applied, fetching all jobs');
                router.get(routing("job"));
            }
        };



// const [roleFilter, setRoleFilter] = React.useState('');
// const [teamFilter, setTeamFilter] = React.useState('');
// const [locationFilter, setLocationFilter] = React.useState('');
// const [filteredJobs, setFilteredJobs] = React.useState([]);

// console.log("roleFilter",roleFilter);
// console.log("teamFilter",teamFilter);
// console.log("locationFilter",locationFilter);
// console.log("filteredJobs",filteredJobs);


// const handleRoleChange = (event) => {
//     const value = event.target.value;
//     setRoleFilter(value === 'default' ? '' : value);
// };

// const handleTeamChange = (event) => {
//     const value = event.target.value;
//     setTeamFilter(value === 'default' ? '' : value);
// };

// const handleLocationChange = (event) => {
//     const value = event.target.value;
//     setLocationFilter(value === 'default' ? '' : value);
// };

// const applyFilters = () => {
//     const filters = {};
//     if (roleFilter) filters.role = roleFilter;
//     if (teamFilter) filters.team = teamFilter;
//     if (locationFilter) filters.location = locationFilter;

//     if (Object.keys(filters).length > 0) {
//         console.log('Sending query filters:', filters);
//         router.get(routing("job"), filters);
//     } else {
//         // If all filters are empty, fetch all jobs or reset to initial state
//         console.log('No filters applied, fetching all jobs');
//         router.get(routing("job"));
//     }
// };

// React.useEffect(() => {
//     // Debounce the filter application to avoid too many requests
//     const debounceTimer = setTimeout(() => {
//         applyFilters();
//     }, 300); // Wait for 300ms after the last change before applying filters

//     return () => clearTimeout(debounceTimer);
// }, [roleFilter, teamFilter, locationFilter]);


    // const [roleFilter, setRoleFilter] = React.useState('');
    // const [teamFilter, setTeamFilter] = React.useState('');
    // const [locationFilter, setLocationFilter] = React.useState('');
    // const [filteredJobs, setFilteredJobs] = React.useState([]);

    // const handleRoleChange = (event) => {
    //     setRoleFilter(event.target.value);
    // };

    // const handleTeamChange = (event) => {
    //     setTeamFilter(event.target.value);
    // };

    // const handleLocationChange = (event) => {
    //     setLocationFilter(event.target.value);
    // };

    // const applyFilters = () => {
    //     const filters = {
    //         role: roleFilter,
    //         team: teamFilter,
    //         location: locationFilter
    //     };
    //     console.log('Sending query filters:', filters);
    //     router.get(routing("job"), filters);
    // };

    // React.useEffect(() => {
    //     applyFilters();
    // }, [roleFilter, teamFilter, locationFilter]);




    console.log("trabalhinho", trabalhinho);

    const jobOpeningsRef = React.useRef(null)

    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <>
            <Box
                sx={{
                    padding: 4,
                    borderRadius: 2,
                    maxWidth: 1200,
                    margin: 'auto',
                    textAlign: 'center',
                }}
            >
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
                    onClick={() => jobOpeningsRef.current.scrollIntoView({ behavior: 'smooth' })}
                >
                    See job openings →
                </Button>



                {/* <CircularSke loading={isLoading}>
                    <YourComponent /> */}
                <Grid container spacing={2}>
                    {/* <CircularSke loading={isLoading}> */}
                        <Grid item size={{ xs: 12, sm:4 }}>
                            <SyledCard variant="outlined" sx={{maxHeight:{ xs:190, sm:190 , md:300 },}} >
                                <CardMedia
                                    component="img"
                                    alt="djdjdjdj"
                                    image="https://picsum.photos/800/450?random=1"
                                    sx={{
                                        aspectRatio: { xs:'16/9' , sm:'3/4', md:'9/16' },
                                        maxHeight:{ xs:190, sm:190 , md:300 },
                                        borderBottom: '1px solid',
                                        borderColor: 'divider',
                                    }}
                                />
                            </SyledCard>
                        </Grid>
                    {/* </CircularSke> */}

                    <Grid item size={{ xs: 12, sm:8 }}>
                        <SyledCard variant="outlined" sx={{maxHeight:{ xs:190, sm:190 , md:300 },}} >
                            <CardMedia
                                component="img"
                                alt="djdjdjdj"
                                image="https://picsum.photos/800/450?random=2"
                                sx={{
                                    aspectRatio: { xs:'16/9' , sm:'16/9' , md:'16/9' },
                                    maxHeight:{ xs:190, sm:190 , md:300 },
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                        </SyledCard>
                    </Grid>
                    <Grid item size={{ xs: 12, sm:8 }}>
                        <SyledCard variant="outlined" sx={{maxHeight:{ xs:190, sm:190 , md:300 },}} >
                            <CardMedia
                                component="img"
                                alt="djdjdjdj"
                                image="https://picsum.photos/800/450?random=4"
                                sx={{
                                    aspectRatio: { xs:'16/9' , sm:'16/9' , md:'16/9' },
                                    maxHeight:{ xs:190, sm:190 , md:300 },
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                        </SyledCard>
                    </Grid>
                    <Grid item size={{ xs: 12, sm:4 }}>
                        <SyledCard variant="outlined" sx={{maxHeight:{ xs:190, sm:190 , md:300 },}} >
                            <CardMedia
                                component="img"
                                alt="djdjdjdj"
                                image="https://picsum.photos/800/450?random=3"
                                sx={{
                                    aspectRatio: { xs:'16/9' , sm:'3/4' , md:'9/16' },
                                    maxHeight:{ xs:190, sm:190 , md:300 },
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                        </SyledCard>
                    </Grid>
                </Grid>

                {/* Image Grid */}
                {/* <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, sm:6, md: 4 }}>
                       {/* <Card >  sx={{ maxWidth: 345 }} */}





                            {/* <CardMedia
                                component="img"
                                height="200"
                                image='https://picsum.photos/800/450?random=1'
                                alt="Teamwork 1"
                    </Grid>
                    <Grid item size={{ xs: 12, sm:6, md: 4 }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image='https://picsum.photos/800/450?random=2'
                                alt="Teamwork 2"
                            />
                        </Card>
                    </Grid>
                    <Grid item size={{ xs: 12, sm:6, md: 4 }}>
                        <Card>
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
                </Grid> */}
            </Box>


            <CompanyCulture2 />
            <AboutCompany />


            {/* <Box py={8}>
                <Container maxWidth="lg">
                    <Box textAlign="center" mb={4}>
                    <Typography variant="overline" color="textSecondary">
                        OPEN POSITIONS
                    </Typography>
                    <Typography ref={jobOpeningsRef} variant="h4" fontWeight="bold" gutterBottom>
                        Current job openings
                    </Typography>
                    </Box>


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


                    <Box mb={4}>
                    <Typography variant="h6" fontWeight="bold">
                        Design & UX, Engineering
                    </Typography>
                    <Typography color="textSecondary" variant="body2" mb={2}>
                        User experience and design are top priorities at theFront.
                    </Typography>
                    <Badge color="primary" badgeContent={`${jobs.length} openings`} />
                    </Box>


                    <Grid container spacing={2}>
                        {jobs.map((job, index) => (
                            <Grid item size={{ xs: 12}} key={index}>
                                <Card variant="outlined">
                                    <CardContent>
                                        <Grid container alignItems="center" >
                                            <Stack direction={{ xs: 'column', md: 'row' }} size={{ xs: 8, xm: 9, lg: 10}}>
                                                <Grid item size={{ xs: 12,  md: 8}}>
                                                    <Typography variant="h6" fontWeight="bold">
                                                        {job.title}
                                                    </Typography>
                                                    <Typography color="textSecondary">{job.description}</Typography>
                                                </Grid>
                                                <Grid item size={{ xs: 12,  md: 4}} sx={{ display: 'flex', alignItems: 'center', justifyContent:({ xs: 'flex-start',  md: 'flex-end'}), py: 4 }}>
                                                    <Typography color="textSecondary" variant="body2">
                                                        {job.team} / {job.location}
                                                    </Typography>
                                                </Grid>
                                            </Stack>
                                            <Grid item size={{ xs: 4, sm: 3,  lg: 2}} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', py: 4 }}>
                                                <Button variant="contained" color="primary">Apply</Button>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box> */}



            <Box py={8} sx={{ backgroundColor: theme.palette.background.default }}>
                <Container maxWidth="lg">
                    {/* Section Header */}
                    <Box textAlign="center" mb={6}>
                        <Typography
                            variant="overline"
                            color="primary"
                            sx={{ fontWeight: 600, letterSpacing: 1.2 }}
                        >
                            OPEN POSITIONS
                        </Typography>
                        <Typography
                            variant="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                            mt: 1,
                            [theme.breakpoints.down('sm')]: { fontSize: '2rem' },
                            }}
                            ref={jobOpeningsRef}
                        >
                            Current Job Openings
                        </Typography>
                    </Box>
                    <Grid container spacing={{  xs: 3, sm: 1, md: 3}} mb={6} justifyContent="center">
                        <Grid item sx={{alignItems:'center', justifyContent:"center", display: 'flex'}} size={{  xs: 12,  sm: 4}}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id='Roles'>Roles</InputLabel>
                                <Select
                                    labelId="roles-label"
                                    defaultValue={roleFilter ?  roleFilter : ''}
                                    label="Roles"
                                    sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'}, backgroundColor: theme.palette.background.paper,}}
                                    value={roleFilter}
                                    onChange={handleRoleChange}
                                >
                                    {trabalhinho.propi.Jobsdist.map((jobby, index) => (
                                        <MenuItem key={index} value={jobby}>{jobby}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={{alignItems:'center', justifyContent:"center", display: 'flex'}} size={{  xs: 12,  sm: 4}}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id='Teams'>Teams</InputLabel>
                                <Select
                                    labelId="teams-label"
                                    defaultValue={teamFilter ?  teamFilter : ''}
                                    label="Teams"
                                    sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'}, backgroundColor: theme.palette.background.paper,}}
                                    value={teamFilter}
                                    onChange={handleTeamChange}
                                >
                                    {trabalhinho.propi.Surroundist.map((jobby, index) => (
                                        <MenuItem key={index} value={jobby}>{jobby}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item sx={{alignItems:'center', justifyContent:"center", display: 'flex'}} size={{  xs: 12,  sm: 4}}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id='Locations'>Locations</InputLabel>
                                <Select
                                    labelId="locations-label"
                                    defaultValue={locationFilter ?  locationFilter : ''}
                                    label="Locations"
                                    sx={{'& .MuiSelect-select': {  display: 'flex',  alignItems: 'center'}, backgroundColor: theme.palette.background.paper,}}
                                    value={locationFilter}
                                    onChange={handleLocationChange}
                                >
                                    {trabalhinho.propi.Placesdist.map((jobby, index) => (
                                        <MenuItem key={index} value={jobby}>{jobby}</MenuItem>))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>






        {/* Job Category Section */}
        {/* <Box mb={4}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Design & UX, Engineering
          </Typography>
          <Typography color="textSecondary" variant="body1" mb={2}>
            User experience and design are top priorities at theFront.
          </Typography>
          <Badge
            color="primary"
            badgeContent={`${jobs.length} openings`}
            sx={{ '& .MuiBadge-badge': { fontSize: '0.9rem', fontWeight: 600 } }}
          />
        </Box> */}


                    <Grid container spacing={3}>
                        {trabalhinho.trabalhinho.map((job, index) => (
                            <Grid item size={{ xs: 12}} key={index}
                                onClick={() => {
                                    console.log('Clicked blog ID:', job.id);
                                    router.get(routing('jobshow', job.id));
                                }}
                            >
                                <Card
                                    variant="outlined"
                                    sx={{
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        boxShadow: theme.shadows[4],
                                        transform: 'translateY(-4px)',
                                    },
                                    width: '100%',}}
                                >
                                    <CardContent >
                                        <Grid container alignItems="center" spacing={2}>
                                            <Grid item size={{ xs: 12,  md: 8}}> {/*, sm: 10 */}
                                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ textAlign: { xs: 'center', md: 'left' }}}>
                                                    {job.title}
                                                </Typography>
                                                <Typography color="textSecondary" variant="body2"  sx={{ display: { xs: 'none', md: 'block' } }} >
                                                    {job.subsentence}
                                                </Typography>
                                            </Grid>
                                            <Grid item size={{ xs: 12,  md: 4}} container direction="row"  sx={{ justifyContent: "space-between", alignItems: "center", mx: { xs: 0, sm: 2, md: 0 } }}>
                                                <Grid item size={{ xs: 12, sm: 6,   md: 8}} sx={{ textAlign: { xs: 'center',  sm: 'left', md: 'right' } }}>
                                                    <Typography color="textSecondary" variant="body2">
                                                    {job.surroundings} / {job.location}
                                                    </Typography>
                                                </Grid>
                                                <Grid item size={{ xs: 12, sm: 6,  md: 4}} sx={{ textAlign: { xs: 'center',  sm: 'right', md: 'left' }}}>
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        fullWidth
                                                        sx={{ maxWidth:300, mt: { xs: 2, md: 0 } }}
                                                        onClick={() => {
                                                            console.log('Clicked job ID:', job.id);
                                                            router.get(routing('jobshow', job.id));
                                                        }}
                                                    >
                                                        Apply
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </Box>
        </>
    )
}


// import * as React from 'react';


export default function Job(props) {

    console.log("prop33", props);
    console.log("prop99", props.Openings.data);


    // const jobOpeningsRef = React.useRef(null)

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
        {/* <WorkWithUs jobOpeningsRef={jobOpeningsRef} />
        <CompanyCulture2 />
        <AboutCompany />
        <JobOpenings ref={jobOpeningsRef} /> */}
        <Connector propi={props} trabalhinho={props.Openings.data} />

      </Container>
      {/* <Footer /> */}
        {/* // </AppTheme> */}
    </ClientLayout>
  );
}
