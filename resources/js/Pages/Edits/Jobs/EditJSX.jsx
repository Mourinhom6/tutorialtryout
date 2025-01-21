import WorkSpace  from "@/Layouts/WorkSpace";
import { Head, Link, useForm } from "@inertiajs/react";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
  BLOG_STATUS_CLASS_MAP,
  BLOG_STATUS_TEXT_MAP,

} from "@/constants.jsx";

import {ClientTheme} from '@/Components/AppTheme';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import InputAdornment from '@mui/material/InputAdornment';

import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { ptPT } from '@mui/x-date-pickers/locales';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import FilledInput from '@mui/material/FilledInput';

import {
    Box,
    Typography,
    Card,
    CardMedia,
    TextField,
    CardContent,
    Chip,
    Avatar,
    Button,
    Divider,
    useTheme,
  } from '@mui/material';

  import { styled } from '@mui/system';
  import AccessTimeIcon from '@mui/icons-material/AccessTime';
  import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid2';
import useIsSuperTiny  from "@/MediaQuery";

import ImageMasonry from '@/components/Mansory';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


// function DatePickerValue(date) {
//     console.log("dateprops", date);
//     const [value, setValue] = React.useState(dayjs(date.date));

//     return (
//         <LocalizationProvider
//             dateAdapter={AdapterDayjs}
//             localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
//         >
//             {/* <DemoContainer components={['DatePicker', 'DatePicker']}> */}
//                 <DatePicker
//                     // localeText={{
//                     //     clearButtonLabel: 'Vider',
//                     // }}
//                     label="Controlled picker"
//                     value={value}
//                     // onChange={(newValue) => setValue(newValue)}
//                     onChange={(event) => {
//                         setData("date", event.target.value)
//                         setValue(event)
//                     }
//                     }

//                 />
//             {/* </DemoContainer> */}
//         </LocalizationProvider>
//     );
// }

const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 900,
    margin: '0 auto',
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  }));

  const StyledChip = styled(Chip)(({ theme, isSelected }) => ({
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: isSelected ? theme.palette.success.main : 'transparent',
    color: isSelected ? theme.palette.common.white : theme.palette.text.primary,
    border: 'none',
    '&:hover': {
      backgroundColor: isSelected
        ? theme.palette.success.dark
        : theme.palette.action.hover,
    },
    '& .MuiChip-icon': {
      color: 'inherit',
    },
  }));

export default function Edit({ auth, edit, success, breadcum }) {
    // , errors
    const { data, setData, post, reset } = useForm({
        // image: "",
        title: edit.title || "",
        subtitle: edit.subtitle || "",
        size: edit.size || "",
        intro: edit.intro || "",
        text1: edit.text1 || "",
        text2: edit.text2 || "",
        // date: dayjs(edit.date) || "",
        date: dayjs(edit.date) || "",

        _method: "PUT",
      });

      const onSubmit = (e) => {
        e.preventDefault();

        post(route("edits.update", edit.id));
      };

    // const [value, setValue] = React.useState(dayjs(edit.date));

    // const [title, setTitle] = React.useState(edit.title);
    // const [subtitle, setSubtitle] = React.useState(edit.subtitle);
    // const [size, setSize] = React.useState(edit.size);
    // const [intro, setIntro] = React.useState(edit.intro);
    // const [text1, setText1] = React.useState(edit.text1);
    // const [text2, setText2] = React.useState(edit.text2);








    console.log('Editedit:', edit);
    console.log('Editsuccess:', success);
    console.log('Editbreadcum:', breadcum);

    const theme2 = ClientTheme();

    const {isSuperTiny} = useIsSuperTiny();
    const theme = useTheme();

    // const handleDelete = (chipToDelete) => () => {
    //     setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    //   };

// const [selectedTags, setSelectedTags] = React.useState((edit.tags && typeof edit.tags === 'string') ? edit.tags.split(',') : []);

// const [selectedTags, setSelectedTags] = React.useState(
//     (edit.tags && typeof edit.tags === 'string') ? edit.tags.split(',') : []
//   );
const [selectedTags, setSelectedTags] = React.useState(() => {
    if (Array.isArray(edit.tags)) {
      return edit.tags.map(tag => tag.name);
    }
    return [];
  });
// const handleTagChange = (tagId) => {
//     let newTags;
//     newTags = selectedTags.includes(tagId)
//         ? selectedTags.filter(id => id !== tagId)
//         : [...selectedTags, tagId];

//     setSelectedTags(newTags);
// };
const handleTagChange = (tag) => {
    // console.log("62prevTags", prevTags);
    console.log("62tag", tag);
    console.log("62selectedTags", selectedTags);
    console.log("62edit.tags", edit.tags);
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

    return (

    <WorkSpace

      user={auth.user}
    >
        <Head title={`Edit "${edit.title}"`} />
        {/* <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                mb: 2 // Optional: adds margin bottom if needed
            }}
            >
            <Typography
                variant="h5"
                component="h2"
            >
                {`Edit "${edit.title}"`}
            </Typography>
        </Box> */}




        <ThemeProvider theme={theme2} >
            {/* <form onSubmit={onSubmit}> */}
                <StyledCard>

                    <CardContent sx={{ p: 4 }}>

                        <Typography variant="overline" color="primary" gutterBottom>
                            Featured Article
                        </Typography>
                        <TextField
                            variant="standard"
                            fullWidth
                            sx={{
                                '& .MuiInputBase-input': {
                                    ...theme.typography.h4
                                }
                            }}
                            value={data.title}
                            onChange={(event) => {
                                // setTitle(event.target.value);
                                setData('title', event.target.value);
                            }}
                            // onChange={(e) => handleTitleChange(e.target.value)}
                        />
                        <Box sx={{ display: 'flex', gap: 2 }}>

                            <TextField
                                variant="standard"
                                sx={(theme) => ({
                                    '& .MuiInputBase-input': {
                                        ...theme.typography.subtitle1,
                                        color: theme.palette.text.secondary
                                    },
                                    // minWidth: '200px',
                                    // maxWidth: '500px',
                                    // width: 'auto',
                                    flexGrow: 1,

                                })}
                                value={data.subtitle}
                                onChange={(event) => {
                                    // setSubtitle(event.target.value);
                                    setData('subtitle', event.target.value);
                                }}
                                // onChange={(e) => handleTitleChange(e.target.value)}
                            />
                        </Box>


                        <Box sx={{
                            display: 'flex',
                            flexDirection: isSuperTiny ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: isSuperTiny ? 'stretch' : 'center',
                            mb: 2
                        }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: isSuperTiny ? 2 : 0 }}>
                            <Avatar src="/static/images/avatar/1.jpg" sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="subtitle2">{edit.createdBy.name}</Typography>
                                <Typography variant="caption" color="text.secondary">
                                AI Researcher & Tech Journalist
                                </Typography>
                            </Box>
                            </Box>
                            <Button
                            variant="outlined"
                            color="primary"
                            fullWidth={isSuperTiny}
                            >
                            Share Article
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Grid container spacing={1}>
                                <Grid item size={{ xs: 12, sm: 6 }} sx={{ display: 'flex', alignItems: 'center' }}>
                                    <AccessTimeIcon sx={{ fontSize: 'small',  mr: 1 }} color="action" />
                                    {/* <DatePickerValue date={edit.date}/> */}
                                    <LocalizationProvider
                                        dateAdapter={AdapterDayjs}
                                        localeText={ptPT.components.MuiLocalizationProvider.defaultProps.localeText}
                                    >
                                            <DatePicker
                                                label="Controlled picker"
                                                value={data.date}
                                                onChange={(event) => {
                                                    // setData("date", event.target.value)
                                                    setData("date", event)
                                                }}
                                                // onChange={(data.date) => {
                                                //     setData("date", event.target.value)
                                                //     // setValue(event)
                                                // }}
                                            />
                                        {/* </DemoContainer> */}
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item size={{ xs: 12, sm: 6 }}>
                                    <TextField
                                        // error
                                        // label={error ? "Erro" : "" }
                                        // helperText={error ? "Insira um Número Válido" : "" }
                                        variant="outlined"
                                        sx={(theme) => ({
                                            '& .MuiInputBase-input': {
                                                ...theme.typography.body2,
                                                // color: theme.palette.text.secondary
                                            },
                                        })}
                                        slotProps={{
                                            input: {
                                                endAdornment: <InputAdornment position="end">min read</InputAdornment>,
                                            },
                                        }}
                                        value={data.size}
                                        onChange={(event) => {
                                            // setSize(event.target.value);
                                            setData('size', event.target.value);
                                        }}
                                        // onChange={(e) => handleTitleChange(e.target.value)}
                                    />
                                </Grid>

                            </Grid>
                            {/* <AccessTimeIcon sx={{ fontSize: 'small', mr: 1 }} color="action" /> */}
                        {/* <Typography variant="body2" color="text.secondary">
                            {edit.date} • {edit.size} min read
                        </Typography> */}


                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>

                        {['Eventos', 'Aquisições & Concursos', 'Sustentabilidade', 'Avisos Gerais'].map(tag => (
                            <Chip
                                key={tag}
                                onClick={() => handleTagChange(tag)}
                                size="medium"
                                label={tag}
                                color={selectedTags.includes(tag) ? "primary" : "default"}
                                sx={{
                                backgroundColor: selectedTags.includes(tag) ? 'success.main' : 'transparent',
                                // color: selectedTags.includes(tag) ? 'primary.contrastText' : 'text.primary',
                                border: 'none'
                                }}
                                icon={selectedTags.includes(tag) ? <CloseRoundedIcon /> : <AddRoundedIcon />}
                            />
                        ))}
                            {/* {edit.tags.map((tag) => (
                                <StyledChip key={tag.id} label={tag.name} variant="outlined"/>
                            ))} */}
                        </Box>

                        {/* <Typography variant="body1" sx={{ display: { xs: 'block', md: 'none' } }} component="p">
                            {edit.intro}
                        </Typography> */}

                        <TextField
                            variant="standard"
                            fullWidth
                            maxRows={4}
                            multiline
                            sx={(theme) => ({
                                '& .MuiInputBase-input': {
                                    ...theme.typography.body1,
                                },
                                display: { xs: 'block', md: 'none' }
                            })}
                            value={data.intro}
                            onChange={(event) => {
                                // setIntro(event.target.value);
                                setData('intro', event.target.value);
                            }}
                            // onChange={(e) => handleTitleChange(e.target.value)}
                        />

                        <Grid container spacing={3} sx={{ mb: 4 }}>
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <Box
                                    component="img"
                                    src={edit.img_main}
                                    sx={{ width: '100%', borderRadius: 1 }}
                                />
                            </Grid>
                            <Grid item size={{ xs: 12, md: 6 }}>
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    maxRows={4}
                                    multiline
                                    sx={(theme) => ({
                                        '& .MuiInputBase-input': {
                                            ...theme.typography.body1,
                                        },
                                        display: { xs: 'none', md: 'block' }
                                    })}
                                    value={data.intro}
                                    onChange={(event) => {
                                        // setIntro(event.target.value);
                                        setData('intro', event.target.value);
                                    }}
                                    // onChange={(e) => handleTitleChange(e.target.value)}
                                />
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    maxRows={4}
                                    multiline
                                    sx={(theme) => ({
                                        '& .MuiInputBase-input': {
                                            ...theme.typography.body1,
                                        },
                                    })}
                                    value={data.text1}
                                    onChange={(event) => {
                                        // setText1(event.target.value);
                                        setData('text1', event.target.value);
                                    }}
                                    // onChange={(e) => handleTitleChange(e.target.value)}
                                />

                                {/* <Typography variant="body1" sx={{ mb: 4, display: { xs: 'none', md: 'block' } }} component="p">
                                    {edit.intro}
                                </Typography> */}
                                {/* <Typography variant="body1">
                                    {edit.text1}
                                </Typography> */}
                            </Grid>
                        </Grid>
                        <TextField
                            variant="standard"
                            fullWidth
                            maxRows={4}
                            multiline
                            sx={(theme) => ({
                                '& .MuiInputBase-input': {
                                    ...theme.typography.body1,
                                },
                            })}
                            value={data.text2}
                            onChange={(event) => {
                                // setText2(event.target.value);
                                setData('text2', event.target.value);
                            }}
                            // onChange={(e) => handleTitleChange(e.target.value)}
                        />

                        {/* <Typography variant="body1" component="p">
                            {edit.text2}
                        </Typography> */}

                        <Divider sx={{ my: 3 }} />

                    </CardContent>
                    {edit.images && edit.images.length > 0 ? (<ImageMasonry itemData={edit.images} />) :
                    (<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2}}>
                        <Typography variant="caption" sx={{ textAlign: 'center', width: '100%' }} color="text.secondary">No images available for this blog.</Typography>
                    </Box>
                    )}





                </StyledCard>
                <Button variant="contained" color="success" size="small" onClick={onSubmit}> {/*  onClick={() => onSubmit} href={routing("job")} */}
                    Submit
                </Button>
            {/* </form> */}

        </ThemeProvider>





    </WorkSpace>
  );
}
