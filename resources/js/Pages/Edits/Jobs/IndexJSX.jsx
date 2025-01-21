import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";

import TextInput from "@/Components/TextInput";
import * as React from 'react';


import Grid from '@mui/material/Grid2';

// import Popover from '@mui/material/Popover';

import {ClientTheme} from '@/Components/AppTheme';
import { ThemeProvider } from '@mui/material/styles';

import { useTheme, useMediaQuery, CardMedia, Container, Typography, Chip, Box, Card, CardContent, Button, MenuItem, Select, FormControl, InputLabel, Stack, Badge } from '@mui/material';


import WorkSpace  from "@/Layouts/WorkSpace";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import { Head, Link, router, usePage, useForm } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import ViewModeSelector from "@/Components/DashBoard/ViewSwitch";

import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import GridViewIcon from '@mui/icons-material/GridView';
import ViewListIcon from '@mui/icons-material/ViewList';
import TableRowsIcon from '@mui/icons-material/TableRows';
import FullscreenIcon from '@mui/icons-material/Fullscreen';

import { styled } from '@mui/material/styles';

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import Snackbar from '@mui/material/Snackbar';
import Layout from '@/Components/DashBoard/LayoutTeams';

import isMobileFunction from "@/MediaQuery"
import useIsSuperTiny from "@/MediaQuery"

import {useRoute} from "&/ziggy"


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

  const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
      paddingBottom: 16,
    },
  });

  const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });



const viewModes = [
    { icon: <FullscreenIcon />, value: 'Solo', label: 'Grid View', multiplier: 12, support: 4 },
    { icon: <GridViewIcon />, value: 'Duo', label: 'List View', multiplier: 6, support: 2 },
    { icon: <TableRowsIcon />, value: 'grid', label: 'Compact View', multiplier: 4, support: 1 },
    { icon: <ViewListIcon />, value: 'Tabela', label: 'Expanded View', multiplier: 0, support: 4 },
  ];

// function Posts({mdsize, blogs, queryParams}){

function Postsoffice({mdsize, jobs}){

    // const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
    //     name: user.name,
    //     email: user.email,
    // });

    // const submit = (e) => {
    //     e.preventDefault();

    //     patch(route('profile.update'));
    // };

    // console.log('ClientTheme5:', ClientTheme);
    const theme2 = ClientTheme();

    // const theme = useTheme();
      const isMobile = useMediaQuery(theme2.breakpoints.down('sm'));



    // const clientTheme = ClientTheme();

    console.log('mdsize:', mdsize);


    console.log('jobs5:', jobs);
    // console.log('xiggy useRoute():', useRoute());

    // if (e.key !== "Enter") return;
    //     searchFieldChanged(name, e.target.value);

    const { data, setData, patch, progress, processing, errors } = useForm({
        id: null,
        // tag: null,
        // title: null,
    })

    console.log('useform:', useForm());
    function submit(e) {
        e.preventDefault();
        put("/edits");
    }

    const routing = useRoute();


    const handleAction = (key, id_blogs) => {
        console.log('key:', key);
        console.log('id_blogs:', id_blogs);

        switch (key) {
            case 'Visibility':
                console.log(' Entrou Visibility', id_blogs);
                router.patch(routing("edits.update",{edit: 'id_blogs'}))
                //     preserveScroll: true,
                //     onSuccess: () => {
                //         console.log('Visibility updated successfully');
                //     },
                //     onError: (errors) => {
                //         console.error('Error updating visibility:', errors);
                //     },
                // });
                break;
                //     preserveScroll: true,
                //     onSuccess: () => {
                //         // Handle success (e.g., show a success message or update local state)
                //         console.log('Visibility updated successfully');
                //     },
                //     onError: (errors) => {
                //         // Handle errors
                //         console.error('Error updating visibility:', errors);
                //     },
                // });
                // break;
            case 'Edit':
                console.log(' Entrou Edit');
                router.visit(routing('edits.edit', id_blogs));
                break;
            case 'Delete':
                console.log(' Entrou Delete');
                router.delete(routing('edits.destroy',id_blogs), {
                    onSuccess: () => {

                        router.reload({ only: ['projects'] });
                    },
                });
                break;
            case 'Save':
                console.log(' Entrou Save');
                router.get(routing('edits.show', { edit: id_blogs }));
                // router.get(route("project.show.with.blog",{ blog: project.id } ,{ project: project.id }))
                // router.visit(route('project.show', id_project));
                //  {
                //     onSuccess: () => {
                //         router.reload({ only: ['projects'] });
                //     },
                // });
                break;
        }

    };




    return(
        <ThemeProvider theme={theme2} >

             <Box py={8} sx={{ backgroundColor: theme2.palette.background.default }}>
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
                            [theme2.breakpoints.down('sm')]: { fontSize: '2rem' },
                            }}
                        >
                            Current Job Openings
                        </Typography>
                    </Box>
                    {/* <Grid container spacing={{  xs: 3, sm: 1, md: 3}} mb={6} justifyContent="center">
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
                    </Grid> */}

                    <Grid container spacing={3}>
                        {jobs.map((job, index) => (
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
                                        boxShadow: theme2.shadows[4],
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

        </ThemeProvider>
    )
}

// ${projects.id}

export default function Index({ auth, edits, queryParams = null, success, breadcum,}) {
// export default function Index({ auth, projects, queryParams = null, success, breadcum,}) {

    const [multiplier, setMultiplier] = React.useState(4); // Replace initialValue with your default value


    // var multiplier = 4;
    const { isMobile } = isMobileFunction();
    const {isSuperTiny} = useIsSuperTiny();

    const [snackbarOpen, setSnackbarOpen] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');

    const openSnackbar = (message) => {
        setSnackbarMessage(message);
        setSnackbarOpen(true);
    };

    const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    setSnackbarOpen(false);
    };
    console.log('success:', success);
    console.log('edits', edits);

    const handleViewModeChange = (selectedOption) => {
        console.log('Selected Option:', selectedOption);
        console.log('Selected Multiplier:', selectedOption.multiplier);
        setMultiplier(selectedOption.multiplier);
        console.log('Updated multiplier:', selectedOption.multiplier);
      };

    //   const getDefaultViewMode = () => {
    //     if (isMobile && isSuperTiny) return 'Solo';
    //     if ((!(isMobile)) && (!(isSuperTiny))) return 'grid';
    //     if (isMobile && (!(isSuperTiny))) return 'Duo';
    //   };

    const getDefaultViewMode = () => {
        console.log("isSuperTiny:", isSuperTiny, "isMobile:", isMobile);

        if (isSuperTiny) return 'Solo';
        if (isMobile) return 'Duo';
        return 'grid';
      };


    const { props: dataproj } = usePage();
    // const { dataproj } = usePage();
    console.log("dataproj", dataproj);


  queryParams = queryParams || {};

  console.log("Received breadcrumbs:", breadcum);
//   const BreadCrumbstry = router.get(route("project.index"), breadcum);

  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }

    router.get(routing("project.index"), queryParams);
  };
//   const onKeyPress = (name, e) => {
//     if (e.key !== "Enter") return;

//     searchFieldChanged(name, e.target.value);
//   };

//   const sortChanged = (name) => {
//     if (name === queryParams.sort_field) {
//       if (queryParams.sort_direction === "asc") {
//         queryParams.sort_direction = "desc";
//       } else {
//         queryParams.sort_direction = "asc";
//       }
//     } else {
//       queryParams.sort_field = name;
//       queryParams.sort_direction = "asc";
//     }
//     router.get(route("project.index"), queryParams);
//   };

//   const deleteProject = (project) => {
//     if (!window.confirm("Are you sure you want to delete the project?")) {
//       return;
//     }
//     router.delete(route("project.destroy", project.id));
//   };

  return (
    <WorkSpace
      breadcum={breadcum}
      user={auth.user}

    >
      <Head title="Projects" />

            <Box component="section" sx={{ pb: 4, display: "flex", justifyContent: "flex-end" }}>
                <ViewModeSelector
                options={viewModes}
                // defaultValue="grid"
                defaultValue={getDefaultViewMode()}
                onChange={handleViewModeChange}
                openSnackbar={openSnackbar}
                />
            </Box>

            <Postsoffice mdsize={multiplier} jobs={dataproj.Openings.data} /> {/* queryParams={queryParams} */}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={snackbarOpen}
                    autoHideDuration={6000}
                    onClose={handleCloseSnackbar}
                    message={snackbarMessage}
                />
            {/* </Grid>
        </Grid> */}
            {/* <Layout.SidePane/> */}


    </WorkSpace>
  );
}

