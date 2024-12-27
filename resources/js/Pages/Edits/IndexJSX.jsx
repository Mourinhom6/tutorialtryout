import * as React from 'react';
import PropTypes from 'prop-types';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RssFeedRoundedIcon from '@mui/icons-material/RssFeedRounded';
import { Link, router } from "@inertiajs/react";

import {useRoute} from "&/ziggy"
const route = useRoute();


const SyledCard = styled(Card)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    height: '100%',
    backgroundColor: (theme.vars || theme).palette.background.paper,
    '&:hover': {
      backgroundColor: 'transparent',
      cursor: 'pointer',
    },
    '&:focus-visible': {
      outline: '3px solid',
      outlineColor: 'hsla(210, 98%, 48%, 0.5)',
      outlineOffset: '2px',
    },
  }));

  const SyledCardContent = styled(CardContent)({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    padding: 16,
    flexGrow: 1,
    '&:last-child': {
      paddingBottom: 16,
    },
  });

  const StyledTypography = styled(Typography)({
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  });




export default function Edits({ edits, queryParams = null}){
    console.log("editss",edits.edits);  // Check what 'edits' looks like when it's received
    const editsRepresentive = edits.edits.data;
    console.log("edits.edits.data",edits.edits.data);

    const multp =1.5  //3 for big icons, 1.5 for midium icons, 1 for small icons and 0.5 for table displayment
    const mdSize = Math.min(12, Math.round(4 * multp));
    console.log("Edits:1", edits);

    console.log("Edits:2", edits.edits.data);

    const { props: pageProps } = usePage();
    console.log("Props3:", pageProps);
    console.log("Edits:3", edits.edits.data);




    const firstFiveEdits = editsRepresentive.slice(0, 5);

    return (
        <WorkSpace
      breadcum={breadcum}
      user={auth.user}
      header={
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Projects
          </h2>
          <Link
            href={route("project.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >

        <Head title="Edits" />

        <Grid container spacing={2} columns={12}>
        {/* First two large cards */}
            {firstFiveEdits.slice(0, 2).map((edits, index) => (
                <Grid item size={{ xs: 12, md: mdSize }} key={edits.id}>
                    <SyledCard variant="outlined">
                        <CardMedia
                            component="img"
                            alt={edits.title}
                            image={edits.img}
                            sx={{
                                aspectRatio: '16 / 9',
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                            }}
                        />
                        <SyledCardContent>
                            <Typography gutterBottom variant="caption" component="div">
                                {edits.tag}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {edits.title}
                            </Typography>
                            <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                                {edits.description}
                            </StyledTypography>
                        </SyledCardContent>
                    </SyledCard>
                </Grid>
            ))}
        </Grid>
    </WorkSpace>

    );
};
