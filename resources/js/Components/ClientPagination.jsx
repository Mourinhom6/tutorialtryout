// // import React, { useEffect } from 'react';
// import * as React from 'react';

// import { Pagination } from '@mui/material';

// export default function ClientPagination({ meta, issuper }){
//     console.log("meta",meta);
//     const { current_page, last_page, links } = meta;

//     const handlePageChange = (event, newPage) => {
//         // Handle page change logic here
//         // For example, you might want to fetch new data based on the new page
//         console.log(`Fetching data for page ${newPage}`);

//         // Update document title or other meta tags if needed
//         document.title = `Page ${newPage}`;
//     };

//     return (
//         <Pagination
//             boundaryCount={issuper ? 1 : 2}
//             count={last_page} // Total number of pages
//             page={current_page} // Current active page
//             onChange={handlePageChange} // Handle page change
//             variant="outlined"
//             shape="rounded"
//         />
//     );
// };

import * as React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from "@inertiajs/react"; // Assuming you're using Inertia.js for navigation

export default function ClientPagination({ meta, issuper }) {
    const { current_page, last_page, links } = meta;

    return (
        <Pagination
            boundaryCount={issuper ? 1 : 2}
            count={last_page}
            page={current_page}
            variant="outlined"
            shape="rounded"
            renderItem={(item) => {
                const link = links.find(l => l.label === item.page?.toString() ||
                                             (item.type === 'previous' && l.label.includes('Previous')) ||
                                             (item.type === 'next' && l.label.includes('Next')));

                return (
                    <PaginationItem
                        component={Link}
                        href={link?.url || '#'}
                        {...item}
                        disabled={!link?.url}
                    />
                );
            }}
        />
    );
}
