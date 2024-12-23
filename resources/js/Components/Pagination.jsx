import { Link } from "@inertiajs/react";
import Pagination from '@mui/material/Pagination';

export default function CustomPagination({ links }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          href={link.url || ""}
          key={link.label}
          className={
            "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " +
            (link.active ? "bg-gray-950 " : " ") +
            (!link.url
              ? "!text-gray-500 cursor-not-allowed "
              : "hover:bg-gray-950")
          }
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
}
// import React from 'react';
// import { Link } from "@inertiajs/react";
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';

// export default function CustomPagination({ links }) {
//   // Calculate the total number of pages
//   const pageCount = links.length - 2; // Subtract 2 for "prev" and "next" links

//   // Find the index of the active page
//   const currentPage = links.findIndex(link => link.active) || 1;

//   return (
//     <Pagination
//       count={pageCount}
//       page={currentPage}
//       boundaryCount={2}
//       variant="outlined"
//       shape="rounded"
//       renderItem={(item) => (
//         <PaginationItem
//           component={Link}
//           href={links[item.page]?.url || ''}
//           preserveScroll
//           {...item}
//         />
//       )}
//     />
//   );
// }
