import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Popover from '@mui/material/Popover';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';




    const SelectorContainer = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        width: '100%',
        maxWidth: 400,
        backgroundColor: theme.palette.background.paper,
    }));

    const OptionButton = styled(ButtonBase)(({ theme, active }) => ({
        flex: 1,
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: active ? theme.palette.primary.main : 'transparent',
        color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
        fontWeight: active ? 'bold' : 'normal',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        transition: 'background-color 0.3s, color 0.3s',
        '&:hover': {
        backgroundColor: theme.palette.action.hover,
        },
    }));

    const OptionContent = styled(Box)(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: theme.typography.pxToRem(24),
        transition: 'transform 0.3s',
        '&:hover': {
        transform: 'scale(1.1)',
        },
    }));



    export default function ViewModeSelector({ options, onChange, defaultValue }) {
        const [selected, setSelected] = useState(defaultValue);
        const [anchorEl, setAnchorEl] = useState(null);
        const [hoveredOption, setHoveredOption] = useState(null);

        const handleSelection = (value) => {
          setSelected(value);
          if (onChange) {
            const selectedOption = options.find((option) => option.value === value);
            onChange(selectedOption);
          }
        };

        const handlePopoverOpen = (event, option) => {
          setAnchorEl(event.currentTarget);
          setHoveredOption(option);
        };

        const handlePopoverClose = () => {
          setAnchorEl(null);
          setHoveredOption(null);
        };

        const open = Boolean(anchorEl);

        return (
          <SelectorContainer>
            {options.map((option) => (
              <OptionButton
                key={option.value}
                active={selected === option.value ? 1 : 0}
                onClick={() => handleSelection(option.value)}
                onMouseEnter={(event) => handlePopoverOpen(event, option)}
                onMouseLeave={handlePopoverClose}
              >
                <OptionContent style={{ fontSize: `${option.multiplier * 8}px` }}>
                  {option.icon}
                </OptionContent>
              </OptionButton>
            ))}
            <Popover
              id="hover-popover"
              sx={{ pointerEvents: 'none' }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
              disableRestoreFocus
            >
              {hoveredOption && (
                <Typography sx={{ p: 1 }}>
                  {hoveredOption.label}
                </Typography>
              )}
            </Popover>
          </SelectorContainer>
        );
      }
