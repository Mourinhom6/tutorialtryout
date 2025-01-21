import * as React from 'react';
import { createTheme, ThemeProvider, alpha, useColorScheme, styled, useTheme } from '@mui/material/styles';


import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';

// import { List, ListItem, ListItemText, ListItemIcon, Collapse } from '@mui/material';
// import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
// import { TreeItem } from '@mui/x-tree-view/TreeItem';
// import Sitemark from './SitemarkIcon';
// import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import EditIcon from '@mui/icons-material/Edit';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';
import { router } from "@inertiajs/react";
import {useRoute} from "&/ziggy"


import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';
import * as locales from '@mui/material/locale';
import { Grid } from '@mui/system';


function ColorModeIconDropdown(props) {
    const { mode, setMode } = useColorScheme();

    const toggleTheme = () => {
      setMode(mode === 'light' ? 'dark' : 'light');
    };

    return (
      <IconButton
        onClick={toggleTheme}
        aria-label="toggle light/dark theme"
        {...props}
      >
        {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    );
}

const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: 'rgb(55, 65, 81)',
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
      ...theme.applyStyles('dark', {
        color: theme.palette.grey[300],
      }),
    },
  }));


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: 'blur(24px)',
  border: '1px solid',
  borderColor: (theme.vars || theme).palette.divider,
  backgroundColor: theme.vars
    ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
    : alpha(theme.palette.background.default, 0.4),
  boxShadow: (theme.vars || theme).shadows[1],
  padding: '8px 12px',
}));

// const ClickMenu = ({ buttonText, menuItems }) => {
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const isOpen = Boolean(anchorEl);

//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//       setAnchorEl(null);
//     };

//     return (
//       <Box sx={{ display: { xs: 'none', md: 'flex' }, pl: 2 }}>
//         <Button
//           variant="text"
//           color="info"
//           size="small"
//           aria-controls={isOpen ? 'menu-list-grow' : undefined}
//           aria-haspopup="true"
//           onClick={handleClick}
//         >
//           {buttonText}
//         </Button>
//         <Menu
//           id="menu-list-grow"
//           anchorEl={anchorEl}
//           open={isOpen}
//           onClose={handleClose}
//           disableScrollLock
//           anchorOrigin={{
//             vertical: 'bottom',
//             horizontal: 'left',
//           }}
//           transformOrigin={{
//             vertical: 'top',
//             horizontal: 'left',
//           }}
//         >
//           {menuItems.map((item, index) => (
//             <MenuItem key={index} onClick={handleClose}>
//               {item}
//             </MenuItem>
//           ))}
//         </Menu>
//       </Box>
//     );
//   };



const NavigationMenu = ({ menuItems }) => {

    const routing = useRoute();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenu, setOpenMenu] = React.useState(null);

    const handleClick = (event, menuName) => {
      setAnchorEl(event.currentTarget);
      setOpenMenu(menuName);
    };

    const handleClose = () => {
      setAnchorEl(null);
      setOpenMenu(null);
    };

    return (
      <Box sx={{ display:{ xs: 'none', md: 'flex' }, pl: 2, justifyContent: 'center' }}>
        {menuItems.map((item) => (
          <Box key={item.name} sx={{ position: 'relative', mx: 1 }}>
            <Button
              variant="text"
              color="info"
              size="small"
              aria-controls={openMenu === item.name ? 'menu-list-grow' : undefined}
              aria-haspopup="true"
              onClick={(e) => handleClick(e, item.name)}
            >
              {item.name}
            </Button>
            {item.subItems && (
              <Menu
                id={`menu-${item.name}`}
                anchorEl={anchorEl}
                open={openMenu === item.name}
                onClose={handleClose}
                disableScrollLock
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                {item.subItems.map((subItem, index) => (
                  <MenuItem key={index} onClick={() => router.get(routing(subItem.path))}>
                    {subItem.name}
                    </MenuItem>

                ))}
              </Menu>
            )}
          </Box>
        ))}
      </Box>
    );
  };




// const HoverMenu = ({ buttonText, menuItems, isOpen, onMouseEnter, onClose }) => {
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleMouseEnter = (event) => {
//       setAnchorEl(event.currentTarget);
//       onMouseEnter();
//     };

//     return (
//       <div>
//         <Button
//           variant="text"
//           color="info"
//           size="small"
//         //   href={href}
//           onMouseEnter={handleMouseEnter}
//         >
//           {buttonText}
//         </Button>
//         {menuItems && (
//           <Menu
//             anchorEl={anchorEl}
//             open={isOpen}
//             onClose={onClose}
//             MenuListProps={{
//               onMouseLeave: onClose,
//             }}
//           >
//             {menuItems.map((item, index) => (
//               <MenuItem key={index} onClick={onClose}>
//                 {item}
//               </MenuItem>
//             ))}
//           </Menu>
//         )}
//       </div>
//     );
//   };

const menuItems = [
    {
      name: 'Advertise',
      subItems: [
        { name: 'Place an Ad', path: 'advertise' },
        { name: 'Advertising Options', path: 'advertise' },
        { name: 'Pricing', path: 'advertise' }
      ]
    },
    {
      name: 'Aluger',
      subItems: [
        { name: 'Rent a Property', path: 'aluger' },
        { name: 'List a Property', path: 'aluger' },
        { name: 'Rental Guide', path: 'aluger' }
      ]
    },
    {
      name: 'Blog',
      subItems: [
        { name: 'Latest Posts', path: 'blog' },
        { name: 'Categories', path: 'blog' },
        { name: 'Authors', path: 'blog' }
      ]
    },
    {
      name: 'Job',
      subItems: [
        { name: 'Find a Job', path: 'job' },
        { name: 'Post a Job', path: 'job' },
        { name: 'Career Advice', path: 'job' }
      ]
    },
    {
      name: 'Marketing',
      subItems: [
        { name: 'Services', path: 'marketing' },
        { name: 'Case Studies', path: 'marketing' },
        { name: 'Pricing', path: 'marketing' }
      ]
    },
    {
      name: 'Terms',
      subItems: [
        { name: 'Terms of Service', path: 'terms' },
        { name: 'Privacy Policy', path: 'terms' },
        { name: 'Cookie Policy', path: 'terms' }
      ]
    }
  ];

export default function AppAppBar() {



    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const isOpen = Boolean(anchorEl);

    // const handleMouseEnter = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleMouseLeave = () => {
    //     setAnchorEl(null);
    // };



    // const [anchorEl, setAnchorEl] = React.useState(null);
    // const isOpen = Boolean(anchorEl);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };



    // const handleMouseOverButton = React.useCallback((event) => {
    //   setAnchorEl(event.currentTarget);
    // }, []);

    // const handleMouseLeave = React.useCallback((event) => {
    // //   setTimeout(() => {
    // //     if (
    // //       anchorEl &&
    // //       event.relatedTarget &&
    // //       !anchorEl.contains(event.relatedTarget) &&
    // //       !menuRef.current?.contains(event.relatedTarget)
    // //     ) {
    // //       setAnchorEl(null);
    // //     }
    // //   }, 100); // Small delay to allow mouse to enter menu
    // }, [anchorEl]);

    // const isOpen = Boolean(anchorEl);





        // const [activeMenu, setActiveMenu] = React.useState(null);

        // const handleMouseEnter = (menuId) => () => {
        //   setActiveMenu(menuId);
        // };

        // const handleClose = () => {
        //   setActiveMenu(null);
        // };



    const routing = useRoute();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const  [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const { mode, setMode } = useColorScheme();

    const toggleTheme = () => {
      setMode(mode === 'light' ? 'dark' : 'light');
    };
  return (
        <AppBar
        position="fixed"
        enableColorOnDark
        sx={{
            boxShadow: 0,
            bgcolor: 'transparent',
            backgroundImage: 'none',
            mt: 'calc(var(--template-frame-height, 0px) + 28px)',
        }}
        >

        <Container maxWidth="lg">
            <StyledToolbar variant="dense" disableGutters>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                    {/* <Box> */}
                        <Avatar
                            alt="AVF"
                            variant="square"
                            src="/storage/ShortLogo.png"
                            sx={{ width: 80, height: 35 }}
                            onClick={() => { router.get('/')}}
                        ></Avatar>
                        <Typography variant="h6" component="h1" sx={{ color: 'text.primary' }} onClick={() => { router.get('/')}}>
                            Auto viação Feirense
                        </Typography>
                        {/* <ClickMenu
                            buttonText="Marketing"
                            menuItems={['Marketing', 'My Marketing', 'Another Option']}
                        /> */}
                        <NavigationMenu menuItems={menuItems} />

                 {/* </Box> */}
                    {/* <Box
                        sx={{ display: { xs: 'none', md: 'flex' }, pl: 2 }}
                        onMouseLeave={handleClose}
                    >
                        <HoverMenu
                            buttonText="Job"
                            menuItems={['Profile', 'My account', 'Logout']}
                            // href={routing("job")}
                            isOpen={activeMenu === 'job'}
                            onMouseEnter={handleMouseEnter('job')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Marketing"
                            menuItems={['Marketing', 'MyMarketing', 'Marketing']}
                            // href={routing("marketing")}
                            isOpen={activeMenu === 'marketing'}
                            onMouseEnter={handleMouseEnter('marketing')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Pricing"
                            menuItems={['Pricing', 'MyPricing', 'Pricing']}
                            // href={routing("pricing")}
                            isOpen={activeMenu === 'pricing'}
                            onMouseEnter={handleMouseEnter('pricing')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Terms"
                            menuItems={['Terms', 'MyTerms', 'Terms']}
                            // href={routing("terms")}
                            isOpen={activeMenu === 'terms'}
                            onMouseEnter={handleMouseEnter('terms')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Blog"
                            menuItems={['Blog', 'MyBlog', 'Blog']}
                            // href={routing("blog")}
                            isOpen={activeMenu === 'blog'}
                            onMouseEnter={handleMouseEnter('blog')}
                            onClose={handleClose}
                        />
                    </Box> */}
                </Box>
                <Box
                    sx={{
                    display: { xs: 'none', md: 'flex' },
                    gap: 1,
                    alignItems: 'center',
                    }}
                >
                    <Button color="primary" variant="text" size="small" href={routing("login")} target="_blank" >
                    Sign in
                    </Button>

                    <ColorModeIconDropdown />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                    <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="top"
                        open={open}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                            top: 'var(--template-frame-height, 0px)',
                            },
                        }}
                    >
                        <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                                >
                                <Grid container spacing={2} justifyContent="flex-end" alignItems="center">
                                    <Grid item>
                                    <ColorModeIconDropdown />
                                    </Grid>
                                    <Grid item>
                                    <IconButton onClick={toggleDrawer(false)}>
                                        <CloseRoundedIcon />
                                    </IconButton>
                                    </Grid>
                                </Grid>
                            </Box>
                            <MenuItem>
                                <Button variant="text" color="info" size="small" href={routing("job")}>Job</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button variant="text" color="info" size="small" href={routing("marketing")}>Marketing</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button variant="text" color="info" size="small" href={routing("marketing")}>Pricing</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href={routing("terms")}>Terms</Button>
                            </MenuItem>
                            <MenuItem>
                                <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href={routing("blog")}>Blog</Button>
                            </MenuItem>
                            <Divider sx={{ my: 3 }} />

                            <MenuItem>
                                <Button  onClick={handleClickOpenDialog} color="primary" fullWidth variant="contained" size="small"><DisplaySettingsIcon /></Button>
                            </MenuItem>
                            <MenuItem>
                                <Button color="primary" href={routing("login")} variant="outlined" fullWidth target="_blank" >
                                    Sign in
                                </Button>
                            </MenuItem>
                        </Box>
                    </Drawer>
                    <Dialog
                        open={openDialog}
                        onClose={handleCloseDialog}
                    >
                        <DialogTitle>Optional sizes</DialogTitle>
                        <DialogContent>
                        <DialogContentText>
                            You can set my maximum width and whether to adapt or not.
                        </DialogContentText>
                        <Box
                            noValidate
                            component="form"
                            sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                            }}
                        >
                            <FormControl sx={{ mt: 2, minWidth: 120 }}>
                            </FormControl>
                                <FormControlLabel
                                sx={{ mt: 1 }}
                                control={
                                    <Switch onChange={toggleTheme}  />   //checked={fullWidth} {...props}
                                }
                                label={mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
                                />
                        </Box>
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleCloseDialog}>Close</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </StyledToolbar>
        </Container>
    </AppBar>
  );
}
