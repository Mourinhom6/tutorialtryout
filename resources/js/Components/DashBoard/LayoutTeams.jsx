// import * as React from 'react';
// import Box, { BoxProps } from '@mui/joy/Box';
// import Sheet from '@mui/joy/Sheet';

// function Root(props: BoxProps) {
//   return (
//     <Box
//       {...props}
//       sx={[
//         {
//           bgcolor: 'background.appBody',
//           display: 'grid',
//           gridTemplateColumns: {
//             xs: '1fr',
//             sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
//             md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
//           },
//           gridTemplateRows: '64px 1fr',
//           minHeight: '100vh',
//         },
//         ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
//       ]}
//     />
//   );
// }

// function Header(props: BoxProps) {
//   return (
//     <Box
//       component="header"
//       className="Header"
//       {...props}
//       sx={[
//         {
//           p: 2,
//           gap: 2,
//           bgcolor: 'background.surface',
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           gridColumn: '1 / -1',
//           borderBottom: '1px solid',
//           borderColor: 'divider',
//           position: 'sticky',
//           top: 0,
//           zIndex: 1100,
//         },
//         ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
//       ]}
//     />
//   );
// }

// function SideNav(props: BoxProps) {
//   return (
//     <Box
//       component="nav"
//       className="Navigation"
//       {...props}
//       sx={[
//         {
//           p: 2,
//           bgcolor: 'background.surface',
//           borderRight: '1px solid',
//           borderColor: 'divider',
//           display: {
//             xs: 'none',
//             sm: 'initial',
//           },
//         },
//         ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
//       ]}
//     />
//   );
// }

// function SidePane(props: BoxProps) {
//   return (
//     <Box
//       className="Inbox"
//       {...props}
//       sx={[
//         {
//           bgcolor: 'background.surface',
//           borderRight: '1px solid',
//           borderColor: 'divider',
//           display: {
//             xs: 'none',
//             md: 'initial',
//           },
//         },
//         ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
//       ]}
//     />
//   );
// }

// function Main(props: BoxProps) {
//   return (
//     <Box
//       component="main"
//       className="Main"
//       {...props}
//       sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
//     />
//   );
// }

// function SideDrawer(
//   props: BoxProps & { onClose: React.MouseEventHandler<HTMLDivElement> },
// ) {
//   const { onClose, ...other } = props;
//   return (
//     <Box
//       {...other}
//       sx={[
//         { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
//         ...(Array.isArray(other.sx) ? other.sx : [other.sx]),
//       ]}
//     >
//       <Box
//         role="button"
//         onClick={onClose}
//         sx={{
//           position: 'absolute',
//           inset: 0,
//           bgcolor: (theme) =>
//             `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
//         }}
//       />
//       <Sheet
//         sx={{
//           minWidth: 256,
//           width: 'max-content',
//           height: '100%',
//           p: 2,
//           boxShadow: 'lg',
//           bgcolor: 'background.surface',
//         }}
//       >
//         {other.children}
//       </Sheet>
//     </Box>
//   );
// }

// export default {
//   Root,
//   Header,
//   SideNav,
//   SidePane,
//   SideDrawer,
//   Main,
// };

import React from 'react';
// import Box from '@mui/joy/Box';
// import Sheet from '@mui/joy/Sheet';


// import Typography from '@mui/joy/Typography';
// import Button from '@mui/joy/Button';
// import Accordion from '@mui/joy/Accordion';
// import AccordionGroup from '@mui/joy/AccordionGroup';
// import Autocomplete from '@mui/joy/Autocomplete';
// import Slider from '@mui/joy/Slider';
// import Chip from '@mui/joy/Chip';
// import ChipDelete from '@mui/joy/ChipDelete';
// import RadioGroup from '@mui/joy/RadioGroup';
// import Radio from '@mui/joy/Radio';

// import AccordionDetails, {
//   accordionDetailsClasses,
// } from '@mui/joy/AccordionDetails';
// import AccordionSummary, {
//   accordionSummaryClasses,
// } from '@mui/joy/AccordionSummary';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

import {
    Box,
    Typography,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Autocomplete,
    Chip,
    Slider,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
  } from '@mui/material';
  import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Root(props) {
    console.log("Rootprops", props);
    return (
      <Box
        {...props}
        sx={[
          {
            bgcolor: 'background.appBody',
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'minmax(64px, 200px) minmax(450px, 1fr)',
              md: 'minmax(160px, 300px) minmax(300px, 500px) minmax(500px, 1fr)',
            },
            gridTemplateRows: '64px 1fr',
            minHeight: '100vh',
          },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      />
    );
  }

  function Header(props) {
    console.log("Headerprops", props);

    return (
      <Box
        component="header"
        className="Header"
        {...props}
        sx={[
          {
            p: 2,
            gap: 2,
            bgcolor: 'background.surface',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gridColumn: '1 / -1',
            borderBottom: '1px solid',
            borderColor: 'divider',
            position: 'sticky',
            top: 0,
            zIndex: 1100,
          },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      />
    );
  }

  function SideNav(props) {
    console.log("SideNavprops", props);

    return (
      <Box
        component="nav"
        className="Navigation"
        {...props}
        sx={[
          {
            p: 2,
            bgcolor: 'background.surface',
            borderRight: '1px solid',
            borderColor: 'divider',
            display: {
              xs: 'none',
              sm: 'initial',
            },
          },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      />
    );
  }

//   function SidePane(props) {
//     return (
//       <Box
//         className="Inbox"
//         {...props}
//         sx={[
//           {
//             bgcolor: 'background.surface',
//             borderRight: '1px solid',
//             borderColor: 'divider',
//             display: {
//               xs: 'none',
//               md: 'initial',
//             },
//           },
//           ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
//         ]}
//       />
//     );
//   }


// function SidePane(props) {
//     return (
//       <Box
//         className="Inbox"
//         {...props}
//         sx={[
//           {
//             bgcolor: 'background.surface',
//             borderRight: '1px solid',
//             borderColor: 'divider',
//             display: {
//               xs: 'none',
//               md: 'initial',
//             },
//           },
//           ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
//         ]}
//       >
//         {/* Header Section */}
//         <Box
//           sx={{
//             p: 2,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <Typography level="title-lg" textColor="text.secondary" component="h1">
//             People
//           </Typography>
//           <Button startDecorator={<PersonRoundedIcon />} size="sm">
//             Add new
//           </Button>
//         </Box>

//         {/* Filters Section */}
//         <Box
//           sx={{
//             p: 2,
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <Typography level="title-md">Filters</Typography>
//           <Button size="sm" variant="plain">
//             Clear
//           </Button>
//         </Box>

//         {/* Accordion Group */}
//         <AccordionGroup
//           sx={{
//             [`& .${accordionDetailsClasses.content}`]: {
//               px: 2,
//             },
//             [`& .${accordionSummaryClasses.button}`]: {
//               px: 2,
//             },
//           }}
//         >
//           {/* Keywords Accordion */}
//           <Accordion defaultExpanded>
//             <AccordionSummary>
//               <Typography level="title-sm">Keywords</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box sx={{ my: 2 }}>
//                 <Autocomplete
//                   size="sm"
//                   placeholder="Position, skills, etc…"
//                   options={[
//                     { category: 'Position', title: 'Frontend engineer' },
//                     { category: 'Position', title: 'Backend engineer' },
//                     { category: 'Position', title: 'Product manager' },
//                     { category: 'Skill', title: 'JavaScript' },
//                     { category: 'Skill', title: 'TypeScript' },
//                     { category: 'Skill', title: 'Project management' },
//                   ]}
//                   groupBy={(option) => option.category}
//                   getOptionLabel={(option) => option.title}
//                 />
//                 <Box sx={{ my: 2, display: 'flex', gap: 1 }}>
//                   <Chip
//                     variant="soft"
//                     size="sm"
//                     endDecorator={<ChipDelete variant="soft" />}
//                   >
//                     UI designer
//                   </Chip>
//                 </Box>
//               </Box>
//             </AccordionDetails>
//           </Accordion>

//           {/* Location Accordion */}
//           <Accordion defaultExpanded>
//             <AccordionSummary>
//               <Typography level="title-sm">Location</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box sx={{ my: 2 }}>
//                 <Autocomplete
//                   size="sm"
//                   placeholder="Country, city, etc…"
//                   options={[
//                     'Bangkok',
//                     'Amnat Charoen',
//                     'Ang Thong',
//                     'Bueng Kan',
//                     'Buriram',
//                     'Chachoengsao',
//                     'Chai Nat',
//                     'Chaiyaphum',
//                     'Chanthaburi',
//                     'Chiang Mai',
//                     'Chiang Rai',
//                     'Chonburi',
//                   ]}
//                 />
//                 <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
//                   <Typography level="title-sm">Range</Typography>
//                   <Slider
//                     size="sm"
//                     variant="solid"
//                     valueLabelFormat={(value) => `${value} km`}
//                     defaultValue={6}
//                     step={1}
//                     min={0}
//                     max={20}
//                     valueLabelDisplay="on"
//                   />
//                 </Box>
//               </Box>
//             </AccordionDetails>
//           </Accordion>

//           {/* Education Accordion */}
//           <Accordion defaultExpanded>
//             <AccordionSummary>
//               <Typography level="title-sm">Education</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box sx={{ my: 2 }}>
//                 <RadioGroup name="education" defaultValue="any">
//                   <Radio label="Any" value="any" size="sm" />
//                   <Radio label="High School" value="high-school" size="sm" />
//                   <Radio label="College" value="college" size="sm" />
//                   <Radio label="Post-graduate" value="post-graduate" size="sm" />
//                 </RadioGroup>
//               </Box>
//             </AccordionDetails>
//           </Accordion>

//           {/* Experience Accordion */}
//           <Accordion defaultExpanded>
//             <AccordionSummary>
//               <Typography level="title-sm">Years of Experience</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box sx={{ my: 2 }}>
//                 <Slider
//                   size="sm"
//                   valueLabelFormat={(value) => `${value} years`}
//                   defaultValue={[5, 10]}
//                   step={1}
//                   min={0}
//                   max={30}
//                   valueLabelDisplay="on"
//                 />
//               </Box>
//             </AccordionDetails>
//           </Accordion>

//           {/* Languages Accordion */}
//           <Accordion defaultExpanded>
//             <AccordionSummary>
//               <Typography level="title-sm">Languages Spoken</Typography>
//             </AccordionSummary>
//             <AccordionDetails>
//               <Box sx={{ my: 2 }}>
//                 <Autocomplete
//                   size="sm"
//                   multiple
//                   placeholder="Select languages"
//                   options={['English', 'French', 'German', 'Portuguese', 'Spanish']}
//                   getOptionLabel={(option) => option}
//                   filterSelectedOptions
//                 />
//               </Box>
//             </AccordionDetails>
//           </Accordion>
//         </AccordionGroup>
//       </Box>
//     );
//   }



function SidePane(props) {
    console.log("SidePaneprops", props);

    return (
      <Box
        {...props}
        sx={[
          {
            bgcolor: 'background.paper',
            borderRight: '1px solid',
            borderColor: 'divider',
            display: {
              xs: 'none',
              md: 'block',
            },
          },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        {/* Header Section */}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h6" color="text.secondary" component="h1">
            People
          </Typography>
          <Button startIcon={<PersonRoundedIcon />} size="small">
            Add new
          </Button>
        </Box>

        {/* Filters Section */}
        <Box
          sx={{
            p: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle1">Filters</Typography>
          <Button size="small" variant="text">
            Clear
          </Button>
        </Box>

        <Box>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">Keywords</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <Autocomplete
                  size="small"
                  options={[
                    { category: 'Position', title: 'Frontend engineer' },
                    { category: 'Position', title: 'Backend engineer' },
                    { category: 'Position', title: 'Product manager' },
                    { category: 'Skill', title: 'JavaScript' },
                    { category: 'Skill', title: 'TypeScript' },
                    { category: 'Skill', title: 'Project management' },
                  ]}
                  groupBy={(option) => option.category}
                  getOptionLabel={(option) => option.title}
                  renderInput={(params) => <TextField {...params} placeholder="Position, skills, etc…" />}
                />
                <Box sx={{ my: 2, display: 'flex', gap: 1 }}>
                  <Chip
                    label="UI designer"
                    onDelete={() => {}}
                    size="small"
                  />
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">Location</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <Autocomplete
                  size="small"
                  options={[
                    'Bangkok',
                    'Amnat Charoen',
                    'Ang Thong',
                    'Bueng Kan',
                    'Buriram',
                    'Chachoengsao',
                    'Chai Nat',
                    'Chaiyaphum',
                    'Chanthaburi',
                    'Chiang Mai',
                    'Chiang Rai',
                    'Chonburi',
                  ]}
                  renderInput={(params) => <TextField {...params} placeholder="Country, city, etc…" />}
                />
                <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle2">Range</Typography>
                  <Slider
                    size="small"
                    valueLabelFormat={(value) => `${value} km`}
                    defaultValue={6}
                    step={1}
                    min={0}
                    max={20}
                    valueLabelDisplay="on"
                  />
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">Education</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <RadioGroup name="education" defaultValue="any">
                  <FormControlLabel value="any" control={<Radio size="small" />} label="Any" />
                  <FormControlLabel value="high-school" control={<Radio size="small" />} label="High School" />
                  <FormControlLabel value="college" control={<Radio size="small" />} label="College" />
                  <FormControlLabel value="post-graduate" control={<Radio size="small" />} label="Post-graduate" />
                </RadioGroup>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">Years of Experience</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <Slider
                  size="small"
                  valueLabelFormat={(value) => `${value} years`}
                  defaultValue={[5, 10]}
                  step={1}
                  min={0}
                  max={30}
                  valueLabelDisplay="on"
                />
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">Languages Spoken</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ my: 2 }}>
                <Autocomplete
                  multiple
                  size="small"
                  options={['English', 'French', 'German', 'Portuguese', 'Spanish']}
                  renderInput={(params) => <TextField {...params} placeholder="Select languages" />}
                  filterSelectedOptions
                />
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    );
  }


  function Main(props) {
    console.log("Mainprops", props);

    return (
      <Box
        component="main"
        className="Main"
        {...props}
        sx={[{ p: 2 }, ...(Array.isArray(props.sx) ? props.sx : [props.sx])]}
      />
    );
  }

  function SideDrawer(props) {
    console.log("SideDrawerprops", props);

    const { onClose, ...other } = props;
    return (
      <Box
        {...other}
        sx={[
          { position: 'fixed', zIndex: 1200, width: '100%', height: '100%' },
          ...(Array.isArray(other.sx) ? other.sx : [other.sx]),
        ]}
      >
        <Box
          role="button"
          onClick={onClose}
          sx={{
            position: 'absolute',
            inset: 0,
            bgcolor: (theme) =>
              `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
          }}
        />
        <Sheet
          sx={{
            minWidth: 256,
            width: 'max-content',
            height: '100%',
            p: 2,
            boxShadow: 'lg',
            bgcolor: 'background.surface',
          }}
        >
          {other.children}
        </Sheet>
      </Box>
    );
  }

  export default {
    Root,
    Header,
    SideNav,
    SidePane,
    SideDrawer,
    Main,
  };
