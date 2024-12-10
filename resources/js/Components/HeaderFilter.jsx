// // import React, { useState, useEffect } from 'react';
// // import { AgGridReact } from 'ag-grid-react';

// // // HeaderFilter component that receives props for handling grid operations
// // const HeaderFilter = ({
// //   column,
// //   gridApi,
// //   columnApi,
// //   onSortChange,
// //   onFilterChange,
// //   onVisibilityChange,
// //   onResetColumnState,
// // }) => {
// //   const [isSortedAsc, setIsSortedAsc] = useState(false);
// //   const [isSortedDesc, setIsSortedDesc] = useState(false);
// //   const [isFiltered, setIsFiltered] = useState(false);

// //   if (gridApi && typeof gridApi.getSortModel === 'function') {
// //     const sortModel = gridApi.getSortModel();
// //     console.log("sortModel1:",sortModel);
// //   } else {
// //     console.error('gridApi is not defined or getSortModel is not a function');
// //   }

// //   // Listen to changes in column sort state
// //   useEffect(() => {
// //     if (gridApi) {
// //       const sortState = gridApi.getSortModel();
// //       console.log("sortModel2:",sortModel);
// //       const columnSort = sortState.find((s) => s.colId === column.colId);
// //       if (columnSort) {
// //         setIsSortedAsc(columnSort.sort === 'asc');
// //         setIsSortedDesc(columnSort.sort === 'desc');
// //       }
// //     }
// //   }, [gridApi, column]);


// //   // Handle sorting
// //   const handleSort = (order) => {
// //     if (onSortChange) {
// //       onSortChange(column, order); // Trigger the parent sort handler
// //       setIsSortedAsc(order === 'asc');
// //       setIsSortedDesc(order === 'desc');
// //     }
// //   };

// //   // Handle column filtering toggle
// //   const handleFilter = () => {
// //     if (onFilterChange) {
// //       onFilterChange(column); // Trigger the parent filter handler
// //       setIsFiltered((prev) => !prev); // Toggle filter state locally
// //     }
// //   };

// //   // Handle column visibility toggle
// //   const handleColumnVisibility = () => {
// //     if (onVisibilityChange) onVisibilityChange(column); // Notify parent component to toggle visibility
// //   };

// //   // Reset all column states (like sorting, filtering, visibility)
// //   const resetColumnState = () => {
// //     if (onResetColumnState) onResetColumnState(); // Reset column state in parent
// //   };

// //   return (
// //     <div className="custom-header-menu">
// //       {/* Sort Options */}
// //       <div>
// //         <button onClick={() => handleSort('asc')} disabled={isSortedAsc}>
// //           Sort Ascending
// //         </button>
// //         <button onClick={() => handleSort('desc')} disabled={isSortedDesc}>
// //           Sort Descending
// //         </button>
// //         <button onClick={() => handleSort(null)} disabled={!isSortedAsc && !isSortedDesc}>
// //           Clear Sort
// //         </button>
// //       </div>

// //       {/* Filter Options */}
// //       <div>
// //         <button onClick={handleFilter}>
// //           {isFiltered ? 'Hide Filter' : 'Show Filter'}
// //         </button>
// //       </div>

// //       {/* Column Visibility */}
// //       <div>
// //         <button onClick={handleColumnVisibility}>
// //           {column.colId} Visibility
// //         </button>
// //       </div>

// //       {/* Reset Columns */}
// //       <div>
// //         <button onClick={resetColumnState}>Reset Columns</button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeaderFilter;


// import React, { useState, useEffect } from 'react';

// const HeaderFilter = ({
//   column,
//   gridApi,
//   columnApi,
//   onSortChange,
//   onFilterChange,
//   onVisibilityChange,
//   onResetColumnState,
// }) => {
//   const [isSortedAsc, setIsSortedAsc] = useState(false);
//   const [isSortedDesc, setIsSortedDesc] = useState(false);
//   const [isFiltered, setIsFiltered] = useState(false);

//   // Listen to changes in column sort state
//   useEffect(() => {
//     if (gridApi && gridApi.getSortModel) {
//       const sortState = gridApi.getSortModel();
//       const columnSort = sortState.find((s) => s.colId === column.field);
//       if (columnSort) {
//         setIsSortedAsc(columnSort.sort === 'asc');
//         setIsSortedDesc(columnSort.sort === 'desc');
//       }
//     } else if (gridApi && gridApi.columnModel) {
//       const columnState = gridApi.columnModel.getColumnState();
//       const columnSort = columnState.find((s) => s.colId === column.field && s.sort);
//       if (columnSort) {
//         setIsSortedAsc(columnSort.sort === 'asc');
//         setIsSortedDesc(columnSort.sort === 'desc');
//       }
//     }
//   }, [gridApi, column]);

//   // Handle sorting
//   const handleSort = (order) => {
//     if (onSortChange) {
//       onSortChange(column, order);
//       setIsSortedAsc(order === 'asc');
//       setIsSortedDesc(order === 'desc');
//     }
//   };

//   // Handle column filtering toggle
//   const handleFilter = () => {
//     if (onFilterChange) {
//       onFilterChange(column);
//       setIsFiltered((prev) => !prev);
//     }
//   };

//   // Handle column visibility toggle
//   const handleColumnVisibility = () => {
//     if (onVisibilityChange) onVisibilityChange(column);
//   };

//   // Reset all column states
//   const resetColumnState = () => {
//     if (onResetColumnState) onResetColumnState();
//   };

//   return (
//     <div className="custom-header-menu">
//       <div>
//         <button onClick={() => handleSort('asc')} disabled={isSortedAsc}>
//           Sort Ascending
//         </button>
//         <button onClick={() => handleSort('desc')} disabled={isSortedDesc}>
//           Sort Descending
//         </button>
//         <button onClick={() => handleSort(null)} disabled={!isSortedAsc && !isSortedDesc}>
//           Clear Sort
//         </button>
//       </div>

//       <div>
//         <button onClick={handleFilter}>
//           {isFiltered ? 'Hide Filter' : 'Show Filter'}
//         </button>
//       </div>

//       <div>
//         <button onClick={handleColumnVisibility}>
//           {column.field} Visibility
//         </button>
//       </div>

//       <div>
//         <button onClick={resetColumnState}>Reset Columns</button>
//       </div>
//     </div>
//   );
// };

// export default HeaderFilter;
