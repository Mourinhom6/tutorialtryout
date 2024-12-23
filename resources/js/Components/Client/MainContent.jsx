import * as React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
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

function Author({ authors }) {
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
        <AvatarGroup max={3}>
          {authors.map((author, index) => (
            <Avatar
              key={index}
              alt={author.name}
              src={author.avatar}
              sx={{ width: 24, height: 24 }}
            />
          ))}
        </AvatarGroup>
        <Typography variant="caption">
          {authors.map((author) => author.name).join(', ')}
        </Typography>
      </Box>
      <Typography variant="caption">July 14, 2021</Typography>
    </Box>
  );
}

Author.propTypes = {
  authors: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default function MainContent({
        blogs,
        queryParams = null,
}) {
    const [selectedTag, setSelectedTag] = React.useState("All");
    const [quickFilterText, setQuickFilterText] = React.useState("");

    const searchFieldChanged = (name, value) => {
      if (value) {
        queryParams[name] = value;
      } else {
        delete queryParams[name];
      }
      router.get(route("blog.index"), queryParams); // Use the correct blog route
    };

    const onKeyDown = (name, e) => {
      if (e.key !== "Enter") return;
      searchFieldChanged(name, e.target.value);
    };

    const handleClick = (tag) => {
      setSelectedTag(tag);
      if (tag === "All") {
        delete queryParams.tags; // Remove the tag filter if 'All' is selected
      } else {
        queryParams.tags = tag;
      }
      router.get(route("blog.index"), queryParams); // Use the correct blog route
    };

    // const onQuickFilterChange = (event) => {
    //   setQuickFilterText(event.target.value);
    // };

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };




  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1" gutterBottom>
          Blog
        </Typography>
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
                // value={quickFilterText}
                // onChange={onQuickFilterChange}
                defaultValue={queryParams.name}
                label="Task Name"
                onBlur={(e) => searchFieldChanged("name", e.target.value)}
                onKeyDown={(e) => onKeyDown("name", e)}
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
            <Chip onClick={() => handleClick('All')} size="medium" label="All categories" />

            <Chip onClick={() => handleClick('Company')} size="medium" label="Company" sx={{ backgroundColor: 'transparent', border: 'none', }}/>

            <Chip onClick={() => handleClick('Product')} size="medium" label="Product" sx={{ backgroundColor: 'transparent', border: 'none', }}/>

            <Chip onClick={() => handleClick('Design')} size="medium" label="Design" sx={{ backgroundColor: 'transparent', border: 'none', }}/>

            <Chip onClick={() => handleClick('Engineering')} size="medium" label="Engineering" sx={{ backgroundColor: 'transparent', border: 'none', }}/>
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
          {/* <Search /> */}
          <FormControl sx={{ width: { xs: '100%', md: '25ch' } }} variant="outlined">
            <OutlinedInput
                size="small"
                id="search"
                // value={quickFilterText}
                // onChange={onQuickFilterChange}
                defaultValue={queryParams.name}
                label="Task Name"
                onBlur={(e) => searchFieldChanged("name", e.target.value)}
                onKeyDown={(e) => onKeyDown("name", e)}
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
      </Box>
      <Grid container spacing={2} columns={12}>
        <Grid size={{ xs: 12, md: 6 }}>
          <SyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
          >
            <CardMedia
              component="img"
              alt="green iguana"
              image={cardData[0].img}
              sx={{
                aspectRatio: '16 / 9',
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <SyledCardContent>
              <Typography gutterBottom variant="caption" component="div">
                {cardData[0].tag}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                {cardData[0].title}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {cardData[0].description}
              </StyledTypography>
            </SyledCardContent>
            <Author authors={cardData[0].authors} />
          </SyledCard>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
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
    </Box>
  );
}


function BlogGrid({ blogs }){
    const firstFiveBlogs = blogs.slice(0, 5);

    return (
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* First two large cards */}
        {firstFiveBlogs.slice(0, 2).map((blog, index) => (
          <div key={blog.id} className="md:col-span-6">
            <Card className="h-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-video object-cover border-b border-gray-200"
              />
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 mb-2">{blog.category}</div>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="flex items-center gap-2">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">{blog.author.name}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}

        {/* Last three cards in a row */}
        {firstFiveBlogs.slice(2, 5).map((blog, index) => (
          <div key={blog.id} className="md:col-span-4">
            <Card className="h-full">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full aspect-video md:h-48 object-cover border-b border-gray-200"
              />
              <CardContent className="p-4">
                <div className="text-sm text-gray-500 mb-2">{blog.category}</div>
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <div className="flex items-center gap-2">
                  <img
                    src={blog.author.avatar}
                    alt={blog.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="text-sm">{blog.author.name}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    );
};
