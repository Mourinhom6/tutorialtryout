import * as React from 'react';
import { Button} from '@mui/material';
import WorkSpace  from "@/Layouts/WorkSpace";
import Grid from '@mui/material/Grid2';
import {useRoute} from "&/ziggy"
import { Head, Link, router, usePage, useForm } from "@inertiajs/react";



export default function Index() {
    const routing = useRoute();

  return (
    <WorkSpace>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid size={{ xs:12, sm:6, md:4, lg:3 }}>
          <Button variant="contained" size="large" fullWidth sx={{ height: '100px' }}
            onClick={() => {router.get(routing('blogs.index'))}}
          >
            Blogs
          </Button>
        </Grid>
        <Grid size={{ xs:12, sm:6, md:4, lg:3 }}>
          <Button variant="contained" size="large" fullWidth sx={{ height: '100px' }}
            onClick={() => {router.get(routing('jobs.index'))}}
          >
            Jobs
          </Button>
        </Grid>
        <Grid size={{ xs:12, sm:6, md:4, lg:3 }}>
          <Button variant="contained" size="large" fullWidth sx={{ height: '100px' }}
            onClick={() => {router.get(routing('blogs.index'))}}
          >
            Button 3
          </Button>
        </Grid>
        <Grid size={{ xs:12, sm:6, md:4, lg:3 }}>
          <Button variant="contained" size="large" fullWidth sx={{ height: '100px' }}
            onClick={() => {router.get(routing('blogs.index'))}}
          >
            Button 4
          </Button>
        </Grid>
      </Grid>
    </WorkSpace>
  );
}


