import * as React from 'react';
import { Link, router, Head, useForm, usePage } from "@inertiajs/react";
// import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

// import MenuButton from './MenuButton';
// import MenuContent from './MenuContent';
// import CardAlert from './CardAlert';

import Badge, { badgeClasses } from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';

import {useRoute} from "&/ziggy"
const route = useRoute();

const mainListItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, navigate: route('dashboard') },
  { text: 'Projects', icon: <AssuredWorkloadIcon />, navigate: route('project.index') },
  { text: 'All Tasks', icon: <AssignmentIcon />, navigate: route('task.index') },
  { text: 'Users', icon: <PeopleAltIcon />, navigate: route('user.index') },
  { text: 'My Tasks', icon: <AssignmentLateIcon />, navigate: route('task.myTasks') },
];

const secondaryListItems = [
  { text: 'Profile', icon: <BarChartIcon />, navigate: route('dashboard') },
  { text: 'License', icon: <LayersIcon />, navigate: route('license.index') },
  { text: 'Edits', icon: <EditNoteRoundedIcon />, navigate: route('edits.index') },
];

// function MenuContent() {
//   return (
//     <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
//       <List dense>
//         {mainListItems.map((item, index) => (
//           <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton selected={index === 0}>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <List dense>
//         {secondaryListItems.map((item, index) => (
//           <ListItem key={index} disablePadding sx={{ display: 'block' }}>
//             <ListItemButton>
//               <ListItemIcon>{item.icon}</ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Stack>
//   );
// }

function MenuContent() {
    return (
      <Stack sx={{ flexGrow: 1, p: 1, justifyContent: 'space-between' }}>
        <List dense>
          {mainListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                href={item.navigate}
                selected={index === 0}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <List dense>
          {secondaryListItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                component={Link}
                href={item.navigate}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    );
  }



function CardAlert() {
    return (
      <Card variant="outlined" sx={{ m: 1.5, p: 1.5 }}>
        <CardContent>
          <AutoAwesomeRoundedIcon fontSize="small" />
          <Typography gutterBottom sx={{ fontWeight: 600 }}>
            Plan about to expire
          </Typography>
          <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary' }}>
            Enjoy 10% off when renewing your plan today.
          </Typography>
          <Button variant="contained" size="small" fullWidth>
            Get the discount
          </Button>
        </CardContent>
      </Card>
    );
  }
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




export default function SideMenuMobile({ open, toggleDrawer }) {
    const { props: pageProps } = usePage();

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


  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: 'background.paper',
        },
      }}
    >
      <Stack
        sx={{
          maxWidth: '70dvw',
          height: '100%',
        }}
      >
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack
            direction="row"
            sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}
          >
            <Avatar
              sizes="large"
              alt={pageProps.authUser.name ? pageProps.authUser.name : 'Naomi Holt'}
              src={pageProps.authUser.photo ? pageProps.authUser.photo : 'http://localhost/storage/photos/naomi.jpg'}
              sx={{ width: 35, height: 35 }}
            />
            <Typography component="p" variant="h6">
              {pageProps.authUser.name ? pageProps.authUser.name : 'Naomi Holt'}
            </Typography>
          </Stack>
          <MenuButton showBadge>
            <NotificationsRoundedIcon />
          </MenuButton>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>
        <CardAlert />
        <Stack sx={{ p: 2 }}>
          <Button variant="outlined" onClick={authentication.signOut} fullWidth startIcon={<LogoutRoundedIcon />}>
            Logout
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
