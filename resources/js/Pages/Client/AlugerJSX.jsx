import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import AppAppBar from './components/AppAppBar';
// import Hero from '@/components/Client/Hero';
// import LogoCollection from '@/components/Client/LogoCollection';
// import Highlights from '@/components/Client/Highlights';
// import Pricing from '@/components/Client/Pricing';
// import Features from '@/components/Client/Features';
// import Testimonials from '@/components/Client/Testimonials';
// import FAQ from '@/components/Client/FAQ';



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
  import Grid from '@mui/material/Grid2';

import { ThemeProvider, createTheme } from '@mui/material';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

import { MuiTelInput } from 'mui-tel-input'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptPT } from '@mui/x-date-pickers/locales';

//Implement this
import SmallForm from '@/components/SmallForm';

import useRefComp from '@/components/Client/useRefComp';


import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// import Footer from './components/Footer';
// import AppTheme from '../shared-theme/AppTheme';

import ClientLayout from '@/Layouts/ClientLayout';

const items = [
    {
      icon: <SettingsSuggestRoundedIcon />,
      title: 'Adaptable performance',
      description:
        'Our product effortlessly adjusts to your needs, boosting efficiency and simplifying your tasks.',
    },
    {
      icon: <ConstructionRoundedIcon />,
      title: 'Built to last',
      description:
        'Experience unmatched durability that goes above and beyond with lasting investment.',
    },
    {
      icon: <ThumbUpAltRoundedIcon />,
      title: 'Great user experience',
      description:
        'Integrate our product into your routine with an intuitive and easy-to-use interface.',
    },
    {
      icon: <AutoFixHighRoundedIcon />,
      title: 'Innovative functionality',
      description:
        'Stay ahead with features that set new standards, addressing your evolving needs better than the rest.',
    },
  ];


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

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Aluger(props) {


        // const jobOpeningsRef = React.useRef(null)
            const { ref, scrollToRef } = useRefComp();


        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };

        const districts = [
        'Aveiro', 'Beja', 'Braga', 'Bragança', 'Castelo Branco', 'Coimbra',
        'Évora', 'Faro', 'Guarda', 'Leiria', 'Lisboa', 'Portalegre', 'Porto',
        'Santarém', 'Setúbal', 'Viana do Castelo', 'Vila Real', 'Viseu'
        ];

            const [phone, setPhone] = React.useState('+351')
            const handlePhoneChange = (newValue) => {
                setPhone(newValue)
              }


        const theme = useTheme();



  return (

    // <ClientLayout {...props}>
    <ClientLayout>
      <CssBaseline enableColorScheme />



    <Box
      id="highlights"
      sx={{
        pt: { xs: 12, sm: 15 },
        // color: 'white',
        // bgcolor: 'grey.900',
      }}
    >
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            // width: { sm: '100%', md: '60%' },
            // textAlign: { sm: 'center', md: 'center' },
            textAlign:'center',
            // display:'flex',
            // justifyContent:'center',
          }}
        >
            <Grid container spacing={2} sx={{ mb:2}}>
                <Grid item size={{ xs: 12, sm: 6, md: 6 }}  sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <Typography component="h2" variant="h4" gutterBottom>
                        Highlights
                    </Typography>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                    <Button
                        variant="contained"
                        // color="primary"
                        size="large"
                        sx={{
                        // marginBottom: 4,
                        textTransform: 'none',
                        }}
                        // onClick={() => jobOpeningsRef.current.scrollIntoView({ behavior: 'smooth' })}
                        onClick={scrollToRef}
                    >
                        Ver os nossos serviços de Aluger →
                    </Button>
                </Grid>
            </Grid>





                {/* ref={jobOpeningsRef} */}


          <Typography variant="body1" > {/* sx={{ color: 'grey.400' }} */}
            Explore why our product stands out: adaptability, durability,
            user-friendly design, and innovation. Enjoy reliable customer support and
            precision in every detail.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                    // aspectRatio: { xs: '9 / 16', sm: '1/1', md: '9 / 16' },
                    color: 'inherit',
                    p: 3,
                    height: '100%',
                    // borderColor: 'hsla(220, 25%, 25%, 0.3)',
                    // backgroundColor: 'grey.800',
                }}
              >
                <Grid item size={{ xs: 12, sm: 6, md: 12 }}>
                    <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                </Grid>
                <Grid item size={{ xs: 12, sm: 6, md: 12 }}>
                    <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                        {item.title}
                    </Typography>
                </Grid>


                {/* <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                  <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
                    {item.title}
                  </Typography> */}
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                {/* </div> */}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

    {/* pb: { xs: 8, sm: 16 }, */}
    <Container sx={{ width: '100%', height:{ xs: '91px', sm:'102px'}, margin: 'auto' }} ref={ref}/>

        <Box sx={{ width: '100%', maxWidth: 1152, margin: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center'}}>
            <Tabs value={value} onChange={handleChange} aria-label="form tabs">
                <Tab label="Transport Request" />
                <Tab label="Other Request" />
            </Tabs>
            </Box>


      {/* Transport Request Form */}
      <TabPanel value={value} index={0}>
        <Typography variant="h6" gutterBottom>Transport Request</Typography>
        <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                    sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                    select
                    fullWidth
                    margin="normal"
                    label="District"
                    variant="outlined"
                >
                    {districts.map((district) => (
                        <MenuItem key={district} value={district}>
                        {district}
                        </MenuItem>
                    ))}
                </TextField>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                fullWidth margin="normal" label="Origin" variant="outlined" />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                fullWidth margin="normal" label="Destination" variant="outlined" />
            </Grid>
        {/* </Grid> */}



        {/* <Grid container spacing={2}> */}
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* <DatePickerValue date={edit.date}/> */}
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                >
                    <DatePicker
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                        label="Controlled picker"
                        // value={data.date}
                        onChange={(event) => {
                            // setData("date", event.target.value)
                            // setData("date", event)
                        }}
                        // onChange={(data.date) => {
                        //     setData("date", event.target.value)
                        //     // setValue(event)
                        // }}
                    />
                    {/* </DemoContainer> */}
                </LocalizationProvider>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>

                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                >
                    <MobileTimePicker
                        // orientation={{ xs: 'portrait', md: 'landscape' }}
                        defaultValue={dayjs('2022-04-17T15:30')}
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                    />
                </LocalizationProvider>
            </Grid>
        {/* </Grid> */}
        {/* <Grid container  spacing={2}> */}
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* <DatePickerValue date={edit.date}/> */}
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                >
                    <DatePicker
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                        label="Controlled picker"
                        // value={data.date}
                        onChange={(event) => {
                            // setData("date", event.target.value)
                            // setData("date", event)
                        }}
                        // onChange={(data.date) => {
                        //     setData("date", event.target.value)
                        //     // setValue(event)
                        // }}
                    />
                    {/* </DemoContainer> */}
                </LocalizationProvider>
            </Grid>
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>

                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                >
                    <MobileTimePicker
                        orientation={{ xs: 'portrait', md: 'landscape' }}
                        defaultValue={dayjs('2022-04-17T15:30')}
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                    />                </LocalizationProvider>
            </Grid>
        {/* </Grid> */}






        <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                margin="normal"
                label="Number of Passengers"
                variant="outlined"
                type="number"
            />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            <FormControlLabel
                required
                control={
                    <Checkbox
                        // sx={{ '& .MuiCheckbox': { fontSize: 28 } }}
                    />
                }
                label="Will there be kids on board?" />

            {/* <Checkbox
                {...label}
                defaultChecked
                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
            /> */}

        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField //all messed up for some reason
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                id="outlined-multiline-static"
                multiline
                minRows={3}
                maxRows={6}
                fullWidth
                margin="normal"
                label="Additional Information"
                variant="outlined"
            />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, my: 2 }}> */}
                {/* <Divider sx={{ flexGrow: 1 }} />
                <Typography variant="h6" gutterBottom>Personal Information</Typography>
                <Divider sx={{ flexGrow: 1 }} /> */}
                <Divider  sx={{ borderBottomWidth: 5, }}  component="div" role="presentation">
                    <Typography variant="h6" gutterBottom>Personal Information</Typography>
                </Divider>

            {/* </Box> */}
        </Grid>


        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth margin="normal" label="Name" variant="outlined" />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth margin="normal" label="Email" variant="outlined" type="email" />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeProvider theme={customTheme}>
                <MuiTelInput margin="normal" fullWidth value={phone} onChange={handlePhoneChange} />
            </ThemeProvider>
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' } }}>
            <Button variant="contained" color="primary" sx={{ mt: 2, width: '100%', maxWidth:{sm: '220px', lg: '220px' } }}>
                Submit Request
            </Button>
        </Grid>
    </Grid>




        {/* <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>Personal Information</Typography> */}




      </TabPanel>

      {/* Other Request Form */}
      <TabPanel value={value} index={1}>
        <Typography variant="h6" gutterBottom>Other Request</Typography>
        <TextField
          sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
         fullWidth margin="normal" label="Nome" variant="outlined" />
        <TextField
          sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
        fullWidth margin="normal" label="Empresa" variant="outlined" />
        <ThemeProvider theme={customTheme}>
            <MuiTelInput margin="normal" fullWidth value={phone} onChange={handlePhoneChange} />
        </ThemeProvider>
        <TextField
          sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
        fullWidth margin="normal" label="Email" variant="outlined" />
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
      </TabPanel>
    </Box>











    </ClientLayout>
  );
}
