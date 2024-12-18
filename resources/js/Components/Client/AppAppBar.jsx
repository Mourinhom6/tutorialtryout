import * as React from 'react';
import { alpha, useColorScheme, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
// import Sitemark from './SitemarkIcon';
// import ColorModeIconDropdown from '../../shared-theme/ColorModeIconDropdown';

import DarkModeIcon from '@mui/icons-material/DarkModeRounded';
import LightModeIcon from '@mui/icons-material/LightModeRounded';
import Menu from '@mui/material/Menu';


function ColorModeIconDropdown(props) {
    const { mode, systemMode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const handleMode = (targetMode) => () => {
      setMode(targetMode);
      handleClose();
    };
    if (!mode) {
      return (
        <Box
          data-screenshot="toggle-mode"
          sx={(theme) => ({
            verticalAlign: 'bottom',
            display: 'inline-flex',
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: (theme.vars || theme).shape.borderRadius,
            border: '1px solid',
            borderColor: (theme.vars || theme).palette.divider,
          })}
        />
      );
    }
    const resolvedMode = systemMode || mode;
    const icon = {
      light: <LightModeIcon />,
      dark: <DarkModeIcon />,
    }[resolvedMode];
    return (
      <React.Fragment>
        <IconButton
          data-screenshot="toggle-mode"
          onClick={handleClick}
          disableRipple
          size="small"
          aria-controls={open ? 'color-scheme-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          {...props}
        >
          {icon}
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          slotProps={{
            paper: {
              variant: 'outlined',
              elevation: 0,
              sx: {
                my: '4px',
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <MenuItem selected={mode === 'system'} onClick={handleMode('system')}>
            System
          </MenuItem>
          <MenuItem selected={mode === 'light'} onClick={handleMode('light')}>
            Light
          </MenuItem>
          <MenuItem selected={mode === 'dark'} onClick={handleMode('dark')}>
            Dark
          </MenuItem>
        </Menu>
      </React.Fragment>
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

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
            {/* <Sitemark /> */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
            {/* <Button color="primary" variant="contained" size="small">
              Sign up
            </Button> */}
            <ColorModeIconDropdown />
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
            <ColorModeIconDropdown size="medium" />
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
                {/* <MenuItem>
                  <Button color="primary" variant="contained" fullWidth>
                    Sign up
                  </Button>
                </MenuItem> */}
                <MenuItem>
                  <Button color="primary" href={route("login")} variant="outlined" fullWidth target="_blank" >
                    Sign in
                  </Button>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}
