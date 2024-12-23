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
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


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
// import Sitemark from './SitemarkIcon';
// import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import Menu from '@mui/material/Menu';

import { ThemeSwitcher } from '@toolpad/core/DashboardLayout';


import TablePagination from '@mui/material/TablePagination';
import Autocomplete from '@mui/material/Autocomplete';

import TextField from '@mui/material/TextField';
import * as locales from '@mui/material/locale';


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

export default function AppAppBar() {
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
                    />
                    <Typography variant="h6" component="h1" sx={{ color: 'text.primary' }}>Auto viação Feirense</Typography>
                {/* </Box> */}

                {/* logo: <img src="/storage/ShortLogo.png" alt="MUI logo" />,
                title: 'WorkSpace', */}


                <Box sx={{ display: { xs: 'none', md: 'flex' }, pl: 2}} >
                    <Button variant="text" color="info" size="small" href={route("marketing")}>
                        Features
                    </Button>
                    <Button variant="text" color="info" size="small" href={route("marketing")}>
                        Testimonials
                    </Button>
                    <Button variant="text" color="info" size="small" href={route("marketing")}>
                        Highlights
                    </Button>
                    <Button variant="text" color="info" size="small" href={route("marketing")}>
                        Pricing
                    </Button>
                    <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href={route("marketing")}>
                        FAQ
                    </Button>
                    <Button variant="text" color="info" size="small" sx={{ minWidth: 0 }} href={route("blog")}>
                        Blog
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 1,
                alignItems: 'center',
                }}
            >
                <Button color="primary" variant="text" size="small" href={route("login")} target="_blank" >
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
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            <IconButton onClick={toggleDrawer(false)}>
                                <CloseRoundedIcon />
                            </IconButton>
                        </Box>
                        <MenuItem>Features</MenuItem>
                        <MenuItem>Testimonials</MenuItem>
                        <MenuItem>Highlights</MenuItem>
                        <MenuItem>Pricing</MenuItem>
                        <MenuItem>FAQ</MenuItem>
                        <MenuItem>Blog</MenuItem>

                        <Divider sx={{ my: 3 }} />

                        <MenuItem>
                            <Button  onClick={handleClickOpenDialog} color="primary" fullWidth variant="contained" size="small"><DisplaySettingsIcon /></Button>
                        </MenuItem>
                        <MenuItem>
                            <Button color="primary" href={route("login")} variant="outlined" fullWidth target="_blank" >
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
  );
}


// const { mode, setMode } = useColorScheme();

//     const toggleTheme = () => {
//       setMode(mode === 'light' ? 'dark' : 'light');
//     };

//     return (
//       <IconButton
//         onClick={toggleTheme}
//         aria-label="toggle light/dark theme"

//       >
//         {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
//       </IconButton>
//     );
//   }

