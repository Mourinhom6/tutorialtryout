import WorkSpace  from "@/Layouts/WorkSpace";
import { Head, Link } from "@inertiajs/react";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
  BLOG_STATUS_CLASS_MAP,
  BLOG_STATUS_TEXT_MAP,

} from "@/constants.jsx";

import {ClientTheme} from '@/Components/AppTheme';
import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';

import {
    Box,
    Typography,
    Card,
    CardMedia,
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

import ImageMasonry from '@/Components/Mansory';


const StyledCard = styled(Card)(({ theme }) => ({
    maxWidth: 900,
    margin: '0 auto',
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  }));

  const StyledChip = styled(Chip)(({ theme }) => ({
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  }));



// const itemData = [
//         { img: 'https://picsum.photos/500/700?random=1', title: 'Fern' },
//         { img: 'https://picsum.photos/320/480?random=2', title: 'Snacks' },
//         { img: 'https://picsum.photos/600/400?random=3', title: 'Mushrooms' },
//         { img: 'https://picsum.photos/450/750?random=4', title: 'Tower' },
//         { img: 'https://picsum.photos/520/640?random=5', title: 'Sea star' },
//         { img: 'https://picsum.photos/400/500?random=6', title: 'Honey' },
//         { img: 'https://picsum.photos/480/320?random=7', title: 'Basketball' },
//         { img: 'https://picsum.photos/560/460?random=8', title: 'Breakfast' },
//         { img: 'https://picsum.photos/700/600?random=9', title: 'Tree' },
//         { img: 'https://picsum.photos/460/520?random=10', title: 'Burger' },
//         { img: 'https://picsum.photos/360/640?random=11', title: 'Camera' },
//         { img: 'https://picsum.photos/400/400?random=12', title: 'Coffee' },
//         { img: 'https://picsum.photos/500/550?random=13', title: 'Camping Car' },
//         { img: 'https://picsum.photos/300/600?random=14', title: 'Hats' },
//         { img: 'https://picsum.photos/600/450?random=15', title: 'Tomato basil' },
//         { img: 'https://picsum.photos/550/400?random=16', title: 'Mountain' },
//         { img: 'https://picsum.photos/500/300?random=17', title: 'Bike' }
//   ];


// import TasksTable from "../Task/TasksTableJSX";

// export default function Show({ auth, success, edit, tasks, queryParams, blog }) {
export default function Show({ auth, edit, success, queryParams, breadcum }) {
    console.log('edit:', edit);
    console.log('success:', success);
    console.log('queryParams:', queryParams);
    console.log('breadcum:', breadcum);

    const theme2 = ClientTheme();

    const {isSuperTiny} = useIsSuperTiny();
    const theme = useTheme();



    return (

    <WorkSpace

      user={auth.user}
    //   header={
    //     <div className="flex items-center justify-between">
    //       <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
    //         {`Project "${project.name}"`}
    //       </h2>
    //       <Link
    //         href={route("project.edit", project.id)}
    //         className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
    //       >
    //         Edit
    //       </Link>
    //     </div>
    //   }
    >
        <Head title={`Edit "${edit.title}"`} />
        {/* <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {`Project "${project.name}"`}
            </h2> */}
            {/* <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {`Project "${edit.title}"`}
            </h2> */}
            {/* <Link
                href={route("project.edit", project.id)}
                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
            >
                Edit
            </Link>
            </div> */}


        {/* <div className="pb-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 dark:text-gray-100">
                <TasksTable
                    tasks={tasks}
                    success={success}
                    queryParams={queryParams}
                    hideProjectColumn={true}
                />
                </div>
            </div>
            </div>
        </div> */}


            {/* <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`Project "${edit.title}"`}
            </h2> */}
            {/* <Link
                // href={route("project.edit",{ project: edit.id })}
                href={route("edits.edit", edit.id)}

                className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
            >
                Edit
            </Link> */}
             {/* <div className="flex items-center justify-between">
            <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                {`Edit "${edit.title}"`}
            </h2>
        </div> */}
        {/* <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                    <div>
                        <img
                        src={edit.img}
                        alt=""
                        className="w-full h-64 object-cover"
                        />
                    </div>
                    <div className="p-6 text-gray-900 dark:text-gray-100">
                        <div className="grid gap-1 grid-cols-2 mt-2">
                            <div>
                                <div>
                                    <label className="font-bold text-lg">Etit ID</label>
                                    <p className="mt-1">{edit.id}</p>
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg">Etit Name</label>
                                    <p className="mt-1">{edit.title}</p>
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg">Etit State</label>
                                    <p className="mt-1">
                                        <span
                                            className={ "px-2 py-1 rounded text-white " + BLOG_STATUS_CLASS_MAP[edit.state]}>
                                            {BLOG_STATUS_TEXT_MAP[edit.state]}
                                        </span>
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg">Created By</label>
                                    <p className="mt-1">{edit.createdBy.name}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label className="font-bold text-lg">Date</label>
                                    <p className="mt-1">{edit.date}</p>
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg">Create Date</label>
                                    <p className="mt-1">{edit.created_at}</p>
                                </div>
                                <div className="mt-4">
                                    <label className="font-bold text-lg">Updated By</label>
                                    <p className="mt-1">{edit.updatedBy.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <label className="font-bold text-lg">Blog Description</label>
                            <p className="mt-1">{edit.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <Box
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
        </Box>

        <Box sx={{ py: 6 }}>
            <Box sx={{ maxWidth: 'lg', mx: 'auto', px: { sm: 3, lg: 4 } }}>
                <Card sx={{ overflow: 'hidden', boxShadow: 1, borderRadius: 1 }}>
                <CardMedia
                    sx={{ maxHeight: 256 }}
                    component="img"
                    height="256px"
                    image={edit.img_main}
                    alt=""
                />
                <CardContent sx={{ p: 3 }}>
                    <Grid container spacing={2}>
                    <Grid item  size={{ xs: 12, sm: 6 }}>
                        <Box sx={{  mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Edit ID</Typography>
                        <Typography variant="body1">{edit.id}</Typography>
                        </Box>
                        <Box sx={{  mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Edit Title</Typography>
                        <Typography variant="body1">{edit.title}</Typography>
                        </Box>
                        <Box sx={{  mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Edit State</Typography>
                        <Chip
                            label={BLOG_STATUS_TEXT_MAP[edit.state]}
                            color="primary"
                            sx={{
                            mt: 1,
                            backgroundColor: BLOG_STATUS_CLASS_MAP[edit.state],
                            color: 'white',
                            }}
                        />
                        </Box>
                        <Box sx={{  mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Created By</Typography>
                        <Typography variant="body1">{edit.createdBy.name}</Typography>
                        </Box>
                    </Grid>
                    <Grid item  size={{ xs: 12, sm: 6 }}>
                        <Box sx={{  mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Date</Typography>
                        <Typography variant="body1">{edit.date}</Typography>
                        </Box>
                        <Box sx={{  mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Create Date</Typography>
                        <Typography variant="body1">{edit.created_at}</Typography>
                        </Box>
                        <Box sx={{  mb: 2 }}>
                        <Typography variant="h6" fontWeight="bold">Updated By</Typography>
                        <Typography variant="body1">{edit.updatedBy.name}</Typography>
                        </Box>
                    </Grid>
                    </Grid>
                    <Box sx={{  mt: 2 }}>
                    <Typography variant="h6" fontWeight="bold">Blog Subtitle</Typography>
                    <Typography variant="body1">{edit.subtitle}</Typography>
                    </Box>
                </CardContent>
                </Card>
            </Box>
        </Box>




        <ThemeProvider theme={theme2} >
            <StyledCard>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="overline" color="primary" gutterBottom>
                        Featured Article
                    </Typography>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {/* Exploring the Future of AI: Breakthroughs and Challenges */}
                        {edit.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="p">
                        {/* An in-depth look at recent advancements in artificial intelligence and their potential impact on society. */}
                        {edit.subtitle}
                    </Typography>

                    {/* <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar src="/static/images/avatar/1.jpg" sx={{ mr: 2 }} />
                            <Box>
                                <Typography variant="subtitle2">John Doe</Typography>
                                <Typography variant="caption" color="text.secondary">
                                    AI Researcher & Tech Journalist
                                </Typography>
                            </Box>
                        </Box>
                        <Button variant="outlined" color="primary">
                            Share Article
                        </Button>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                        <AccessTimeIcon sx={{ fontSize: 'small', mr: 1 }} color="action" />
                        <Typography variant="body2" color="text.secondary">
                            January 3, 2025 • 10 min read
                        </Typography>
                    </Box> */}
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
                        <AccessTimeIcon sx={{ fontSize: 'small', mr: 1 }} color="action" />
                        <Typography variant="body2" color="text.secondary">
                        {/* January 3, 2025 */} {edit.date} • {edit.size} min read
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {edit.tags.map((tag) => (
                            <StyledChip key={tag.id} label={tag.name} variant="outlined"/>
                        ))}
                    </Box>

                    {/* <Box sx={{ mb: 3 }}>
                        <StyledChip label="Artificial Intelligence" />
                        <StyledChip label="Technology" />
                        <StyledChip label="Future" />
                    </Box> */}

                    <Typography variant="body1" sx={{ display: { xs: 'block', md: 'none' } }} component="p">
                        {/* Artificial Intelligence has made remarkable strides in recent years, transforming industries and reshaping our daily lives. From self-driving cars to advanced natural language processing, AI continues to push the boundaries of what's possible. */}
                        {edit.intro}
                    </Typography>

                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Box
                                component="img"
                                src={edit.img_main}
                                // alt="AI visualization"
                                sx={{ width: '100%', borderRadius: 1 }}
                            />
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography variant="body1" sx={{ mb: 4, display: { xs: 'none', md: 'block' } }} component="p">
                                {/* Artificial Intelligence has made remarkable strides in recent years, transforming industries and reshaping our daily lives. From self-driving cars to advanced natural language processing, AI continues to push the boundaries of what's possible. */}
                                {edit.intro}
                            </Typography>
                            <Typography variant="body1">
                                {/* This image illustrates the complex networks that form the basis of modern AI systems. These intricate connections mimic the neural pathways of the human brain, allowing machines to process and analyze vast amounts of data with increasing accuracy and speed. */}
                                {edit.text1}
                            </Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="body1" component="p">
                        {/* However, with great power comes great responsibility. As AI becomes more integrated into critical systems, questions of ethics, privacy, and accountability become increasingly important. Researchers and policymakers are working tirelessly to address these challenges and ensure that AI development benefits humanity as a whole. */}
                        {edit.text2}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                </CardContent>
                {edit.images && edit.images.length > 0 ? (<ImageMasonry itemData={edit.images} />) :
                (<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2}}>
                    <Typography variant="caption" sx={{ textAlign: 'center', width: '100%' }} color="text.secondary">No images available for this blog.</Typography>
                </Box>
                )}

            </StyledCard>
        </ThemeProvider>





    </WorkSpace>
  );
}
