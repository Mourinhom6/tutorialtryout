import WorkSpace  from "@/Layouts/WorkSpace";
import { Head, Link } from "@inertiajs/react";
import {
  PROJECT_STATUS_CLASS_MAP,
  PROJECT_STATUS_TEXT_MAP,
  BLOG_STATUS_CLASS_MAP,
  BLOG_STATUS_TEXT_MAP,

} from "@/constants.jsx";
import ClientLayout from '@/Layouts/ClientLayout';

import {ClientTheme} from '@/Components/AppTheme';
// import { ThemeProvider } from '@mui/material/styles';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {
    Box,
    Typography,
    Card,
    Container,
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

// export default function Show({ auth, edit, success, queryParams, breadcum }) {

export default function BlogShow({ blog }) {
        console.log('finalblog:', blog);

    // const theme2 = ClientTheme();

    const {isSuperTiny} = useIsSuperTiny();
    // const theme = useTheme();



    return (

    <ClientLayout>
        <CssBaseline enableColorScheme />
            <Head title={`Blog "${blog.title}"`} />

        <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
        >
            <StyledCard>
                <CardContent sx={{ p: 4 }}>
                    <Typography variant="overline" color="primary" gutterBottom>
                        Featured Article
                    </Typography>
                    <Typography variant="h4" component="h1" gutterBottom>
                        {/* Exploring the Future of AI: Breakthroughs and Challenges */}
                        {blog.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="p">
                        {/* An in-depth look at recent advancements in artificial intelligence and their potential impact on society. */}
                        {blog.subtitle}
                    </Typography>

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
                            <Typography variant="subtitle2">{blog.createdBy.name}</Typography>
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
                        {/* January 3, 2025 */} {blog.date} • {blog.size} min read
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                        {blog.tags.map((tag) => (
                            <StyledChip key={tag.id} label={tag.name} variant="outlined"/>
                        ))}
                    </Box>

                    <Typography variant="body1" sx={{ display: { xs: 'block', md: 'none' } }} component="p">
                        {/* Artificial Intelligence has made remarkable strides in recent years, transforming industries and reshaping our daily lives. From self-driving cars to advanced natural language processing, AI continues to push the boundaries of what's possible. */}
                        {blog.intro}
                    </Typography>

                    <Grid container spacing={3} sx={{ mb: 4 }}>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            {/* <Box
                                component="img"
                                // src={blog.img_main}
                                src="https://picsum.photos/200/200?random=20"
                                // alt="AI visualization"
                                sx={{ width: '100%', borderRadius: 1, overflow: 'hidden', aspectRatio: '16 / 9',}}
                            /> */}

                            <Box
                                sx={{
                                    width: '100%',
                                    aspectRatio: '16 / 16',
                                    overflow: 'hidden',
                                    borderRadius: 1,
                                }}
                            >
                                <Box
                                    component="img"
                                    src={blog.img_main}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid item size={{ xs: 12, md: 6 }}>
                            <Typography variant="body1" sx={{ mb: 4, display: { xs: 'none', md: 'block' } }} component="p">{blog.intro}</Typography>

                            <Typography variant="body1">{blog.text1}</Typography>
                        </Grid>
                    </Grid>

                    <Typography variant="body1" component="p">
                        {/* However, with great power comes great responsibility. As AI becomes more integrated into critical systems, questions of ethics, privacy, and accountability become increasingly important. Researchers and policymakers are working tirelessly to address these challenges and ensure that AI development benefits humanity as a whole. */}
                        {blog.text2}
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                </CardContent>
                {blog.images && blog.images.length > 0 ? (<ImageMasonry itemData={blog.images} />) :
                (<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2}}>
                    <Typography variant="caption" sx={{ textAlign: 'center', width: '100%' }} color="text.secondary">No images available for this blog.</Typography>
                </Box>
                )}
            </StyledCard>
        </Container>
    </ClientLayout>
  );
}
