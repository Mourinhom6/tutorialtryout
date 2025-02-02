import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from "@mui/material/Stack";
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
// import useLoading from '@/Components/Loading';


// import CircularSke from '@/Components/Skeletons';


import {useRoute} from "&/ziggy"
const routing = useRoute();

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
// const SyledCard = styled(Card)(({ theme }) => {
//     console.log('SyledCard theme:', theme);
//     console.log('SyledCard theme.palette:', theme.palette);
//     console.log('SyledCard theme.vars:', theme.vars);

//     return {
//       display: 'flex',
//       flexDirection: 'column',
//       padding: 0,
//       height: '100%',
//       backgroundColor: (theme.vars || theme).palette.background.paper,
//       '&:hover': {
//         backgroundColor: 'transparent',
//         cursor: 'pointer',
//       },
//       '&:focus-visible': {
//         outline: '3px solid',
//         outlineColor: 'hsla(210, 98%, 48%, 0.5)',
//         outlineOffset: '2px',
//       },
//     };
//   });


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
        {/* <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author_name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup> */}
        <Typography variant="caption">
          {/* {authors.map((author) => author_name).join(', ')} */}
          {authors.name}
        </Typography>
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

// <Grid container spacing={2} columns={12}>
//             {blogsRepresentive.map((card, index) => (
//                 <Grid item  size={{ xs: 12, md: 6 }} key={index}>
//                     <SyledCard
//                         variant="outlined"
//                         onFocus={() => handleFocus(index)}
//                         onBlur={handleBlur}
//                         tabIndex={0}
//                         // className={focusedCardIndex === index ? 'Mui-focused' : ''}
//                     >
//                         <CardMedia
//                         component="img"
//                         alt={card.title}
//                         image={card.img}
//                         sx={{
//                             aspectRatio: '16 / 9',
//                             borderBottom: '1px solid',
//                             borderColor: 'divider',
//                         }}
//                         />
//                         <SyledCardContent>
//                         <Typography gutterBottom variant="caption" component="div">
//                             {card.tag}
//                         </Typography>
//                         <Typography gutterBottom variant="h6" component="div">
//                             {card.title}
//                         </Typography>
//                         <StyledTypography variant="body2" color="text.secondary" gutterBottom>
//                             {card.description}
//                         </StyledTypography>
//                         </SyledCardContent>
//                         {/* <Author authors={card.authors} /> */}
//                     </SyledCard>
//                 </Grid>
//             ))}

//         </Grid>




// export default function MainContent({ blogs, queryParams = null}) {

//     const TAG_KEY = "tag";
//     const [selectedTag, setSelectedTag] = React.useState("All");
//     const [quickFilterText, setQuickFilterText] = React.useState("");
//     const [localQueryParams, setLocalQueryParams] = React.useState(queryParams);

//     const blogsRepresentive = blogs.blogs.data;

//     console.log("blogsRepresentive",blogsRepresentive);

//     const searchFieldChanged = (name, value) => {
//         const newQueryParams = { ...queryParams };
//         if (value && name) {
//           newQueryParams[name] = value;
//         } else {
//           delete newQueryParams[name];
//         }
//         router.get(route("blog"), newQueryParams);
//     };

//     const onKeyDown = (name, e) => {
//       if (e.key !== "Enter") return;
//       searchFieldChanged(name, e.target.value);
//     };

//      const tagChanged = (tag) => {
//     console.log("Selected Tag:", tag);

//     setSelectedTag(tag); // Update state
//   };

//   React.useEffect(() => {
//     const newQueryParams = { ...localQueryParams };
//     if (selectedTag === "All") {
//       delete newQueryParams[TAG_KEY];
//     } else {
//       newQueryParams[TAG_KEY] = selectedTag;
//     }
//     setLocalQueryParams(newQueryParams); // Update local state
//     router.get(route("blog"), newQueryParams);
// }, [selectedTag]);





// const searchFieldChanged = (name, value) => {
    //     if (value && name) {
    //       queryParams[name] = value;
    //     } else {
    //       delete queryParams[name];
    //     }
    //     router.get(route("blog"), queryParams);
    // };

// React.useEffect(() => {
//     console.log("Updated SelectedTag:", selectedTag);
//     const newQueryParams = { ...queryParams };

//     if (selectedTag === "All") {
//       delete newQueryParams[TAG_KEY];
//     } else {
//       newQueryParams[TAG_KEY] = selectedTag;
//     }

//     console.log("Sended to the back-end:", newQueryParams);
//     router.get(route("blog"), newQueryParams); // Sends a request
// }, [selectedTag]);


// React.useEffect(() => {
//     const newQueryParams = { ...localQueryParams };
//     if (selectedTag === "All") {
//       delete newQueryParams[TAG_KEY];
//     } else {
//       newQueryParams[TAG_KEY] = selectedTag;
//     }
//     setLocalQueryParams(newQueryParams); // Update local state
//     router.get(route("blog"), newQueryParams);
// }, [selectedTag]);

  // Effect to update the backend when selectedTag changes
//     React.useEffect(() => {
//     console.log("Updated SelectedTag:", selectedTag);

//     // Create a copy of queryParams to avoid directly mutating the prop
//     const newQueryParams = { ...queryParams };

//     if (selectedTag === "All") {
//       delete newQueryParams[TAG_KEY]; // Remove the tag filter if "All" is selected
//     } else {
//       newQueryParams[TAG_KEY] = selectedTag; // Set the tag filter
//     }

//     console.log("Sended to the back-end:", newQueryParams);
//     router.get(route("blog"), newQueryParams); // Send updated queryParams to the backend
//   }, [selectedTag]); // Only re-run when selectedTag changes

    // React.useEffect(() => {
    //     console.log("Updated SelectedTag:2", selectedTag);
    //      // This will log after the state updates
    //      if (selectedTag === "All") {
    //         delete queryParams[tag]; // Remove the tag filter if 'All' is selected
    //       } else {
    //         queryParams[tag] = selectedTag; // Use `tag` (singular) instead of `tags`
    //       }
    //        console.log("Sended to the back-end 2:");
    //       router.get(route("blog"), queryParams);
    //   }, [selectedTag]);

    // Other functions


    // const onQuickFilterChange = (event) => {
    //   setQuickFilterText(event.target.value);
    // };

    // const searchFieldChanged = (name, value) => {
    // if (value) {
    //     queryParams[name] = value;
    // } else {
    //     delete queryParams[name];
    // }
    // router.get(route("blog"), queryParams);
    // };

//     const searchFieldChanged = (name, value) => {
//         const newQueryParams = { ...queryParams }; // Clone the current queryParams

//         if (value) {
//           newQueryParams[name] = value;
//         } else {
//           delete newQueryParams[name];
//         }

//         // Trigger a new GET request with updated queryParams
//         router.get(route("blog"), newQueryParams);
//       };

//     const onKeyDown = (name, e) => {
//     if (e.key !== "Enter") return;
//     searchFieldChanged(name, e.target.value);
//     };

//     const tagChanged = (tag) => {
//         const newQueryParams = { ...queryParams }; // Create a copy

//         if (tag === "All") {
//           delete newQueryParams[TAG_KEY];
//         } else {
//           newQueryParams[TAG_KEY] = tag;
//         }

//         router.get(route("blog"), newQueryParams);
//       };
export default function MainContent({ blogs, queryParams = null}) {

    // const { isLoading, startLoading, stopLoading } = useLoading();
    // console.log("isLoading",isLoading);
    // console.log("startLoading",startLoading);
    // console.log("stopLoading",stopLoading);

    // React.useEffect(() => {
    //     startLoading();
    //     // Simula uma operação assíncrona
    //     setTimeout(() => {
    //       stopLoading();
    //     }, 2000);
    //   }, []);



    console.log("mainfirstblogs",blogs);

//     const TAG_KEY = "tag";

const [titleFilter, setTitleFilter] = React.useState(queryParams?.title || '');
const [selectedTags, setSelectedTags] = React.useState(queryParams?.tags ? queryParams.tags.split(',') : []);

console.log("selectedTags",selectedTags);

const handleTitleChange = (value) => {
    setTitleFilter(value);
    applyFilters(value, selectedTags);
};


const handleTagChange = (tagId) => {
    let newTags;
    if (tagId === 'all') {
        newTags = [];
    } else {
        newTags = selectedTags.includes(tagId)
            ? selectedTags.filter(id => id !== tagId)
            : [...selectedTags, tagId];
    }
    setSelectedTags(newTags);
    applyFilters(titleFilter, newTags);
};

// const applyFilters = (title, tags) => {
//     const newQueryParams = {};
//     if (title) newQueryParams.title = title;
//     if (tags.length > 0) newQueryParams.tags = tags.join(',');
//     router.get(route("blog"), newQueryParams);
// };
const applyFilters = (title, tags) => {
    const newQueryParams = {};
    if (title) newQueryParams.title = title;
    if (tags.length > 0) newQueryParams.tags = tags.join(',');
    console.log('Sending query params:', newQueryParams);
    router.get(routing("blog"), newQueryParams);
};







// const searchFieldChanged = (name, value) => {
//     const newQueryParams = { ...queryParams }; // Clone the current queryParams

//     if (value) {
//       newQueryParams[name] = value; // Add or update the 'name' filter
//     } else {
//       delete newQueryParams[name]; // Remove the 'name' filter if the value is empty
//     }

//     // Make sure we also pass the tag filter if it exists
//     if (queryParams[TAG_KEY]) {
//         newQueryParams[TAG_KEY] = queryParams[TAG_KEY];
//     }

//     // Trigger a new GET request with updated queryParams
//     router.get(route("blog"), newQueryParams);
// };

// const onKeyDown = (name, e) => {
//     if (e.key !== "Enter") return;
//     searchFieldChanged(name, e.target.value);
// };

// const tagChanged = (tag) => {
//     const newQueryParams = { ...queryParams }; // Clone the current queryParams

//     if (tag === "All") {
//         delete newQueryParams[TAG_KEY]; // Remove the tag filter if "All" is selected
//     } else {
//         newQueryParams[TAG_KEY] = tag; // Add or update the tag filter
//     }

//     // Make sure we also pass the name filter if it exists
//     if (queryParams["name"]) {
//         newQueryParams["name"] = queryParams["name"];
//     }

//     // Trigger a new GET request with updated queryParams
//     router.get(route("blog"), newQueryParams);
// };


  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  console.log("QueryParams:", queryParams);

console.log("selectedTags:", selectedTags);
// if (isLoading) {
//     return
//     <BlogSkeletonPage/>
// }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div>
            <Typography variant="h1" gutterBottom>Blog</Typography>
            <Typography>Stay in the loop with the latest about our products</Typography>
        </div>
        <Box
            sx={{
            display: { xs: 'flex', sm: 'none' },
            flexDirection: 'row',
            gap: 1,
            width: { xs: '100%', md: 'fit-content' },
            overflow: 'auto',
            }}
        >
            {/* <Search /> */}
            <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                defaultValue=""
                label="Task Name"
                // onBlur={(e) => searchFieldChanged("name", e.target.value)}
                // onKeyDown={(e) => onKeyDown("name", e)}
                value={titleFilter}
                // onChange={(e) => e.key === 'Enter' &&  handleTitleChange(e.target.value)}
                // onKeyDown={(e) => e.key === 'Enter' && applyFilters()}
                onKeyDown={(e) => e.key === 'Enter' &&  handleTitleChange(e.target.value)}

                placeholder="Search…"
                sx={{ flexGrow: 1 }}
                startAdornment={
                    <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                    <SearchRoundedIcon fontSize="small" />
                    </InputAdornment>
                }
                inputProps={{
                    'aria-label': 'search',
                }}
            />

            </FormControl>
            <IconButton size="small" aria-label="RSS feed">
            <RssFeedRoundedIcon />
            </IconButton>
        </Box>
        <Box
            sx={{
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            width: '100%',
            justifyContent: 'space-between',
            alignItems: { xs: 'start', md: 'center' },
            gap: 4,
            overflow: 'auto',
            }}
        >
            <Box
                sx={{
                    display: 'inline-flex',
                    flexDirection: 'row',
                    gap: 3,
                    overflow: 'auto',
                }}
            >
                {/* <Chip onClick={() => tagChanged('All')} size="medium" label="All categories" />

                <Chip onClick={() => tagChanged('Company')} size="medium" label="Company" sx={{ backgroundColor: 'transparent', border: 'none', }}/>

                <Chip onClick={() => tagChanged('Product')} size="medium" label="Product" sx={{ backgroundColor: 'transparent', border: 'none', }}/>

                <Chip onClick={() => tagChanged('Design')} size="medium" label="Design" sx={{ backgroundColor: 'transparent', border: 'none', }}/>

                <Chip onClick={() => tagChanged('Engineering')} size="medium" label="Engineering" sx={{ backgroundColor: 'transparent', border: 'none', }}/> */}

                <Chip
                    onClick={() => handleTagChange('all')}
                    size="medium"
                    label="All categories"
                    // color={selectedTags.length === 0 ? "primary" : "default"}
                    sx={(theme) => ({
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: selectedTags.length === 0 ? "#ff0e0e" : "default",
                        ...theme.applyStyles('dark', {
                            color: selectedTags.length === 0 ? "#cb0404" : "default"
                        }),
                    })}
                />

                {['Eventos', 'Aquisições & Concursos', 'Sustentabilidade', 'Avisos Gerais'].map(tag => (
                     <Chip
                        key={tag}
                        onClick={() => handleTagChange(tag)}
                        size="medium"
                        label={tag}
                        // color={selectedTags.includes(tag) ? "primary" : "default"}
                        sx={(theme) => ({
                            backgroundColor: 'transparent',
                            border: 'none',
                            color: selectedTags.includes(tag) ? "#ff0e0e" : "default",
                            ...theme.applyStyles('dark', {
                                color: selectedTags.includes(tag) ? "#cb0404" : "default"
                            }),
                        })}
                    />
                ))}
            </Box>
            <Box
                sx={{
                    display: { xs: 'none', sm: 'flex' },
                    flexDirection: 'row',
                    gap: 1,
                    width: { xs: '100%', md: 'fit-content' },
                    overflow: 'auto',
            }}
            >
                <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
                    <OutlinedInput
                    size="small"
                    id="search"
                    defaultValue=""
                    // defaultValue={queryParams[name]}
                    // defaultValue= " "
                    label="Task Name"
                    // onBlur={(e) => searchFieldChanged("name", e.target.value)}
                    // onKeyDown={(e) => onKeyDown("name", e)}
                    value={titleFilter}
                    // onChange={(e) => handleTitleChange(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' &&  handleTitleChange(e.target.value)}

                    // onKeyDown={(e) => e.key === 'Enter' && applyFilters()}
                    placeholder="Search…"
                    sx={{ flexGrow: 1 }}
                    startAdornment={
                        <InputAdornment position="start" sx={{ color: 'text.primary' }}>
                        <SearchRoundedIcon fontSize="small" />
                        </InputAdornment>
                    }
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </FormControl>
                <IconButton size="small" aria-label="RSS feed">
                    <RssFeedRoundedIcon />
                </IconButton>
            </Box>
        </Box>
        <BlogGrid blogs={blogs} />
    </Box>
  );
}


function BlogGrid({ blogs }){
    console.log("blogs6",blogs);  // Check what 'blogs' looks like when it's received
    const blogsRepresentive = blogs.data;
    console.log("blogs.data",blogs.data);

    // const routing = useRoute();


    const firstFiveBlogs = blogsRepresentive.slice(0, 5);

    return (
        <Grid container spacing={2} columns={12}>
        {/* First two large cards */}
        {firstFiveBlogs.slice(0, 2).map((blog) => (
            <Grid item size={{ xs: 12, md: 6 }} key={blog.id}
                onClick={() => {
                    console.log('Clicked blog ID:', blog.id);
                    router.get(routing('blogshow', blog.id));
                }}
            >
                <SyledCard variant="outlined">
                    <CardMedia
                        component="img"
                        alt={blog.title}
                        image={blog.img_main}
                        sx={{
                            aspectRatio: '16 / 9',
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                        }}
                    />
                    <SyledCardContent>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                            {blog.tags.map((tag) => (
                                <Chip key={tag.id} label={tag.name} variant="outlined" />
                            ))}
                        </Box>
                        <Typography gutterBottom variant="h6" component="div">
                            {blog.title}
                        </Typography>
                        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                            {blog.subtitle}
                        </StyledTypography>
                    </SyledCardContent>
                    <Author date={blog.date} authors={blog.createdBy} />
                </SyledCard>
            </Grid>
    ))}
        {/* Last three cards in a row */}
        {firstFiveBlogs.slice(2, 5).map((blog) => (
            <Grid item  size={{ xs: 12, md: 4 }} key={blog.id}
                onClick={() => {
                    console.log('Clicked blog ID:', blog.id);
                    router.get(routing('blogshow', blog.id));
                }}
            >
                <SyledCard variant="outlined">
                    <CardMedia
                        component="img"
                        alt={blog.title}
                        image={blog.img_main}
                        sx={{
                            aspectRatio: '16 / 9',
                            borderBottom: '1px solid',
                            borderColor: 'divider',
                        }}
                    />
                    <SyledCardContent>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                            {blog.tags.map((tag) => (
                                <Chip key={tag.id} label={tag.name} variant="outlined" />
                            ))}
                        </Box>
                        <Typography gutterBottom variant="h6" component="div">
                            {blog.title}
                        </Typography>
                        <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                            {blog.subtitle}
                        </StyledTypography>
                    </SyledCardContent>
                    <Author date={blog.date} authors={blog.createdBy} />
                </SyledCard>
            </Grid>
        ))}
      </Grid>
    );
};

      {/*   <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(1)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 1 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[1].img}
              aspect-ratio="16 / 9"
              sx={{
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[1].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[1].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[1].description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={cardData[1].authors} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(2)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 2 ? 'Mui-focused' : ''}
            sx={{ height: '100%' }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[2].img}
              sx={{
                height: { sm: 'auto', md: '50%' },
                aspectRatio: { sm: '16 / 9', md: '' },
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[2].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[2].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[2].description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={cardData[2].authors} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, height: '100%' }}
          >
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(3)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 3 ? 'Mui-focused' : ''}
              sx={{ height: '100%' }}
            >
              <SyledCardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <Typography gutterBottom variant="caption" component="div">
                    {cardData[3].tag}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {cardData[3].title}
                  </Typography>
                  <StyledTypography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {cardData[3].description}
                  </StyledTypography>
                </div>
              </SyledCardContent>
              <Author authors={cardData[3].authors} />
            </SyledCard>
            <SyledCard
              variant="outlined"
              onFocus={() => handleFocus(4)}
              onBlur={handleBlur}
              tabIndex={0}
              className={focusedCardIndex === 4 ? 'Mui-focused' : ''}
              sx={{ height: '100%' }}
            >
              <SyledCardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <div>
                  <Typography gutterBottom variant="caption" component="div">
                    {cardData[4].tag}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {cardData[4].title}
                  </Typography>
                  <StyledTypography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {cardData[4].description}
                  </StyledTypography>
                </div>
              </SyledCardContent>
              <Author authors={cardData[4].authors} />
            </SyledCard>
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(5)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 5 ? 'Mui-focused' : ''}
            sx={{ height: '100%' }}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[5].img}
              sx={{
                height: { sm: 'auto', md: '50%' },
                aspectRatio: { sm: '16 / 9', md: '' },
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[5].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[5].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[5].description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={cardData[5].authors} />
          </SyledCard>
        </Grid>
      </Grid>
    </Box> */}



    const BlogSkeletonPage = () => {
        return (
          <Box sx={{ padding: 3 }}>
            {/* Blog Title and Subtitle */}
            <Stack spacing={2} sx={{ marginBottom: 3 }}>
              <Skeleton variant="text" width={200} height={40} />
              <Skeleton variant="text" width={300} height={20} />
            </Stack>

            {/* Categories Buttons */}
            <Stack direction="row" spacing={2} sx={{ marginBottom: 3, flexWrap: 'wrap' }}>
              {Array(5).fill("").map((_, index) => (
                <Skeleton key={index} variant="rectangular" width={100} height={40} sx={{ marginBottom: 1 }} />
              ))}
            </Stack>

            {/* Search Bar */}
            <Box sx={{ marginBottom: 3 }}>
              <Skeleton variant="rectangular" width={300} height={40} />
            </Box>

            {/* Blog Cards */}
            <Grid container spacing={3}>
              {Array(4).fill("").map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Stack spacing={2}>
                    {/* Image */}
                    <Skeleton variant="rectangular" width="100%" height={200} />
                    {/* Tags */}
                    <Skeleton variant="text" width="60%" height={20} />
                    {/* Title */}
                    <Skeleton variant="text" width="80%" height={30} />
                    {/* Description */}
                    <Skeleton variant="text" width="90%" height={20} />
                    <Skeleton variant="text" width="90%" height={20} />
                    {/* Author and Date */}
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Skeleton variant="circular" width={40} height={40} />
                      <Stack spacing={1} sx={{ flexGrow: 1 }}>
                        <Skeleton variant="text" width="40%" height={20} />
                        <Skeleton variant="text" width="30%" height={20} />
                      </Stack>
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        );
      };
