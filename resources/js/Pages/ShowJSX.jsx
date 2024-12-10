import { Link, useForm } from "@inertiajs/react";
import {useRoute} from "../../../vendor/tightenco/ziggy"
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export default function Show({ post }) {
    const {delete: destroy} = useForm();
    const route = useRoute()
    function submit(e){
        e.preventDefault();
        destroy(route('posts.destroy', post.id));
    }
    return (
        <>
            <Head title='Show'/>
            <Box sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" color="text.secondary">
                        Posted on:
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {new Date(post.created_at).toLocaleTimeString()}
                    </Typography>
                </Box>
                <Typography variant="body1" fontWeight="500" key={post.body}>
                    {post.body}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 2 }}>
                    <form onSubmit={submit}>
                        <Button
                        variant="contained"
                        color="error"
                        size="small"
                        sx={{ textTransform: 'none' }} // Prevents uppercase text transformation
                        >
                        Delete
                        </Button>
                    </form>
                    {/* If you're using MUI's Link component with react-router */}
                    {/* <Link component={RouterLink} to={`/posts/${post.id}/edit`} underline="none"> */}
                    <Link
                        href={route('posts.edit', post)}
                        underline="none"
                    >
                        <Button
                            variant="contained"
                            color="success"
                            size="small"
                            sx={{ textTransform: 'none' }}
                            >
                            Update
                        </Button>
                    </Link>
                </Box>
            </Box>
        </>


    );
  }
