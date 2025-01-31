import * as React from 'react';
import { TextField, Popover } from '@mui/material';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function CustomDateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <TextField
        fullWidth
        value={selectedDate ? selectedDate.format('YYYY-MM-DD HH:mm') : ''}
        onClick={handleClick}
        placeholder="Select date and time"
        InputProps={{
          readOnly: true,
        }}
      />
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StaticDateTimePicker
            value={selectedDate}
            onChange={handleDateChange}
            ampm={false}
            orientation="landscape"
          />
        </LocalizationProvider>
      </Popover>
    </div>
  );
}
