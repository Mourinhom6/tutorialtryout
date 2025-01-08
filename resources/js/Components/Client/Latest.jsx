import * as React from 'react';
// import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Chip from '@mui/material/Chip';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
// import Pagination from '@mui/material/Pagination';
import ClientPagination from "@/Components/ClientPagination";

import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import {router } from "@inertiajs/react";


import NavigateNextRoundedIcon from '@mui/icons-material/NavigateNextRounded';

import useIsSuperTiny  from "@/MediaQuery";
import {useRoute} from "&/ziggy"
const routing = useRoute();


const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  position: 'relative',
  textDecoration: 'none',
  '&:hover': { cursor: 'pointer' },
  '& .arrow': {
    visibility: 'hidden',
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%)',
  },
  '&:hover .arrow': {
    visibility: 'visible',
    opacity: 0.7,
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '3px',
    borderRadius: '8px',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '1px',
    bottom: 0,
    left: 0,
    backgroundColor: (theme.vars || theme).palette.text.primary,
    opacity: 0.3,
    transition: 'width 0.3s ease, opacity 0.3s ease',
  },
  '&:hover::before': {
    width: '100%',
  },
}));

const TagsBox = ({ tags }) => (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
      {tags.map((tag) => (
        <Chip key={tag.id} label={tag.name} variant="outlined" />
      ))}
    </Box>
  );

  const TitleComponent = ({ title, index, handleFocus, handleBlur, focusedCardIndex }) => (
    <TitleTypography
      gutterBottom
      variant="h6"
      onFocus={() => handleFocus(index)}
      onBlur={handleBlur}
      tabIndex={0}
      className={focusedCardIndex === index ? 'Mui-focused' : ''}
    >
      {title}
      <NavigateNextRoundedIcon
        className="arrow"
        sx={{ fontSize: '1rem' }}
      />
    </TitleTypography>
  );

function Author({ date, authors }) {
    return (
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            }}
        >
            <Box
                sx={{ display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center' }}
            >
                <Avatar
                    key={authors.id}
                    alt={authors.name}
                    src= "https://picsum.photos/200/200?random"
                    sx={{ width: 24, height: 24 }}
                />
                <Typography variant="caption">{authors.name}</Typography>
            </Box>
            <Typography variant="caption">{date}</Typography>
        </Box>
    );
  }

// Author.propTypes = {
//   authors: PropTypes.arrayOf(
//     PropTypes.shape({
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
// };

export default function Latest({ blogs, queryParams}) {

    console.log("blogs from Latest", blogs);

    var latblogs = blogs.data;
    var pagilinks = blogs.meta;
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const {isSuperTiny} = useIsSuperTiny();
    console.log("isSuperTiny", isSuperTiny);



    // console.log("theme", them);
    const theme = useTheme();
const isDarkMode = theme.palette.mode === 'dark';



 console.log("pagilinks", pagilinks);
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Latest
      </Typography>
      <Grid container spacing={8} columns={12} sx={{ my: 4 }}>
        {latblogs.map((article, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6 }}
                onClick={() => {
                    console.log('Clicked blog ID:', article.id);
                    router.get(routing('blogshow', article.id))
                }}
            >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                gap: 1,
                height: '100%',
              }}
            >

            {isDarkMode  ? (
            <>
                <TagsBox tags={article.tags} />
                <TitleComponent
                title={article.title}
                index={index}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                focusedCardIndex={focusedCardIndex}
                />
            </>
            ) : (
            <>
                <TitleComponent
                title={article.title}
                index={index}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                focusedCardIndex={focusedCardIndex}
                />
                <TagsBox tags={article.tags} />
            </>
            )}







              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {article.intro}
              </StyledTypography>

              <Author date={article.date} authors={article.createdBy} />

            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Pagination hidePrevButton hideNextButton count={10} boundaryCount={10} /> */}
        {/* <Pagination count={10} boundaryCount={isSuperTiny ? 1 : 2} variant="outlined" shape="rounded" /> */}
        <ClientPagination meta={pagilinks} issuper={isSuperTiny} />


        {/* <Pagination count={10} boundaryCount={1} variant="outlined" shape="rounded" /> */}
        {/* <Pagination count={11} defaultPage={6} boundaryCount={2} /> */}
      </Box>
    </div>
  );
}
