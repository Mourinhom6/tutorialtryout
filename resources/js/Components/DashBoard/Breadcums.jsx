import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link, usePage} from "@inertiajs/react"
// import PropTypes from 'prop-types'; // Import PropTypes for runtime validation

export default function Breadcums() {
    const {props: MegaBread } = usePage();
    const { breadcum } = MegaBread;
    // console.log("Bread1:", MegaBread);
    // console.log("Bread2:", breadcum);

  return (
    <Stack spacing={2}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcum.map((crumb, index) => (
                    index === breadcum.length - 1 ? (
                        <Typography key={crumb.key} sx={{ color: 'text.primary' }}>
                            {crumb.name}
                        </Typography>
                    ) : (
                        <Link
                            key={crumb.key}
                            href={crumb.url}
                            className="dark:text-white hover:underline"
                        >
                            {crumb.name}
                        </Link>
                    )
                ))}
            </Breadcrumbs>
        </Stack>
  );
}
