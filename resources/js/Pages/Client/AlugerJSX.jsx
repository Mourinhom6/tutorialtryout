import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { styled } from '@mui/material/styles';


import {
    Tabs,
    Popover,
    Paper,
    Tab,
    Box,
    Card,
    Stack,
    Modal,
    Slider,
    Tooltip,
    TextField,
    Switch,
    Container,
    Button,
    Divider,
    Checkbox,
    IconButton,
    FormControlLabel,
    MenuItem,
    Typography
  } from '@mui/material';
  import Grid from '@mui/material/Grid2';

import { ThemeProvider, createTheme, useMediaQuery, useTheme } from '@mui/material';

import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';

import { MuiTelInput } from 'mui-tel-input'
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { ptPT } from '@mui/x-date-pickers/locales';


import SmallForm from '@/Components/SmallForm';

import useRefComp from '@/Components/Client/useRefComp';

import { Head, Link, useForm } from "@inertiajs/react";

import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';


import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';

import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import AccessTimeIcon from '@mui/icons-material/AccessTime';



import ClientLayout from '@/Layouts/ClientLayout';

const items = [
    {
      icon: <SettingsSuggestRoundedIcon />,
      title: 'Aluguer de Veículos',
      description:
        'Oferecemos soluções de mobilidade para grupos, ideais para aventuras coletivas e jornadas customizadas. Nossa abordagem flexível permite ajustar horários e personalizar experiências, garantindo que cada trajeto se alinhe perfeitamente com as expectativas dos viajantes.',
    },
    {
      icon: <ConstructionRoundedIcon />,
      title: 'Transporte Corporativo',
      description:
        'Desenvolvemos sistemas de locomoção regulares e adaptados para profissionais, priorizando eficiência e segurança. Nossas rotas são meticulosamente planejadas para atender às demandas específicas de cada organização, oferecendo soluções completas e otimizadas.',
    },
    {
      icon: <ThumbUpAltRoundedIcon />,
      title: 'Experiências Turísticas',
      description:
        'Proporcionamos deslocamentos turísticos versáteis e personalizados em todo o território nacional, com foco na excelência do atendimento. Nosso compromisso é assegurar viagens confortáveis e seguras, adaptadas às particularidades de cada grupo, conduzidas por profissionais altamente capacitados.',
    },
    {
      icon: <AutoAwesomeSharpIcon />,
      title: 'Funcionalidade Inovadora',
      description:
        'Mantenha-se à frente com características modernas que redefinem padrões e satisfazem as suas necessidades em constante evolução.',
    },
  ];

  const commonProps = {
    ampm: false,
    views: ['hours', 'minutes'],
    defaultValue: dayjs('2022-04-17T15:30'),
    sx: {
      height: '56px',
      '& .MuiInputBase-root': { height: '100%' },
      width: '100%'
    }
  };

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: '#1890ff',
          ...theme.applyStyles('dark', {
            backgroundColor: '#177ddc',
          }),
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor: 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
      ...theme.applyStyles('dark', {
        backgroundColor: 'rgba(255,255,255,.35)',
      }),
    },
  }));



//   function CustomDateTimePicker({ stops, setStops }) {
//     console.log('stops', stops);
//     const [open, setOpen] = React.useState(false);
//     const [activeStopIndex, setActiveStopIndex] = React.useState(null);

//     const handleOpen = (index) => {
//       setActiveStopIndex(index);
//       setOpen(true);
//     };

//     const handleClose = () => {
//       setOpen(false);
//       setActiveStopIndex(null);
//     };

//     const handleDateChange = (newDate) => {
//       if (activeStopIndex !== null) {
//         const newStops = [...stops];
//         newStops[activeStopIndex].dateTime = newDate;
//         setStops(newStops);
//       }
//       handleClose();
//     };

//     return (
//         <>
//           {stops.map((stop, index) => (
//             <Grid container  spacing={2} key={index} sx={{ display: 'flex', alignItems: 'center' }}>
//               <Grid item size={{ xs: 12, sm: 6, md: 8, lg:3  }}>
//                 <TextField
//                   fullWidth
//                   margin="normal"
//                   label={`Stop ${index + 1}`}
//                   variant="outlined"
//                   value={stop.location}
//                   onChange={(e) => {
//                     const newStops = [...stops];
//                     newStops[index].location = e.target.value;
//                     setStops(newStops);
//                   }}
//                   sx={{ height: '56px', '& .MuiInputBase-root': { height: '100%' } }}
//                 />
//               </Grid>
//               <Grid item  size={{ xs: 12, sm: 6, md: 4, lg:3  }}>
//                 <TextField
//                   fullWidth
//                   value={stop.dateTime ? stop.dateTime.format('YYYY-MM-DD HH:mm') : ''}
//                   onClick={() => handleOpen(index)}
//                   placeholder="Select date and time"
//                   InputProps={{
//                     readOnly: true,
//                   }}
//                   sx={{ height: '56px', '& .MuiInputBase-root': { height: '100%' } }}
//                 />
//               </Grid>
//             </Grid>
//           ))}
//           <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="modal-modal-title"
//             aria-describedby="modal-modal-description"
//           >
//             <Box sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               bgcolor: 'background.paper',
//               boxShadow: 24,
//               borderRadius: 2,
//               p: 2,
//             }}>
//               <LocalizationProvider dateAdapter={AdapterDayjs}>
//                 <StaticDateTimePicker
//                   disablePast={true}
//                   value={activeStopIndex !== null ? stops[activeStopIndex].dateTime : null}
//                   onAccept={handleDateChange}
//                   ampm={false}
//                   orientation="landscape"
//                 />
//               </LocalizationProvider>
//             </Box>
//           </Modal>
//         </>
//       );
//     }












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

    const { data, setData, post, processing, errors, reset } = useForm({
        tab: 0,
        origem: "",
        destino: "",
        flexibilidade: false,
        paragens: [
            { location: '', dateTime: null },
            { location: '', dateTime: null },
        ],
        dtPartida: null,
        dtChegadav1: null,
        dtChegadav2: null,
        hrPartida: null,
        hrChegadav1: null,
        hrChegadav2: null,
        nupassageiros: "",
        kids: false,
        kidsage: [0, 16],
        extra: "",
        name: "",
        email: "",
        phone: "+351",
        cf_turnstile_response: ''
    });


    const onSubmit = (e) => {
        e.preventDefault();
        post(route("cfturnstile.verify"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                console.log("errorscons", errors);
            },
        });
    };




    const turnstileRef = React.useRef(null);
    const CloudFlareSiteKey = import.meta.env.CLOUDFLARE_TURNSTILE_SITE_KEY;
    const minDistance = 1;
    const theme = useTheme();
    const isMobileMQ = useMediaQuery(theme.breakpoints.down('md'));
    const { ref, scrollToRef } = useRefComp();

    // Handlers

      const handleChangeCheckBox = (event) => {
        setData('kids', event.target.checked);
    };

    const handleChangeActiveCheckBox = (event) => {
        setData("flexibilidade", event.target.checked);
    };

    const handleTabChange = (event, newValue) => {
        setData('tab', newValue);
      };


    // Stop management
    const [open, setOpen] = React.useState(false);
    const [activeStopIndex, setActiveStopIndex] = React.useState(null);
    const [checked, setCheckBox] = React.useState(false);
    const [checkedActive, setActiveCheckBox] = React.useState(false);


    const addStop = () => {
        if (data.paragens.length < 10) {
            setData("paragens", [
                ...data.paragens,
                { location: "", datetime: null }
            ]);
        }
    };

    const handleStopChange = (index, field, value) => {
        const newStops = data.paragens.map((stop, i) =>
            i === index ? { ...stop, [field]: value } : stop
        );
        setData('paragens', newStops); // Update the paragens array immutably
    };

    // Handle date/time selection
    const handleDateTimeAccept = (newValue) => {
        if (activeStopIndex !== null) {
            // Convert the dayjs object to a string before updating the state
            handleStopChange(activeStopIndex, 'datetime', newValue.toISOString());
        }
        setOpen(false); // Close the modal
    };
    // const handleStopChange = (index, field, value) => {
    //     const newStops = [...data.paragens];
    //     newStops[index][field] = value;
    //     setData("paragens", newStops);
    // };

    // // Date/Time handling
    // const handleDateTimeAccept = (newValue) => {
    //     if (activeStopIndex !== null) {
    //         handleStopChange(activeStopIndex, "datetime", newValue);
    //     }
    //     setOpen(false);
    // };




    // const handleInputChange = (index) => (event) => {
    //     const newValue = [...silderValue];
    //     newValue[index] = Number(event.target.silderValue);
    //     setSilderValue(newValue);
    //   };

    const handleInputChange = (index) => (event) => {
        const newValue = [...data.kidsage]; // Create a copy of the current kidsage array
        newValue[index] = Number(event.target.value); // Update the specific index with the new value

        // Ensure the minimum age doesn't exceed the maximum age and vice versa
        if (index === 0 && newValue[0] > data.kidsage[1]) newValue[0] = data.kidsage[1];
        if (index === 1 && newValue[1] < data.kidsage[0]) newValue[1] = data.kidsage[0];

        setData('kidsage', newValue);
      };

      const handleSliderChange = (event, newValue) => {
        if (!Array.isArray(newValue)) return;
        setData('kidsage', newValue);
      };


      const handleOpen = (index) => {
          setActiveStopIndex(index);
          setOpen(true);
      };

      const handleClose = () => {
          setOpen(false);
          setActiveStopIndex(null);
      };

      const handleLocationChange = (index, value) => {
          const newStops = [...data.paragens];
          newStops[index].location = value;
          setData('paragens', newStops);
          console.log("data_paragens1",data.paragens);

      };

    //   const handleDateTimeChange = (index, dateTime) => {
    //       const newStops = [...data.paragens];
    //       newStops[index].datetime = dateTime;
    //       setData('paragens', newStops);
    //   };

      const handleDateChange = (dateTime) => {
          if (activeStopIndex !== null) {
              const newStops = [...data.paragens];
              newStops[activeStopIndex].datetime = dateTime;
              setData('paragens', newStops);
              console.log("data_paragens2",data.paragens);
          }
          handleClose();
      };















      // const minDistance = 1

      // const [open, setOpen] = React.useState(false);
      // const [activeStopIndex, setActiveStopIndex] = React.useState(null);
      // const [maxStops, setMaxStops] = React.useState(false);
      // const [stops, setStops] = React.useState([]);


      // const addStop = () => {
      //     if (data.paragens.length < 10) {
      //         setData('stops', [...data.paragens, { location: '', datetime: null }]);
      //     } else {
      //         setMaxStops(true);
      //     }
      // };








    React.useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    // const submit = (e) => {
    //     e.preventDefault();
    //     post(route("login"));
    // };

    // const CloudFlareSiteKey = import.meta.env.CLOUDFLARE_TURNSTILE_SITE_KEY;









    // const handleChangeCheckBox = (event) => {
    //     //oposite value
    //     setData("kids",event.target.checked)
    // };


    // const handleChangeActiveCheckBox = (event) => {
    //     // setActiveCheckBox(event.target.checkedActive);
    //     //oposite value
    //     setData("flexibilidade", {rctvybunim} )
    //     console.log("It's working", checkedActive );
    // };


        // const [silderValue, setSilderValue] = React.useState([0, 16]);

        // const handleSliderChange = (event, newValue, activeThumb) => {
        //     if (!Array.isArray(newValue)) {
        //         return;
        //       }
        //       if (newValue[1] - newValue[0] < minDistance) {
        //         if (activeThumb === 0) {
        //           const clamped = Math.min(newValue[0], 100 - minDistance);
        //           setData('sliderValue', [clamped, clamped + minDistance]);
        //         } else {
        //           const clamped = Math.max(newValue[1], minDistance);
        //           setData('sliderValue', [clamped - minDistance, clamped]);
        //         }
        //       } else {
        //         setData('sliderValue', newValue);
        //       }
        // };



        // const addStop = () => {
        //     if (stops.length < 10) {
        //         setStops([...stops, { location: '', datetime: null }]);
        //     }
        //     else{
        //         setMaxStops(true);
        //     }
        // };

        // const handleOpen = (index) => {
        //   setActiveStopIndex(index);
        //   setOpen(true);
        // };

        // const handleClose = () => {
        //   setOpen(false);
        //   setActiveStopIndex(null);
        // };

        // const handleDateChange = (newDate) => {
        //   if (activeStopIndex !== null) {
        //     const newStops = [...stops];
        //     newStops[activeStopIndex].dateTime = newDate;
        //     setStops(newStops);
        //   }
        //   handleClose();
        // };






            // const { ref, scrollToRef } = useRefComp();


        // const [value, setValue] = React.useState(0);

        // const handleChange = (event, newValue) => {
        //     setValue(newValue);
        // };

        // const districts = [
        // 'Aveiro', 'Beja', 'Braga', 'Bragança', 'Castelo Branco', 'Coimbra',
        // 'Évora', 'Faro', 'Guarda', 'Leiria', 'Lisboa', 'Portalegre', 'Porto',
        // 'Santarém', 'Setúbal', 'Viana do Castelo', 'Vila Real', 'Viseu'
        // ];

            // const [phone, setPhone] = React.useState('+351')
            // const handlePhoneChange = (newValue) => {
            //     setPhone(newValue)
            //   }


        // const theme = useTheme();

        // const isMobileMQ = useMediaQuery(theme.breakpoints.down('md'));




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
                        Aluger
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
                Descubra o que torna os nossos serviços únicos: conforto, fiabilidade,
                design pensado no cliente e inovação. Desfrute de um atendimento ao cliente
                exemplar e precisão em cada detalhe.
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
                <Tabs value={data.tab} onChange={handleTabChange} aria-label="form tabs">     {/* onChange={handleChange} */}
                    {/* <Tab label="Transport Request" /> */}
                    <Tab label={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Serviço de Aluger
                            <Tooltip sx={{ml:2}} title="1-2 dias" placement="top">
                            <IconButton size="medium" onClick={(e) => e.stopPropagation()}>
                                <HelpCenterIcon fontSize="medium" />
                            </IconButton>
                            </Tooltip>
                        </div>
                        }
                    />
                    <Tab label={
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Serviço de Turismo
                            <Tooltip sx={{ml:2}} title="2+ dias" placement="top">
                            <IconButton size="medium" onClick={(e) => e.stopPropagation()}>
                                <HelpCenterIcon fontSize="medium" />
                            </IconButton>
                            </Tooltip>
                        </div>
                        }
                    />
                    <Tab label="Serviço Fixo" />
                </Tabs>
        </Box>

    <TabPanel value={data.tab} index={0}>
    <form onSubmit={onSubmit}>
    <Head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>

        <Typography variant="h6" gutterBottom>Serviço de Aluger</Typography>
        <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                {/* <TextField
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
                </TextField> */}
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                    <Typography sx={{ textAlign: 'center'}}>Serviço com Flexibilidade Extra</Typography>
                    <AntSwitch checked={data.flexibilidade} onChange={handleChangeActiveCheckBox} inputProps={{ 'aria-label': 'ant design' }} />
                    <Typography sx={{ textAlign: 'center'}}>Apenas Ida e Volta</Typography>
                </Stack>

                {/* <Checkbox
                    checked={checkedActive}
                    onChange={handleChangeActiveCheckBox}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
                    <Typography variant="body2" gutterBottom>{checkedActive ? "Serviço com Flexibilidade Extra" : "Apenas Ida e Volta"}</Typography> */}
            </Grid>




            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                value={data.origem}
                onChange={(e) => setData("origem", e.target.value)}
                fullWidth margin="normal" label="Origem" variant="outlined" />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                value={data.destino}
                onChange={(e) => setData("destino", e.target.value)}
                fullWidth margin="normal" label="Destino" variant="outlined" />
            </Grid>

            {data.paragens ? data.paragens.map((stop, index) => (

                    <React.Fragment key={index}>

              <Grid item size={{ xs: 12, sm: 6, md: 8, lg:3  }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  fullWidth
                  margin="normal"
                  label={`${index + 1}ª Paragem `}
                  variant="outlined"
                  value={stop.location || ''}
                  onChange={(e) => handleLocationChange(index, e.target.value)}
                //   onChange={(e) => {
                //     const newStops = [...stops];
                //     newStops[index].location = e.target.value;
                //     setStops(newStops);
                //   }}
                  sx={{ height: '56px', alignItems: 'center',  '& .MuiInputBase-root': { height: '100%' } }}
                />
              </Grid>
              <Grid item  size={{ xs: 12, sm: 6, md: 4, lg:3  }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                  fullWidth
                  key={stop.datetime ? dayjs(stop.datetime).format('YYYY-MM-DD HH:mm') : index} // Force re-render

                  value={stop.datetime ? dayjs(stop.datetime).format('YYYY-MM-DD HH:mm') : ''}
                  onClick={() => handleOpen(index)}
                  placeholder="Data e Hora da Paragem"
                  InputProps={{
                    readOnly: true,
                  }}
                  sx={{ height: '56px', alignItems: 'center', '& .MuiInputBase-root': { height: '100%' } }}
                />
              </Grid>
              </React.Fragment>
          )) : <p>No stops available</p>}

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              boxShadow: 24,
              borderRadius: 2,
              p: 2,
            }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker
                  disablePast={true}
                  value={activeStopIndex !== null ? dayjs(data.paragens[activeStopIndex].datetime) : null}
                  onAccept={handleDateTimeAccept}
                  ampm={false}
                  orientation="landscape"
                />
              </LocalizationProvider>
            </Box>
          </Modal>
            <Grid item size={{ xs:12, sm: 12, md: 12 }}>
                {(data.paragens.length >= 10) ?
                    <>
                        <Divider  sx={{ borderBottomWidth: 5,}}  component="div" role="presentation">
                            {/* Fucking text not working */}
                            <Typography variant="h6" component="h6" wrapped color='#ff0e0e' sx={{ fontStyle: 'italic',  textAlign: 'center', width: '100%', wordWrap: 'break-word',}}>  * Excedeu O limite de Paragens. Para Um Roteiro Maior, fale comnosco </Typography>

                        </Divider>
                    </>
                    :
                    <>
                        <Divider  sx={{ borderBottomWidth: 5, }}  component="div" role="presentation">
                            <Button variant="contained" onClick={addStop}>Adicionar Paragem</Button>
                        </Divider>
                    </>
                }
            </Grid>

            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* <DatePickerValue date={edit.date}/> */}
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                >
                    <DatePicker
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                        label="Data de Partida"
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
                   {isMobileMQ ? (
                        <MobileTimePicker
                        label="Hora de Partida"

                        {...commonProps}
                        orientation="portrait"
                        />
                    ) : (
                        <MobileTimePicker
                        label="Hora de Partida"

                        {...commonProps}
                        orientation="landscape"
                        />
                    )}
                </LocalizationProvider>
            </Grid>
        {/* </Grid> */}
        {/* <Grid container  spacing={2}> */}
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* <DatePickerValue date={edit.date}/> */}
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                    // adapterLocale="pt-PT"
                >
                    <DatePicker
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                        label="Data de Chegada"
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
                    {isMobileMQ ? (
                        <MobileTimePicker
                        label="Hora de Chegada"

                        {...commonProps}
                        orientation="portrait"
                        />
                    ) : (
                        <MobileTimePicker
                        label="Hora de Chegada"

                        {...commonProps}
                        orientation="landscape"
                        />
                    )}
                </LocalizationProvider>
            </Grid>
        {/* </Grid> */}






        <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                margin="normal"
                value={data.nupassageiros}
                onChange={(e) => setData("nupassageiros", e.target.value)}
                label="Número de Passageiros"
                variant="outlined"
                type="number"
            />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ pr: 3 }}>
                    <Checkbox
                         checked={data.kids || false}
                        onChange={handleChangeCheckBox}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    />
                    <Typography variant="body2" gutterBottom>{data.kids ? "Idades" : "Crianças a Bordo?"}</Typography>
                </Stack>
                {data.kids && (
                    <Stack sx={{ width: 300 }}>
                        <Slider
                            value={data.kidsage}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={16}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                maxWidth: { sm: '0', md: '100%' },
                                justifyContent: 'center',
                                alignContent: { xs: 'center', md: 'top' }
                            }}
                        />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <TextField
                                label="Idade Mínima"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                      shrink: true,
                                    },
                                  }}
                                value={data.kidsage[0]}
                                onChange={handleInputChange(0)}
                                inputProps={{ min: 0, max: data.kidsage[1] }}
                                sx={{
                                    display: { xs: 'flex', md: 'flex' },
                                    maxWidth: { xs: '130px', sm: '80px', md: '130px' },
                                }}
                            />
                            <TextField
                                label="Idade Máxima"
                                type="number"
                                value={data.kidsage[1]}
                                onChange={handleInputChange(1)}
                                inputProps={{ min: data.kidsage[0], max: 100 }}
                                sx={{
                                    display: { xs: 'flex', md: 'flex' },
                                    maxWidth: { xs: '130px', sm: '80px', md: '130px' },
                                }}
                            />
                        </Box>

                    </Stack>
                )}


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
                label="Informações adicionais"
                variant="outlined"
            />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 12 }}>

                <Divider  sx={{ borderBottomWidth: 5, }}  component="div" role="presentation">
                    <Typography variant="h6" gutterBottom>Personal Information</Typography>
                </Divider>

            {/* </Box> */}
        </Grid>


        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            value={data.name} onChange={(e) => setData("name", e.target.value)}

            fullWidth margin="normal" label="Name" variant="outlined" />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            value={data.email} onChange={(e) => setData("email", e.target.value)}

            fullWidth margin="normal" label="Email" variant="outlined" type="email" />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeProvider theme={customTheme}>
                <MuiTelInput margin="normal" fullWidth value={data.phone} onChange={(e) => setData("phone", e.target.value)} />
            </ThemeProvider>
        </Grid>
        <div
                className="cf-turnstile"
                data-sitekey={CloudFlareSiteKey}
                ref={turnstileRef}
                data-callback="onSubmit"
            >
            </div>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' } }}>
            <Button variant="contained" color="primary"  type="submit" value="Submit" sx={{ mt: 2, width: '100%', maxWidth:{sm: '220px', lg: '220px' } }}>
                Submit Request
            </Button>
        </Grid>
    </Grid>
    </form>

      </TabPanel>










      <TabPanel value={data.tab} index={1}>
        <form onSubmit={onSubmit}>
    <Head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>

        <Typography variant="h6" gutterBottom>Serviço de Aluger</Typography>
        <Grid container spacing={2}>
            <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                {/* <TextField
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
                </TextField> */}
                <Stack direction="row" spacing={1} sx={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                    <Typography sx={{ textAlign: 'center'}}>Serviço com Flexibilidade Extra</Typography>
                    <AntSwitch  checked={checkedActive} onChange={handleChangeActiveCheckBox} inputProps={{ 'aria-label': 'ant design' }} />
                    <Typography sx={{ textAlign: 'center'}}>Apenas Ida e Volta</Typography>
                </Stack>

                {/* <Checkbox
                    checked={checkedActive}
                    onChange={handleChangeActiveCheckBox}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                />
                    <Typography variant="body2" gutterBottom>{checkedActive ? "Serviço com Flexibilidade Extra" : "Apenas Ida e Volta"}</Typography> */}
            </Grid>




            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                fullWidth margin="normal" label="Origem" variant="outlined" />
            </Grid>
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                fullWidth margin="normal" label="Destino" variant="outlined" />
            </Grid>

            {data.paragens ? data.paragens.map((stop, index) => (

                <React.Fragment key={index}>

                <Grid item size={{ xs: 12, sm: 6, md: 8, lg:3  }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                fullWidth
                margin="normal"
                label={`${index + 1}ª Paragem `}
                variant="outlined"
                value={stop.location || ''}
                onChange={(e) => handleLocationChange(index, e.target.value)}
                //   onChange={(e) => {
                //     const newStops = [...stops];
                //     newStops[index].location = e.target.value;
                //     setStops(newStops);
                //   }}
                sx={{ height: '56px', alignItems: 'center',  '& .MuiInputBase-root': { height: '100%' } }}
                />
                </Grid>
                <Grid item  size={{ xs: 12, sm: 6, md: 4, lg:3  }} sx={{ display: 'flex', alignItems: 'center' }}>
                <TextField
                fullWidth
                value={stop.dateTime ? dayjs(stop.dateTime).format('YYYY-MM-DD HH:mm') : ''}
                onClick={() => handleOpen(index)}
                placeholder="Data e Hora da Paragem"
                InputProps={{
                readOnly: true,
                }}
                sx={{ height: '56px', alignItems: 'center', '& .MuiInputBase-root': { height: '100%' } }}
                />
                </Grid>
                </React.Fragment>
                )) : <p>No stops available</p>}

                <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                boxShadow: 24,
                borderRadius: 2,
                p: 2,
                }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDateTimePicker
                disablePast={true}
                value={activeStopIndex !== null ? dayjs(data.paragens[activeStopIndex].dateTime) : null}
                onAccept={handleDateChange}
                ampm={false}
                orientation="landscape"
                />
                </LocalizationProvider>
                </Box>
                </Modal>
        {/* </> */}


            {/* <CustomDateTimePicker stops={stops} setStops={setStops} /> */}





                    {/* <Grid item  size={{ xs: 12, sm: 6, md: 8 }} spacing={2}  key={index}>
                        <TextField
                            fullWidth
                            margin="normal"
                            label={`Stop ${index + 1}`}
                            variant="outlined"
                            value={stop.location}
                            onChange={(e) => {
                                const newStops = [...stops];
                                newStops[index].location = e.target.value;
                                setStops(newStops);
                            }}
                            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
                        />
                    </Grid>
                    <Grid item size={{ xs: 12, sm: 6, md: 4 }}>
                        <CustomDateTimePicker />
                    </Grid> */}


                {/* // </Grid> */}




           {/* <LocalizationProvider
             dateAdapter={AdapterDayjs}
             localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
           >
             <StaticDateTimePicker
               ampm={false}
               views={['year', 'month', 'day', 'hours', 'minutes']}
               orientation="landscape"
               value={stop.datetime}
               onChange={(newValue) => {
                 const newStops = [...stops];
                 newStops[index].datetime = newValue;
                 setStops(newStops);
               }}
             />
           </LocalizationProvider> */}

            <Grid item size={{ xs:12, sm: 12, md: 12 }}>
                {(data.paragens.length >= 10) ?
                    <>
                        <Divider  sx={{ borderBottomWidth: 5,}}  component="div" role="presentation">
                            {/* Fucking text not working */}
                            <Typography variant="h6" component="h6" wrapped color='#ff0e0e' sx={{ fontStyle: 'italic',  textAlign: 'center', width: '100%', wordWrap: 'break-word',}}>  * Excedeu O limite de Paragens. Para Um Roteiro Maior, fale comnosco </Typography>

                        </Divider>
                    </>
                    :
                    <>
                        <Divider  sx={{ borderBottomWidth: 5, }}  component="div" role="presentation">
                            <Button variant="contained" onClick={addStop}>Adicionar Paragem</Button>
                        </Divider>
                    </>
                }
            </Grid>





        {/* </Grid>

         <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                >
<StaticDateTimePicker
ampm: false,
    views: ['hours', 'minutes'],
     orientation="landscape" />
    </LocalizationProvider>


        {/* <Grid container spacing={2}> */}
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* <DatePickerValue date={edit.date}/> */}
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                >
                    <DatePicker
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                        label="Data de Partida"
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
                   {isMobileMQ ? (
                        <MobileTimePicker
                        label="Hora de Partida"

                        {...commonProps}
                        orientation="portrait"
                        />
                    ) : (
                        <MobileTimePicker
                        label="Hora de Partida"

                        {...commonProps}
                        orientation="landscape"
                        />
                    )}
                </LocalizationProvider>
            </Grid>
        {/* </Grid> */}
        {/* <Grid container  spacing={2}> */}
            <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                        {/* <DatePickerValue date={edit.date}/> */}
                <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                    // adapterLocale="pt-PT"
                >
                    <DatePicker
                        sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                        label="Data de Chegada"
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
                    {isMobileMQ ? (
                        <MobileTimePicker
                        label="Hora de Chegada"

                        {...commonProps}
                        orientation="portrait"
                        />
                    ) : (
                        <MobileTimePicker
                        label="Hora de Chegada"

                        {...commonProps}
                        orientation="landscape"
                        />
                    )}
                </LocalizationProvider>
            </Grid>
        {/* </Grid> */}






        <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, width:'100%' }}
                margin="normal"
                value={data.nupassageiros}
                onChange={(e) => setData("nupassageiros", e.target.value)}
                label="Número de Passageiros"
                variant="outlined"
                type="number"
            />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
            {/* <FormControlLabel */}
                {/* required */}
                {/* control={ */}
                <Stack direction="row" spacing={1} alignItems="center" sx={{ pr: 3 }}>
                    <Checkbox
                        checked={data.kids}
                        onChange={handleChangeCheckBox}
                        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                    />
                    <Typography variant="body2" gutterBottom>{data.kids ? "Idades" : "Crianças a Bordo?"}</Typography>
                </Stack>
                {data.kids && (
                    <Stack sx={{ width: 300 }}>
                        <Slider
                            value={data.kidsage}
                            onChange={handleSliderChange}
                            valueLabelDisplay="auto"
                            min={0}
                            max={16}
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                maxWidth: { sm: '0', md: '100%' },
                                justifyContent: 'center',
                                alignContent: { xs: 'center', md: 'top' }
                            }}
                        />
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <TextField
                                label="Idade Mínima"
                                type="number"
                                slotProps={{
                                    inputLabel: {
                                      shrink: true,
                                    },
                                  }}
                                value={data.kidsage[0]}
                                onChange={handleInputChange(0)}
                                inputProps={{ min: 0, max: data.kidsage[1] }}
                                sx={{
                                    display: { xs: 'flex', md: 'flex' },
                                    maxWidth: { xs: '130px', sm: '80px', md: '130px' },
                                }}
                            />
                            <TextField
                                label="Idade Máxima"
                                type="number"
                                value={data.kidsage[1]}
                                onChange={handleInputChange(1)}
                                inputProps={{ min: data.kidsage[0], max: 100 }}
                                sx={{
                                    display: { xs: 'flex', md: 'flex' },
                                    maxWidth: { xs: '130px', sm: '80px', md: '130px' },
                                }}
                            />
                        </Box>

                        {/* <TextField
                            label="Min Value"
                            type="number"
                            value={silderValue[0]}
                            onChange={handleInputChange(0)}
                            inputProps={{ min: 0, max: silderValue[1] }}
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                maxWidth: { sm: '80px', md: '100px' },
                                justifyContent: 'space-between',
                                alignContent: { xs: 'center', md: 'bottom' }
                            }}
                        />
                        <TextField
                            label="Max Value"
                            type="number"
                            value={silderValue[1]}
                            onChange={handleInputChange(1)}
                            inputProps={{ min: silderValue[0], max: 100 }}
                            sx={{
                                display: { xs: 'flex', md: 'flex' },
                                maxWidth: { sm: '80px', md: '100px' },
                                justifyContent: 'space-between',
                                alignContent: { xs: 'center', md: 'bottom' }
                            }}
                        /> */}
                    </Stack>
                )}


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
                value={data.extra}
                onChange={(e) => setData("extra", e.target.value)}
                multiline
                minRows={3}
                maxRows={6}
                fullWidth
                margin="normal"
                label="Informações adicionais"
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
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            fullWidth margin="normal" label="Name" variant="outlined" />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            value={data.email}
                onChange={(e) => setData("email", e.target.value)}
            fullWidth margin="normal" label="Email" variant="outlined" type="email" />
        </Grid>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeProvider theme={customTheme}>
                <MuiTelInput margin="normal" fullWidth value={data.phone} onChange={(e) => setData("phone", e.target.value)} />
            </ThemeProvider>
        </Grid>
        <div
                className="cf-turnstile"
                data-sitekey={CloudFlareSiteKey}
                ref={turnstileRef}
                data-callback="onSubmit"
            >
            </div>
        <Grid item size={{ xs: 12, sm: 12, md: 4 }} sx={{ display: 'flex', alignItems: { xs: 'center', sm: 'flex-start', md: 'flex-start' } }}>
            <Button variant="contained" color="primary"  type="submit" value="Submit" sx={{ mt: 2, width: '100%', maxWidth:{sm: '220px', lg: '220px' } }}>
                Submit Request
            </Button>
        </Grid>
    </Grid>




        {/* <Divider sx={{ my: 2 }} />
        <Typography variant="h6" gutterBottom>Personal Information</Typography> */}


</form>

      </TabPanel>













      {/* Other Request Form */}
      <TabPanel value={data.tab} index={2}>
        <form onSubmit={onSubmit}>
    <Head>
        <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
      </Head>

            <Typography variant="h6" gutterBottom>Serviço Fixo</Typography>
            <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth margin="normal" label="Nome" variant="outlined" />
            <TextField
            sx={{height: '56px', '& .MuiInputBase-root': {height: '100%',}, }}
            fullWidth margin="normal" label="Empresa" variant="outlined" />
            <ThemeProvider theme={customTheme}>
                <MuiTelInput margin="normal" fullWidth value={data.phone} onChange={(e) => setData("phone", e.target.value)} />
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
            <div
                className="cf-turnstile"
                data-sitekey={CloudFlareSiteKey}
                ref={turnstileRef}
                data-callback="onSubmit"
            >
            </div>

            <Button variant="contained" color="primary" type="submit" value="Submit" sx={{ mt: 2 }}>
                Submit Request
            </Button>
        </form>
      </TabPanel>
    </Box>











    </ClientLayout>
  );
}
