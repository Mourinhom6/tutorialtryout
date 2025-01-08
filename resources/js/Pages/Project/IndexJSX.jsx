import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import MenuItem from '@mui/material/MenuItem';
import TextInput from "@/Components/TextInput";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';

import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Popover from '@mui/material/Popover';

import {ClientTheme} from '@/Components/AppTheme';
import { ThemeProvider } from '@mui/material/styles';


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

import isMobileFunction from "@/MediaQuery"
import useIsSuperTiny from "@/MediaQuery"


// import {useRoute} from "&/ziggy"
// const route = useRoute();

// import { useTheme } from '@mui/material/styles';
// const theme = useTheme();
// console.log('theme3:', theme);

// console.log('ClientTheme:', ClientTheme);

// const SyledCard = styled(Card)(({ theme }) => {
//     console.log('SyledCard theme2:', theme);
//     console.log('SyledCard theme.palette2:', theme.palette);
//     console.log('SyledCard theme.vars2:', theme.vars);

//     return {
//       display: 'flex',
//       flexDirection: 'column',
//       padding: 0,
//       height: '100%',
//       backgroundColor: (theme.vars || theme).palette.background.paper,
//       '&:hover': {
//         backgroundColor: 'transparent',
//         cursor: 'pointer',
//       },
//       '&:focus-visible': {
//         outline: '3px solid',
//         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
//         outlineOffset: '2px',
//       },
//     };
//   });

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

function Postsoffice({mdsize, blogs}){

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



    // const clientTheme = ClientTheme();

    console.log('mdsize:', mdsize);


    console.log('blogs5:', blogs);


    const visibilityForm = useForm({
        // We don't need to initialize with any data
    });
    // console.log('xiggy useRoute():', useRoute());

    // if (e.key !== "Enter") return;
    //     searchFieldChanged(name, e.target.value);

    const handleAction = (key, id_project) => {
        console.log('key:', key);
        console.log('id_project:', id_project);

        switch (key) {
            case 'Visibility':
                console.log(' Entrou Visibility');
                visibilityForm.put(route("project.visibility", id_project), {
                    preserveScroll: true,
                    onSuccess: () => {
                        // Handle success (e.g., show a success message or update local state)
                        console.log('Visibility updated successfully');
                    },
                    onError: (errors) => {
                        // Handle errors
                        console.error('Error updating visibility:', errors);
                    },
                });
                break;
            case 'Edit':
                console.log(' Entrou Edit');
                router.visit(route('project.edit', id_project));
                break;
            case 'Delete':
                console.log(' Entrou Delete');
                router.delete(route('project.destroy',{ project: id_project }), {
                    onSuccess: () => {

                        router.reload({ only: ['projects'] });
                    },
                });
                break;
            case 'Save':
                console.log(' Entrou Save');
                router.get(route('project.show', { project: id_project }));
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

            <Grid container spacing={2} columns={12}>
                {/* First two large cards */}
                {/* {projects.slice(0, 2).map((edits, index) => ( */}
                {blogs.map((projects) => (
                    <Grid item size={{ xs: 12, sm: mdsize }} key={projects.id}>
                        <SyledCard variant="outlined" sx={{ position: 'relative' }}>
                            <CardMedia
                                component="img"
                                alt={projects.title}
                                image={projects.img}
                                sx={{
                                    aspectRatio: '16 / 9',
                                    borderBottom: '1px solid',
                                    borderColor: 'divider',
                                }}
                            />
                            <SyledCardContent>
                                <Typography gutterBottom variant="caption" component="div">
                                    {projects.tag}
                                </Typography>
                                <Typography gutterBottom variant="h6" component="div">
                                    {projects.title}
                                </Typography>
                                <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                    {projects.description}
                                </StyledTypography>

                            </SyledCardContent>
                            <SpeedDial
                                ariaLabel="SpeedDial basic example"
                                sx={{
                                    position: 'absolute',
                                    bottom: 16,
                                    right: 16,
                                }}
                                icon={<SpeedDialIcon />}
                                >
                                <SpeedDialAction
                                    key="Visibility"
                                    icon={projects.state == 'Visiable' ? <RemoveRedEyeRoundedIcon /> : <VisibilityOffRoundedIcon />}
                                    tooltipTitle={projects.state == 'Visiable' ? 'Esconder' : 'Mostra'}
                                    onClick={() => { handleAction('Visibility', projects.id)} }

                                />
                                {/* <Link href={route('project.show', projects.id)}> */}
                                <SpeedDialAction
                                    key="Save"
                                    icon={<SaveIcon />}
                                    tooltipTitle="Save"
                                    onClick={() => { handleAction('Save', projects.id)} }
                                />
                                {/* </Link> */}
                                <SpeedDialAction
                                    key="Delete"
                                    icon={<DeleteRoundedIcon />}
                                    tooltipTitle="Delete"
                                    onClick={() => { handleAction('Delete', projects.id)} }
                                />
                                <SpeedDialAction
                                    key="Edit"
                                    icon={<EditRoundedIcon />}
                                    tooltipTitle="Edit"
                                    onClick={() => { handleAction('Edit', projects.id)} }
                                />

{/* const actions = [
    {icon: projects.state == 'Visable' ? <RemoveRedEyeRoundedIcon /> : <VisibilityOffRoundedIcon />, name: projects.state == 'Visable' ? 'Esconder' : 'Mostra'},
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <EditRoundedIcon />, name: 'Edit' },
  ]; */}
                                </SpeedDial>
                        </SyledCard>
                    </Grid>
                ))}
            </Grid>
        </ThemeProvider>
    )
}

// function BasicSpeedDial() {
//     return (
//       <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
//         <SpeedDial
//           ariaLabel="SpeedDial basic example"
//           sx={{ position: 'absolute', bottom: 16, right: 16 }}
//           icon={<SpeedDialIcon />}
//         >
//           {actions.map((action) => (
//             <SpeedDialAction
//               key={action.name}
//               icon={action.icon}
//               tooltipTitle={action.name}
//             />
//           ))}
//         </SpeedDial>
//       </Box>
//     );
//   }


export default function Index({ auth, projects, queryParams = null, success, breadcum, blogs2,}) {
    const [multiplier, setMultiplier] = React.useState(4); // Replace initialValue with your default value

    console.log("blogs2", blogs2);


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

    router.get(route("project.index"), queryParams);
  };
  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;

    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction === "asc") {
        queryParams.sort_direction = "desc";
      } else {
        queryParams.sort_direction = "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }
    router.get(route("project.index"), queryParams);
  };

  const deleteProject = (project) => {
    if (!window.confirm("Are you sure you want to delete the project?")) {
      return;
    }
    router.delete(route("project.destroy", project.id));
  };

  return (
    <WorkSpace
      breadcum={breadcum}
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Projects
          </h2>
          <Link
            href={route("project.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
      <Head title="Projects" />

      <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Projects
          </h2>
          <Link
            href={route("project.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {success && (
            <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
              {success}
            </div>
          )}
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="overflow-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <TableHeading
                        name="id"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        ID
                      </TableHeading>
                      <th className="px-3 py-3">Image</th>
                      <TableHeading
                        name="name"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Name
                      </TableHeading>

                      <TableHeading
                        name="status"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Status
                      </TableHeading>

                      <TableHeading
                        name="created_at"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Create Date
                      </TableHeading>

                      <TableHeading
                        name="due_date"
                        sort_field={queryParams.sort_field}
                        sort_direction={queryParams.sort_direction}
                        sortChanged={sortChanged}
                      >
                        Due Date
                      </TableHeading>
                      <th className="px-3 py-3">Created By</th>
                      <th className="px-3 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                    <tr className="text-nowrap">
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3">
                        <TextInput
                          sx={{ width: "100%" }}
                          defaultValue={queryParams.name}
                          label="Project Name"
                          onBlur={(e) =>
                            searchFieldChanged("name", e.target.value)
                          }
                          onKeyPress={(e) => onKeyPress("name", e)}
                        />
                      </th>
                      <th className="px-3 py-3">
                        {/* <SelectInput
                          className="w-full"
                          defaultValue={queryParams.status}
                          onChange={(e) =>
                            searchFieldChanged("status", e.target.value)
                          }
                        >
                          <option value="">Select Status</option>
                          <option value="pending">Pending</option>
                          <option value="in_progress">In Progress</option>
                          <option value="completed">Completed</option>
                        </SelectInput> */}

                        <SelectInput
                            label="Select Status"
                            value={queryParams.status || ""}
                            onChange={(e) => searchFieldChanged("status", e.target.value)}
                            sx={{ width: "100%" }}
                            >
                            <MenuItem value="">
                                <em>Select Status</em>
                            </MenuItem>
                            <MenuItem value="pending">Pending</MenuItem>
                            <MenuItem value="in_progress">In Progress</MenuItem>
                            <MenuItem value="completed">Completed</MenuItem>
                        </SelectInput>

                      </th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {projects.data.map((project) => (
                      <tr
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        key={project.id}
                      >
                        <td className="px-3 py-2">{project.id}</td>
                        <td className="px-3 py-2">
                          <img src={project.image_path} style={{ width: 60 }} />
                        </td>
                        <th className="px-3 py-2 text-gray-100 text-nowrap hover:underline">
                          <Link href={route("project.show", project.id)}  onClick={() => console.log(`Clicked on project: ${project.id}`)}>
                          {/* <Link href={route("project.show.with.blog",{ blog: project.id } ,{ project: project.id })}  onClick={() => console.log(`Clicked on project: ${project.id}`)}> */}

                            {project.name}
                          </Link>
                        </th>
                        <td className="px-3 py-2">
                          <span
                            className={
                              "px-2 py-1 rounded text-white " +
                              PROJECT_STATUS_CLASS_MAP[project.status]
                            }
                          >
                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {project.created_at}
                        </td>
                        <td className="px-3 py-2 text-nowrap">
                          {project.due_date}
                        </td>
                        <td className="px-3 py-2">{project.createdBy.name}</td>
                        <td className="px-3 py-2 text-nowrap">
                          <Link
                            href={route("project.edit", project.id)}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                          >
                            Edit
                          </Link>
                          <button
                            onClick={(e) => deleteProject(project)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination links={projects.meta.links} />

            </div>
          </div>
        </div>
      </div>
        <Box component="section" sx={{ pb: 4, display: "flex", justifyContent: "flex-end" }}>
            <ViewModeSelector
            options={viewModes}
            // defaultValue="grid"
            defaultValue={getDefaultViewMode()}
            onChange={handleViewModeChange}
            openSnackbar={openSnackbar}
            />
        </Box>



      <Postsoffice mdsize={multiplier} blogs={dataproj.blogs2.data} /> {/* queryParams={queryParams} */}
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

    </WorkSpace>
  );
}

