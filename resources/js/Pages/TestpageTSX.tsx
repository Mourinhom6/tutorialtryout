import React from 'react';
import {Head, Link, usePage, useForm} from "@inertiajs/react";
import { Container, Typography, Button, AppBar, Toolbar } from '@mui/material';
import {useRoute} from "../../../vendor/tightenco/ziggy";
import WorkSpace from "../Layouts/WorkSpace";

export default function MyPage() {
    const route = useRoute();
    console.log(useForm());
    return (
        <>
            <WorkSpace
   >
                <Head title="Teste" />

                <Container>
                    <AppBar position="static">
                        <Toolbar>
                            <Typography variant="h6">My MUI Page</Typography>
                        </Toolbar>
                    </AppBar>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to My MUI Page
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        This is a simple example of a page using Material-UI components.
                    </Typography>
                    <Link href={route("routestuff.index")}>Read more...</Link>

                    {/* <Button variant="contained" color="primary">
                        Click Me
                    </Button> */}
                </Container>
            </WorkSpace>
        </>
    );
};
