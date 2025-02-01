



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



//   export default function Locales() {
//     const [locale, setLocale] = React.useState('zhCN');

//     const theme = useTheme();

//     const themeWithLocale = React.useMemo(
//       () => createTheme(theme, locales[locale]),
//       [locale, theme],
//     );

//     return (
//       <Box sx={{ width: '100%' }}>
//         <ThemeProvider theme={themeWithLocale}>
//           <Autocomplete
//             options={Object.keys(locales)}
//             getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
//             style={{ width: 300 }}
//             value={locale}
//             disableClearable
//             onChange={(event, newValue) => {
//               setLocale(newValue);
//             }}
//             renderInput={(params) => (
//               <TextField {...params} label="Locale" fullWidth />
//             )}
//           />
//           <TablePagination
//             count={2000}
//             rowsPerPage={10}
//             page={1}
//             component="div"
//             onPageChange={() => {}}
//           />
//         </ThemeProvider>
//       </Box>
//     );
//   }





// function ColorModeIconDropdown(props) {
//     const { mode, systemMode, setMode } = useColorScheme();
//     const [anchorEl, setAnchorEl] = React.useState(null);
//     const open = Boolean(anchorEl);
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
//     const handleMode = (targetMode) => () => {
//       setMode(targetMode);
//       handleClose();
//     };
//     if (!mode) {
//       return (
//         <Box
//           data-screenshot="toggle-mode"
//           sx={(theme) => ({
//             verticalAlign: 'bottom',
//             display: 'inline-flex',
//             width: '2.25rem',
//             height: '2.25rem',
//             borderRadius: (theme.vars || theme).shape.borderRadius,
//             border: '1px solid',
//             borderColor: (theme.vars || theme).palette.divider,
//           })}
//         />
//       );
//     }
//     const resolvedMode = systemMode || mode;
//     const icon = {
//       light: <LightModeIcon />,
//       dark: <DarkModeIcon />,
//     }[resolvedMode];
//     return (
//       <React.Fragment>
//         <IconButton
//           data-screenshot="toggle-mode"
//           onClick={handleClick}
//           disableRipple
//           size="small"
//           aria-controls={open ? 'color-scheme-menu' : undefined}
//           aria-haspopup="true"
//           aria-expanded={open ? 'true' : undefined}
//           {...props}
//         >
//           {icon}
//         </IconButton>
//         <Menu
//           anchorEl={anchorEl}
//           id="account-menu"
//           open={open}
//           onClose={handleClose}
//           onClick={handleClose}
//           slotProps={{
//             paper: {
//               variant: 'outlined',
//               elevation: 0,
//               sx: {
//                 my: '4px',
//               },
//             },
//           }}
//           transformOrigin={{ horizontal: 'right', vertical: 'top' }}
//           anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
//         >
//           <MenuItem selected={mode === 'system'} onClick={handleMode('system')}>
//             System
//           </MenuItem>
//           <MenuItem selected={mode === 'light'} onClick={handleMode('light')}>
//             Light
//           </MenuItem>
//           <MenuItem selected={mode === 'dark'} onClick={handleMode('dark')}>
//             Dark
//           </MenuItem>
//         </Menu>
//       </React.Fragment>
//     );
// }

function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
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

function CustomizedMenus() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button
          id="demo-customized-button"
          aria-controls={open ? 'demo-customized-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          variant="contained"
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
          Options
        </Button>
        <StyledMenu
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <EditIcon />
            Edit
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <FileCopyIcon />
            Duplicate
          </MenuItem>
          <Divider sx={{ my: 0.5 }} />
          <MenuItem onClick={handleClose} disableRipple>
            <ArchiveIcon />
            Archive
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <MoreHorizIcon />
            More
          </MenuItem>
        </StyledMenu>
      </div>
    );
  }


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

// const HoverMenu = ({ buttonText, menuItems, isOpen, onMouseEnter, onClose }) => {
//     const [anchorEl, setAnchorEl] = React.useState(null); // For positioning the menu

//     // When hovering the button
//     const handleButtonMouseEnter = (event) => {
//       setAnchorEl(event.currentTarget); // Set the anchor element
//       if (onMouseEnter) onMouseEnter(); // Notify the parent to compute new menu items
//     };

//     // When leaving the menu
//     const handleMenuClose = () => {
//       setAnchorEl(null); // Clear anchor
//       if (onClose) onClose(); // Notify the parent to close the menu
//     };

//     return (
//       <div>
//         <Button
//           variant="text"
//           color="info"
//           size="small"
//           onMouseEnter={handleButtonMouseEnter} // Trigger hover logic
//         >
//           {buttonText}
//         </Button>
//         {menuItems && (
//           <Menu
//             anchorEl={anchorEl}
//             open={isOpen} // Control visibility based on parent state
//             onClose={handleMenuClose} // Handle close
//             MenuListProps={{
//               onMouseLeave: handleMenuClose, // Close when mouse leaves the menu
//             }}
//           >
//             {menuItems.map((item, index) => (
//               <MenuItem key={index} onClick={handleMenuClose}>
//                 {item}
//               </MenuItem>
//             ))}
//           </Menu>
//         )}
//       </div>
//     );
//   };
const HoverMenu = ({ buttonText, menuItems, isOpen, onMouseEnter, onClose }) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    // When hovering the button
    const handleButtonMouseEnter = (event) => {
      setAnchorEl(event.currentTarget); // Set the menu anchor
      onMouseEnter(); // Notify the parent to open this menu
    };

    // Close the menu
    const handleMenuClose = () => {
      setAnchorEl(null); // Clear the anchor
      onClose(); // Notify the parent to close the menu
    };

    return (
      <div>
        <Button
          variant="text"
          color="info"
          size="small"
          onMouseEnter={handleButtonMouseEnter} // Trigger hover logic
        >
          {buttonText}
        </Button>
        {menuItems && (
          <Menu
            anchorEl={anchorEl}
            open={isOpen} // Controlled by parent state
            onClose={handleMenuClose} // Handle close
            MenuListProps={{
              onMouseLeave: handleMenuClose, // Close when leaving the menu
            }}
          >
            {menuItems.map((item, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>
                {item}
              </MenuItem>
            ))}
          </Menu>
        )}
      </div>
    );
  };



// const HoverMenu = ({ buttonText, menuItems, href, anchorEl, onMouseEnter, onClose }) => {
//     const isOpen = Boolean(anchorEl);

//     return (
//       <div>
//         <Button
//           variant="text"
//           color="info"
//           size="small"
//           href={href}
//           aria-controls={isOpen ? 'hover-menu' : undefined}
//           aria-haspopup="true"
//           aria-expanded={isOpen ? 'true' : undefined}
//           onMouseEnter={(event) => onMouseEnter(event.currentTarget)}
//         >
//           {buttonText}
//         </Button>
//         {menuItems && (
//           <Menu
//             anchorEl={anchorEl}
//             open={isOpen}
//             onClose={onClose}
//             MenuListProps={{
//               'aria-labelledby': 'hover-button',
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

export default function AppAppBar() {

    // const [isDropDrawer, setIsdropDrawer] = React.useState(false);


    // React.useEffect(() => {
    //     // Expose the setIsOpen function to the window object
    //     window.openDrawer = () => setIsdropDrawer(true);
    //     window.closeDrawer = () => setIsdropDrawer(false);

    //     // Cleanup
    //     return () => {
    //       delete window.openDrawer;
    //       delete window.closeDrawer;
    //     };
    //   }, []);
    // const AppBarButtons = () => {

//         const [activeMenu, setActiveMenu] = React.useState(null); // Tracks the currently active menu

//   // Handle when a button is hovered
//   const handleMouseEnter = (menuId) => {
//     setActiveMenu(menuId); // Open the hovered menu
//   };

//   // Handle closing all menus
//   const handleClose = () => {
//     setActiveMenu(null); // Close all menus
//   };

const [anchorEl, setAnchorEl] = React.useState({});

// Handle opening the menu for a specific button
const handleMouseEnter = (buttonId) => (event) => {
    setAnchorEl((prev) => ({ ...prev, [buttonId]: event.currentTarget }));
  };

  // Handle closing the menu on hover leave
  const handleMouseLeave = (buttonId) => () => {
    setAnchorEl((prev) => ({ ...prev, [buttonId]: null }));
  };



    const routing = useRoute();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const  [openDialog, setOpenDialog] = React.useState(false);
//   const [fullWidth, setFullWidth] = React.useState(true);
//   const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

//   const handleMaxWidthChange = (event) => {
//     setMaxWidth(
//       // @ts-expect-error autofill of arbitrary value is not handled.
//       event.target.value,
//     );
//   };

  const { mode, setMode } = useColorScheme();

    const toggleTheme = () => {
      setMode(mode === 'light' ? 'dark' : 'light');
    };

//   const handleFullWidthChange = (event) => {
//     setFullWidth(event.target.checked);
//   }

//   const [locale, setLocale] = React.useState('zhCN');

//   const theme = useTheme();
//   React.useEffect(() => {
//     console.log('ClientLayout: Current locale:', locale);
//   }, [locale]);

//   const handleLocaleChange = (newLocale) => {
//     console.log('ClientLayout: Changing locale to:', newLocale);
//     setLocale(newLocale);
//   };

  return (
    <>
         {/* <Drawer
            anchor="top"
            open={isDropDrawer}
            variant="persistent"
            PaperProps={{
                sx: {
                height: '300px',
                overflow: 'auto',
                transition: 'transform 0.3s ease-in-out',
                transform: isDropDrawer ? 'translateY(0)' : 'translateY(-100%)',
                zIndex: 1000, // Ensure this is lower than your AppBar's z-index
                },
            }}
            onMouseLeave={() => setIsdropDrawer(false)}
            >
             <Box sx={{ p: 2, mt: 18 }}>
                <Typography variant="h6" gutterBottom>Quick Actions</Typography>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                <Button variant="contained" color="primary">New Project</Button>
                <Button variant="outlined" color="secondary">Settings</Button>
                <Button variant="outlined">Help</Button>
                </Box>

                <Typography variant="h6" gutterBottom>Project Structure</Typography>
                <SimpleTreeView
                aria-label="project structure"
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ChevronRightIcon />}
                >
                <TreeItem itemId="1" label="Project Root" icon={<FolderIcon />}>
                    <TreeItem itemId="2" label="src" icon={<FolderIcon />}>
                    <TreeItem itemId="5" label="components" icon={<FolderIcon />}>
                        <TreeItem itemId="6" label="Header.js" icon={<InsertDriveFileIcon />} />
                        <TreeItem itemId="7" label="Footer.js" icon={<InsertDriveFileIcon />} />
                    </TreeItem>
                    <TreeItem itemId="8" label="App.js" icon={<InsertDriveFileIcon />} />
                    </TreeItem>
                    <TreeItem itemId="3" label="public" icon={<FolderIcon />}>
                    <TreeItem itemId="9" label="index.html" icon={<InsertDriveFileIcon />} />
                    </TreeItem>
                    <TreeItem itemId="4" label="package.json" icon={<InsertDriveFileIcon />} />
                </TreeItem>
                </SimpleTreeView>
            </Box>
        </Drawer> */}
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
                            alt="SMIM"
                            variant="square"
                            src="https://picsum.photos/50/40?random=1"
                            sx={{ width: 80, height: 35 }}
                            onClick={() => { router.get('/')}}
                        ></Avatar>
                        <Typography variant="h6" component="h1" sx={{ color: 'text.primary' }} onClick={() => { router.get('/')}}>
                            Auto viação FleetMan
                        </Typography>
                    {/* </Box> */}

                    {/* logo: <img src="https://picsum.photos/50/40?random=1" alt="MUI logo" />,
                    title: 'WorkSpace', */}


                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, pl: 2}}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* <Button variant="text" color="info" size="small" href={routing("jobshow")}>
                        Carreer
                        </Button>
                        <Button variant="text" color="info" size="small"
                        aria-controls={isMenuOpen ? 'hover-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isMenuOpen ? 'true' : undefined}
                        onMouseEnter={handleMouseEnter}

                        >
                            Job
                        </Button>
                        <Menu
                            id="hover-menu"
                            anchorEl={menuAnchor}
                            open={isMenuOpen}
                            onClose={handleMouseLeave}
                            MenuListProps={{
                              'aria-labelledby': 'hover-button',
                              onMouseLeave: handleMouseLeave,
                            }}
                          >
                            <MenuItem onClick={handleMouseLeave}>Profile</MenuItem>
                            <MenuItem onClick={handleMouseLeave}>My account</MenuItem>
                            <MenuItem onClick={handleMouseLeave}>Logout</MenuItem>
                        </Menu>
                        <Button variant="text" color="info" size="small" href={routing("marketing")}>
                            Marketing
                        </Button>
                        <Button variant="text" color="info" size="small" href={routing("marketing")}>
                            Pricing
                        </Button>
                        <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href={routing("terms")}>
                            Terms
                        </Button>
                        <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href={routing("blog")}>
                            Blog
                        </Button>
                    </Box> */}

                    {/* <Box
                        sx={{ display: { xs: 'none', md: 'flex' }, pl: 2 }}
                    >
                        <HoverMenu
                            buttonText="Job"
                            menuItems={['Profile', 'My account', 'Logout']}
                            // href={routing("job")}
                            isOpen={activeMenu === 'job'}
                            onMouseLeave={handleClose}
                            onMouseEnter={() => handleMouseEnter('job')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Marketing"
                            menuItems={['Marketing', 'MyMarketing', 'Marketing']}
                            // href={routing("marketing")}
                            isOpen={activeMenu === 'marketing'}
                            onMouseLeave={handleClose}
                            onMouseEnter={() => handleMouseEnter('marketing')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Pricing"
                            menuItems={['Pricing', 'MyPricing', 'Pricing']}
                            // href={routing("pricing")}
                            isOpen={activeMenu === 'pricing'}
                            onMouseLeave={handleClose}
                            onMouseEnter={() => handleMouseEnter('pricing')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Terms"
                            menuItems={['Terms', 'MyTerms', 'Terms']}
                            // href={routing("terms")}
                            isOpen={activeMenu === 'terms'}
                            onMouseLeave={handleClose}
                            onMouseEnter={() => handleMouseEnter('terms')}
                            onClose={handleClose}
                        />
                        <HoverMenu
                            buttonText="Blog"
                            menuItems={['Blog', 'MyBlog', 'Blog']}
                            // href={routing("blog")}
                            isOpen={activeMenu === 'blog'}
                            onMouseLeave={handleClose}
                            onMouseEnter={() => handleMouseEnter('blog')}
                            onClose={handleClose}
                        />
                    </Box> */}


 <Box
      sx={{ display: { xs: 'none', md: 'flex' }, pl: 2 }}
    >
      {/* Add buttons with HoverMenu */}
      {/* {[1, 2, 3, 4, 5].map((num) => (
        <HoverMenu
          key={num}
          buttonText={`Menu ${num}`} // Button label
          menuItems={[num * 2, num * 3, num * 4]} // Example menu items
          isOpen={activeMenu === num} // Open only if this menu is active
          onMouseEnter={() => handleMouseEnter(num)} // Trigger hover
          onClose={handleClose} // Close menu
        />
      ))} */}


{['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'].map((label, index) => {
        const buttonId = `button-${index}`; // Unique ID for each button
        return (
          <div key={buttonId}>
            <Button
              aria-controls={anchorEl[buttonId] ? `${buttonId}-menu` : undefined}
              aria-haspopup="true"
              onMouseEnter={handleMouseEnter(buttonId)}
              onMouseLeave={handleMouseLeave(buttonId)}
              variant="contained"
            >
              {label}
            </Button>
            <Menu
              id={`${buttonId}-menu`}
              anchorEl={anchorEl[buttonId]}
              open={Boolean(anchorEl[buttonId])}
              MenuListProps={{
                onMouseLeave: handleMouseLeave(buttonId),
              }}
              disableAutoFocusItem // Prevents auto-focus when opening
            >
              <MenuItem onClick={handleMouseLeave(buttonId)}>Option 1</MenuItem>
              <MenuItem onClick={handleMouseLeave(buttonId)}>Option 2</MenuItem>
              <MenuItem onClick={handleMouseLeave(buttonId)}>Option 3</MenuItem>
            </Menu>
          </div>
        );
      })}
    </Box>

                    {/* <Box sx={{ display: { xs: 'none', md: 'flex' }, pl: 2 }}>
                        <HoverMenu
                            buttonText="Job"
                            menuItems={['Profile', 'My account', 'Logout']}
                            href={routing("job")}
                            isOpen={openMenu === 'job'}
                            onOpen={(anchorEl) => handleOpenMenu('job')}
                            onClose={handleCloseMenu}
                        />
                        <HoverMenu
                            buttonText="Marketing"
                            menuItems={['Marketing', 'MyMarketing', 'Marketing']}
                            href={routing("marketing")}
                            isOpen={openMenu === 'marketing'}
                            onOpen={(anchorEl) => handleOpenMenu('marketing')}
                            onClose={handleCloseMenu}
                        />
                        <HoverMenu
                            buttonText="Pricing"
                            menuItems={['Pricing', 'MyPricing', 'Pricing']}
                            href={routing("marketing")}
                            isOpen={openMenu === 'pricing'}
                            onOpen={(anchorEl) => handleOpenMenu('pricing')}
                            onClose={handleCloseMenu}
                        />
                        <HoverMenu
                            buttonText="Terms"
                            menuItems={['Terms', 'MyTerms', 'Terms']}
                            href={routing("terms")}
                            isOpen={openMenu === 'terms'}
                            onOpen={(anchorEl) => handleOpenMenu('terms')}
                            onClose={handleCloseMenu}
                        />
                        <HoverMenu
                            buttonText="Blog"
                            menuItems={['Blog', 'MyBlog', 'Blog']}
                            href={routing("blog")}
                            isOpen={openMenu === 'blog'}
                            onOpen={(anchorEl) => handleOpenMenu('blog')}
                            onClose={handleCloseMenu}
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
                    {/* <Button color="primary" variant="contained" size="small"><DisplaySettingsIcon /></Button> */}
                    {/* <ThemeSwitcher /> */}

                    <ColorModeIconDropdown />
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                    {/* <ColorModeIconDropdown size="medium" /> */}
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
                            {/* <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <Grid spacing={2}>
                                    <Grid item>
                                        <ColorModeIconDropdown />
                                    </Grid>
                                    <Grid item>
                                        <IconButton onClick={toggleDrawer(false)}>
                                            <CloseRoundedIcon />
                                        </IconButton>
                                    </Grid>
                                </Grid>
                            </Box> */}
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
                            {/* <MenuItem>
                                <Button variant="text" color="info" size="small" href={routing("jobshow")}>Carreer</Button>
                            </MenuItem> */}
                            <MenuItem>
                                {/* <BasicMenu/> */}
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
                            {/* <MenuItem><ThemeSwitcher /></MenuItem> */}
                        </Box>
                    </Drawer>
                    <Dialog
                        // fullWidth={fullWidth}
                        // maxWidth={maxWidth}
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
                                {/* <InputLabel htmlFor="max-width">maxWidth</InputLabel> */}

                                {/* <Autocomplete
                                    options={Object.keys(locales)}
                                    getOptionLabel={(key) => `${key.substring(0, 2)}-${key.substring(2, 4)}`}
                                    style={{ width: 300 }}
                                    value={locale}
                                    disableClearable
                                    onChange={(event, newValue) => {
                                        setLocale(newValue);
                                        console.log('ClientLayout: Changing locale to:', newValue);
                                        React.useEffect(() => {
                                            console.log('ClientLayout: Current locale:', locale);
                                        }, [locale]);

                                        const handleLocaleChange = (newLocale) => {
                                            console.log('ClientLayout: Changing locale to:', newLocale);
                                            setLocale(newLocale);
                                        };
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} label="Locale" fullWidth />
                                    )}
                                /> */}



                            {/* <Select
                                autoFocus
                                value={maxWidth}
                                onChange={handleMaxWidthChange}
                                label="maxWidth"
                                inputProps={{
                                name: 'max-width',
                                id: 'max-width',
                                }}
                            >
                                <MenuItem value={false}>false</MenuItem>
                                <MenuItem value="xs">xs</MenuItem>
                                <MenuItem value="sm">sm</MenuItem>
                                <MenuItem value="md">md</MenuItem>
                                <MenuItem value="lg">lg</MenuItem>
                                <MenuItem value="xl">xl</MenuItem>
                            </Select> */}
                            </FormControl>
                            {/* <Box sx={{ borderBottom: '1px solid', borderColor: 'grey.300', my: 4 }} /> */}

                                <FormControlLabel
                                sx={{ mt: 1 }}
                                control={
                                    <Switch onChange={toggleTheme}  />   //checked={fullWidth} {...props}
                                }
                                label={mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
                                />
                            {/* </Box> */}
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
    </>
  );
}



