import * as React from 'react';

import {
    Tabs,
    Paper,
    Tab,
    Box,
    Card,
    Stack,
    TextField,
    Container,
    Button,
    Divider,
    Checkbox,
    FormControlLabel,
    MenuItem,
    useTheme,
    Typography
  } from '@mui/material';

//   import Grid from '@mui/material/Grid2';

  import { ThemeProvider, createTheme } from '@mui/material';
  import { MuiTelInput } from 'mui-tel-input'

  const customTheme = createTheme({
    components: {
        MuiTelInput: {
            styleOverrides: {
                root: {
                    border: 'none', // Remove border
                    boxShadow: 'none', // Remove any box shadow
                    // Add more overrides as needed
                },
                input: {
                    border: 'none', // Remove border from input
                    outline: 'none', // Remove outline on focus
                },
            },
          },
    },
  });


export default function SmallForm(props) {

            const theme = useTheme();

            const [phone, setPhone] = React.useState('+351')
            const handlePhoneChange = (newValue) => {
                setPhone(newValue)
            }


return(
    <Box sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>Other Request</Typography>
        <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth margin="normal" label="Nome" variant="outlined"
        />
        <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth margin="normal" label="Empresa" variant="outlined"
        />
        <ThemeProvider theme={customTheme}>
            <MuiTelInput margin="normal" fullWidth value={phone} onChange={handlePhoneChange} />
        </ThemeProvider>
        <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth margin="normal" label="Email" variant="outlined"
        />
        <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth
            margin="normal"
            label="Descrição do Serviço"
            variant="outlined"
            multiline
            rows={4}
        />
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Submit Request
        </Button>
    </Box>

)};
