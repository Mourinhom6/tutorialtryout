// import { Link } from "@inertiajs/react";
// import * as React from 'react';
// import { alpha } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import AppNavbar from '../Components/AppNavbar';
// import Header from '../Components/Header';
// import MainGrid from '../Components/MainGrid';
// import SideMenu from '../Components/SideMenu';
// import { chartsCustomizations, dataGridCustomizations, datePickersCustomizations, treeViewCustomizations,} from '../Components/customizations/';

// const xThemeComponents = {
//   ...chartsCustomizations,
//   ...dataGridCustomizations,
//   ...datePickersCustomizations,
//   ...treeViewCustomizations,
// };

// export default function WorkSpace(props) {
//   return (
//     <AppTheme {...props} themeComponents={xThemeComponents}>
//       <CssBaseline enableColorScheme />
//       <Box sx={{ display: 'flex' }}>
//         <SideMenu />
//         <AppNavbar />
//         {/* Main content */}
//         <Box
//           component="main"
//           sx={(theme) => ({
//             flexGrow: 1,
//             backgroundColor: theme.vars
//               ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
//               : alpha(theme.palette.background.default, 1),
//             overflow: 'auto',
//           })}
//         >
//           <Stack
//             spacing={2}
//             sx={{
//               alignItems: 'center',
//               mx: 3,
//               pb: 5,
//               mt: { xs: 8, md: 0 },
//             }}
//           >
//             <Header />
//             <MainGrid />
//           </Stack>
//         </Box>
//       </Box>
//     </AppTheme>
//   );
// }

// import MiniDrawer from '../OriginalComp/MiniDrawer';
// import { Link } from "@inertiajs/react";

// export default function Layout({ children }) {
//     return (
//         <>
//         <MiniDrawer/>

//             <main>{children}</main>
//         </>
//     );
// }
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SearchIcon from '@mui/icons-material/Search';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LayersIcon from '@mui/icons-material/Layers';
import { Link, router, Head, useForm, usePage } from "@inertiajs/react";
import { AppProvider, type Session, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout, ThemeSwitcher, type SidebarFooterProps,} from '@toolpad/core/DashboardLayout';
import { PageContainer, PageContainerToolbar } from '@toolpad/core/PageContainer';
import {useRoute} from "&/ziggy"
import Error from "@/Components/Error";

import { CustomRouter } from '@/Components/DashBoard/CustomRouter';
import Breadcums from "@/Components/DashBoard/Breadcums";
// import AppNavbar from '@/Components/DashBoard/AppNavbar';
import SideMenuMobile from '@/Components/DashBoard/SideMenuMobile';

import isMobileFunction from "@/MediaQuery"

import Badge, { badgeClasses } from '@mui/material/Badge';



const route = useRoute();


function MenuButton({ showBadge = false, ...props }) {
    return (
      <Badge
        color="error"
        variant="dot"
        invisible={!showBadge}
        sx={{ [`& .${badgeClasses.badge}`]: { right: 2, top: 2 } }}
      >
        <IconButton size="small" {...props} />
      </Badge>
    );
}


export const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items',
  },
  {
    kind: 'page',
    title: 'Dashboard',
    icon: <DashboardIcon />,
    pattern: '/dashboard',
    segment: 'dashboard',
  },
  {
    kind: 'page',
    title: 'Projects',
    icon: <AssuredWorkloadIcon />,
    pattern: '/project',
    segment: 'project',
  },
  {
    kind: 'page',
    title: 'All Tasks',
    icon: <AssignmentIcon />,
    pattern: '/task',
    segment: 'task',
    // pattern: route('task.index'),
    // segment: route('task.index'),
  },
  {
    kind: 'page',
    title: 'Users',
    icon: <PeopleAltIcon />,
    pattern: '/user',
    segment: 'user',
  },
  {
    kind: 'page',
    title: 'My Tasks',
    icon: <AssignmentLateIcon />,
    pattern: '/task/my-tasks',
    segment: 'task/my-tasks',
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'profile',
    title: 'All Tasks',
   icon: <BarChartIcon />,
    children: [
      {
        kind: 'page',
        title: 'Users',
        icon: <DescriptionIcon />,
        pattern: '/create',
        segment: 'create',
      },
      {
        kind: 'page',
        title: 'Profile',
        icon: <DescriptionIcon />,
        pattern: '/edit',
        segment: 'edit',
      },
    ],
  },
  {
    segment: 'license',
    title: 'License',
    icon: <LayersIcon />,
  },
];




const demoTheme = createTheme({
    cssVariables: {
      colorSchemeSelector: 'data-toolpad-color-scheme',
    },
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#1976d2', // Custom primary color for light mode
          },
          secondary: {
            main: '#ff4081', // Custom secondary color
          },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
          text: {
            primary: '#000000',
            secondary: '#555555',
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: '#90caf9', // Custom primary color for dark mode
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#bbbbbb',
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

// logo: { mini ? <img src="https://picsum.photos/50/40?random=1" alt="MUI logo" />, : <img src="https://picsum.photos/50/40?random=1" alt="MUI logo" />,

const BRANDING = {
    logo: <img src="https://picsum.photos/50/40?random=1" alt="MUI logo" />,
    title: 'WorkSpace',
  };
function ToolbarActionsSearch() {

    const [open, setOpen] = React.useState(false);

      const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const { isMobile } = isMobileFunction();

    return (
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
        >
            {/* Left Section: Breadcrumbs */}
            <Breadcums />

            {/* Right Section: Search and Theme Switcher */}
            <Stack direction="row" spacing={2} alignItems="center">
                <Tooltip title="Search" enterDelay={1000}>
                    <div>
                        <IconButton
                        type="button"
                        aria-label="search"
                        sx={{
                            display: { xs: 'inline', sm: 'none' },
                        }}
                        >
                        <SearchIcon />
                        </IconButton>
                    </div>
                </Tooltip>

                <TextField
                    label="Search"
                    variant="outlined"
                    size="small"
                    slotProps={{
                        input: {
                        endAdornment: (
                            <IconButton type="button" aria-label="search" size="small">
                            <SearchIcon />
                            </IconButton>
                        ),
                        sx: { pr: 0.5 },
                        },
                    }}
                    sx={{ display: { xs: 'none', sm: 'inline-block' }, mr: 1 }}
                />

                <ThemeSwitcher />
            {/* </Stack> */}
                {isMobile ? (
                    <MenuButton aria-label="menu" onClick={() => toggleDrawer(true)}>
                        <MenuRoundedIcon />
                    </MenuButton>
                    <SideMenuMobile open={open} toggleDrawer={toggleDrawer} />
                ) : null}
            </Stack>

        </Stack>
      );
    }



function SidebarFooter({ mini }: SidebarFooterProps) {
return (
    <Typography
    variant="caption"
    sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden',  display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
    {mini ? '© SMIM' : `© Copyright ${new Date().getFullYear()}  Self Made FleetMan, Lda`}
    </Typography>
);
}
// {authUser},

    // Use the default function export
export default function WorkSpace(props: { children: React.ReactNode },) {

    const { isMobile } = isMobileFunction();
    const { props: pageProps } = usePage();
    const routerCust = CustomRouter();
    console.log("CustomRouter:", routerCust);
    const { error } = usePage().props;
    if (error) {
        return <Error status={error} />;
    }
    console.log("ERROR:", error);
    console.log("Props:", pageProps);
    console.log("Props_authUser:", pageProps.authUser.name);
    // console.log("Props_auth:", pageProps.auth.user.email);
    const [session, setSession] = React.useState<Session | null>({
        user: {
            name: pageProps.authUser.name ? pageProps.authUser.name : 'Naomi Holt',
            email: pageProps.authUser.email ? pageProps.authUser.email : 'naomiholt@gmail.com',
            image: pageProps.authUser.photo ? pageProps.authUser.photo : 'http://localhost/storage/photos/naomi.jpg',
        },
      });


    const authentication = React.useMemo(() => {
        return {
          signIn: () => {
            setSession({
              user: {
                name: pageProps.authUser.name ? pageProps.authUser.name : 'Naomi Holt',
                email: pageProps.authUser.email ? pageProps.authUser.email : 'naomiholt@gmail.com',
                image: pageProps.authUser.photo ? pageProps.authUser.photo : 'http://localhost/storage/photos/naomi.jpg',
              },
            });
          },
          signOut: () => {
            router.post(route("logout"), {}, {
              onFinish: () => {
                setSession(null);
              },
            });
          },
        };
    }, [pageProps]);

        console.log('demoTheme:', demoTheme);
  return (
    <AppProvider
        navigation={NAVIGATION}
        //   session={session}
        // authentication={authentication}
        session={isMobile ? null : session}
        authentication={isMobile ? null : authentication}
        branding={BRANDING}
        theme={demoTheme}
        router={routerCust}
    >
        {/* <AppNavbar /> */}
        <DashboardLayout  defaultSidebarCollapsed={true} hideNavigation={isMobile} slots={{ toolbarActions: ToolbarActionsSearch, sidebarFooter: SidebarFooter }} slotProps={{ toolbarAccount: {localeText: {signInLabel: 'Entrar', signOutLabel: 'Sair'} }  }}>
            <PageContainer>{props.children}</PageContainer>
            {/* <PageContainer>{children}</PageContainer> */}
        </DashboardLayout>
    </AppProvider>
  );
}
