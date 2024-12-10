import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Head, Link } from "@inertiajs/react";
import Grid from '@mui/material/Grid2';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme CSS
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP, AG_GRID_LOCALE_PT} from "@/constants";

const TaskTable = ({ activeTasks, title }) => {
  // Define column definitions
  const columnDefs = useMemo(
    () => [
      { headerName: "ID", field: "id", flex: 1 },
      {
        headerName: "Project Name",
        field: "project.name",
        flex: 2,
        cellRenderer: (params) => (
          <Link
            href={route("project.show", params.data.project.id)}
            className="dark:text-white hover:underline"
          >
            {params.value}
          </Link>
        ),
      },
      {
        headerName: "Name",
        field: "name",
        flex: 2,
        cellRenderer: (params) => (
          <Link
            href={route("task.show", params.data.id)}
            className="dark:text-white hover:underline"
          >
            {params.value}
          </Link>
        ),
      },
      {
        headerName: "Status",
        field: "status",
        flex: 1,
        cellRenderer: (params) => (
          <span
            className={`px-2 py-1 rounded text-nowrap text-white ${TASK_STATUS_CLASS_MAP[params.value]}`}
          >
            {TASK_STATUS_TEXT_MAP[params.value]}
          </span>
        ),
      },
      { headerName: "Due Date", field: "due_date", flex: 1 },
    ],
    []
  );

  // Define row data
  const rowData = activeTasks.data;

  // State for quick filter text
  const [quickFilterText, setQuickFilterText] = useState("");

  // Quick filter change handler
  const onQuickFilterChange = (event) => {
    setQuickFilterText(event.target.value);
  };

//   const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     ...theme.applyStyles('dark', {
//       backgroundColor: '#1A2027',
//     }),
//   }));

  return (
    <div>
    {/* <Box sx={{ flexGrow: 1 }}> */}
        <Grid container spacing={2}>
      {/* Quick Filter Input */}
      {/* <Grid> */}
        <Grid size={8}>
            <h3 className="text-xl font-semibold">{title}</h3>
          {/* <Item><h3 className="text-xl font-semibold">{title}</h3></Item> */}
        </Grid>
        <Grid size={4}>
          {/* <Item><input
            type="text"
            placeholder="Quick filter..."
            className="mb-3 p-2 border rounded"
            style={{ width: "50%" }}
            value={quickFilterText}
            onChange={onQuickFilterChange}
        /></Item> */}
        <input
            type="text"
            placeholder="Quick filter..."
            className="mb-3 p-2 border rounded"
            style={{ width: "100%" }}
            value={quickFilterText}
            onChange={onQuickFilterChange}
        />
        </Grid>
      </Grid>


      {/* AG Grid Table */}
      <div className="ag-theme-alpine mt-3" style={{ width: "100%", height: "400px" }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={{ sortable: true, filter: true, resizable: true }}
          quickFilterText={quickFilterText}
          localeText={AG_GRID_LOCALE_PT}
        />
      </div>
    </div>
  );
};

export default TaskTable;





// import React, { useMemo, useRef, useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import { Link } from "@inertiajs/react";
// import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
// import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme CSS
// import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
// import HeaderFilter from "@/Components/HeaderFilter"; // Import the HeaderFilter component

// const TaskTable = ({ activeTasks }) => {
//   // Define column definitions
//   const columnDefs = useMemo(
//     () => [
//       { headerName: "ID", field: "id", flex: 1 },
//       {
//         headerName: "Project Name",
//         field: "project.name",
//         flex: 2,
//         cellRenderer: (params) => (
//           <Link
//             href={route("project.show", params.data.project.id)}
//             className="dark:text-white hover:underline"
//           >
//             {params.value}
//           </Link>
//         ),
//       },
//       {
//         headerName: "Name",
//         field: "name",
//         flex: 2,
//         cellRenderer: (params) => (
//           <Link
//             href={route("task.show", params.data.id)}
//             className="dark:text-white hover:underline"
//           >
//             {params.value}
//           </Link>
//         ),
//       },
//       {
//         headerName: "Status",
//         field: "status",
//         flex: 1,
//         cellRenderer: (params) => (
//           <span
//             className={`px-2 py-1 rounded text-nowrap text-white ${TASK_STATUS_CLASS_MAP[params.value]}`}
//           >
//             {TASK_STATUS_TEXT_MAP[params.value]}
//           </span>
//         ),
//       },
//       { headerName: "Due Date", field: "due_date", flex: 1 },
//     ],
//     [TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP]
//   );

//   // Define row data
//   const rowData = activeTasks.data;

//   const gridRef = useRef(null);
//   const [gridApi, setGridApi] = useState(null);
//   const [columnApi, setColumnApi] = useState(null);

//   const onGridReady = (params) => {
//     setGridApi(params.api);
//     setColumnApi(params.columnApi);
//   };

//   // Handler for sorting change
//   const handleSortChange = (column, order) => {
//     gridApi.getColumnApi().getColumnState().forEach((state) => {
//       if (state.colId === column.colId) {
//         state.sort = order;
//       }
//     });
//     gridApi.onSortChanged();
//   };

//   // Handler for filtering change
//   const handleFilterChange = (column) => {
//     const filterInstance = gridApi.getFilterInstance(column.colId);
//     if (filterInstance) {
//       filterInstance.setModel(null); // Clear filter model
//       gridApi.onFilterChanged();
//     }
//   };

//   // Handler for visibility change
//   const handleVisibilityChange = (column) => {
//     gridApi.getColumnApi().getColumnState().forEach((state) => {
//       if (state.colId === column.colId) {
//         state.hide = !state.hide; // Toggle visibility
//       }
//     });
//     gridApi.onColumnStateChanged();
//   };

//   // Handler to reset column state
//   const resetColumnState = () => {
//     gridApi.getColumnApi().resetColumnState();
//     gridApi.onColumnStateChanged();
//   };

//   return (
//     <div className="ag-theme-alpine mt-3" style={{ width: "100%", height: "400px" }}>
//       <AgGridReact
//         ref={gridRef}
//         columnDefs={columnDefs}
//         rowData={rowData}
//         defaultColDef={{ sortable: true, filter: true, resizable: true }}
//         onGridReady={onGridReady}
//       />
//       {/* Render HeaderFilter for each column */}
//       {columnDefs.map((column) => (
//         <HeaderFilter
//             key={column.field}
//             column={column}
//             gridApi={gridApi}
//             columnApi={columnApi}
//             onSortChange={handleSortChange}
//             onFilterChange={handleFilterChange}
//             onVisibilityChange={handleVisibilityChange}
//             onResetColumnState={resetColumnState}
//         />
//         ))}
//     </div>
//   );
// };

// export default TaskTable;




// import React, { useMemo, useRef, useState, useCallback } from "react";
// import { AgGridReact } from "ag-grid-react";
// import { Link } from "@inertiajs/react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
// import HeaderFilter from "@/Components/HeaderFilter";

// const TaskTable = ({ activeTasks }) => {
//   // Define column definitions using useCallback to memoize
//   const columnDefs = useMemo(
//     () => [
//       { headerName: "ID", field: "id", flex: 1 },
//       {
//         headerName: "Project Name",
//         field: "project.name",
//         flex: 2,
//         cellRenderer: (params) => (
//           <Link
//             href={route("project.show", params.data.project.id)}
//             className="dark:text-white hover:underline"
//           >
//             {params.value}
//           </Link>
//         ),
//       },
//       {
//         headerName: "Name",
//         field: "name",
//         flex: 2,
//         cellRenderer: (params) => (
//           <Link
//             href={route("task.show", params.data.id)}
//             className="dark:text-white hover:underline"
//           >
//             {params.value}
//           </Link>
//         ),
//       },
//       {
//         headerName: "Status",
//         field: "status",
//         flex: 1,
//         cellRenderer: (params) => (
//           <span
//             className={`px-2 py-1 rounded text-nowrap text-white ${TASK_STATUS_CLASS_MAP[params.value]}`}
//           >
//             {TASK_STATUS_TEXT_MAP[params.value]}
//           </span>
//         ),
//       },
//       { headerName: "Due Date", field: "due_date", flex: 1 },
//     ],
//     [TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP]
//   );

//   // Define row data
//   const rowData = activeTasks.data;

//   const gridRef = useRef(null);
//   const [gridApi, setGridApi] = useState(null);
//   const [columnApi, setColumnApi] = useState(null);

//   // Memoize onGridReady to prevent unnecessary re-renders
//   const onGridReady = useCallback((params) => {
//     setGridApi(params.api);
//     setColumnApi(params.columnApi);
//   }, []);

//   // Memoize handlers to prevent unnecessary re-renders
//   const handleSortChange = useCallback((column, order) => {
//     if (gridApi) {
//       const columnState = gridApi.getColumnApi().getColumnState();
//       const updatedState = columnState.map((state) =>
//         state.colId === column.field ? { ...state, sort: order } : state
//       );
//       gridApi.getColumnApi().setColumnState(updatedState);
//       gridApi.onSortChanged();
//     }
//   }, [gridApi]);

//   const handleFilterChange = useCallback((column) => {
//     if (gridApi) {
//       const filterInstance = gridApi.getFilterInstance(column.field);
//       if (filterInstance) {
//         filterInstance.setModel(null);
//         gridApi.onFilterChanged();
//       }
//     }
//   }, [gridApi]);

//   const handleVisibilityChange = useCallback((column) => {
//     if (gridApi) {
//       const columnState = gridApi.getColumnApi().getColumnState();
//       const updatedState = columnState.map((state) =>
//         state.colId === column.field ? { ...state, hide: !state.hide } : state
//       );
//       gridApi.getColumnApi().setColumnState(updatedState);
//       gridApi.onColumnStateChanged();
//     }
//   }, [gridApi]);

//   const resetColumnState = useCallback(() => {
//     if (gridApi) {
//       gridApi.getColumnApi().resetColumnState();
//       gridApi.onColumnStateChanged();
//     }
//   }, [gridApi]);

//   return (
//     <div className="ag-theme-alpine mt-3" style={{ width: "100%", height: "400px" }}>
//       <AgGridReact
//         ref={gridRef}
//         columnDefs={columnDefs}
//         rowData={rowData}
//         defaultColDef={{ sortable: true, filter: true, resizable: true }}
//         onGridReady={onGridReady}
//       />
//       {columnDefs.map((column) => (
//         <HeaderFilter
//           key={column.field}
//           column={column}
//           gridApi={gridApi}
//           columnApi={columnApi}
//           onSortChange={handleSortChange}
//           onFilterChange={handleFilterChange}
//           onVisibilityChange={handleVisibilityChange}
//           onResetColumnState={resetColumnState}
//         />
//       ))}
//     </div>
//   );
// };

// export default TaskTable;





// "use strict";

// import React, {
//   useCallback,
//   useMemo,
//   useRef,
//   useState,
//   StrictMode,
// } from "react";
// import { createRoot } from "react-dom/client";
// import { AgGridReact } from "@ag-grid-community/react";
// import "@ag-grid-community/styles/ag-grid.css";
// import "@ag-grid-community/styles/ag-theme-quartz.css";
// import "./styles.css";
// import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
// import {
//   ColDef,
//   ColGroupDef,
//   GridApi,
//   GridOptions,
//   GridReadyEvent,
//   IDateFilterParams,
//   IRowNode,
//   IsExternalFilterPresentParams,
//   ModuleRegistry,
//   createGrid,
// } from "@ag-grid-community/core";
// import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
// import { MenuModule } from "@ag-grid-enterprise/menu";
// import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
// import { IOlympicData } from "./interfaces";
// ModuleRegistry.registerModules([
//   ClientSideRowModelModule,
//   ColumnsToolPanelModule,
//   MenuModule,
//   SetFilterModule,
// ]);

// var dateFilterParams: IDateFilterParams = {
//   comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
//     var cellDate = asDate(cellValue);
//     if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
//       return 0;
//     }
//     if (cellDate < filterLocalDateAtMidnight) {
//       return -1;
//     }
//     if (cellDate > filterLocalDateAtMidnight) {
//       return 1;
//     }
//     return 0;
//   },
// };

// var ageType = "everyone";

// function asDate(dateAsString: string) {
//   var splitFields = dateAsString.split("/");
//   return new Date(
//     Number.parseInt(splitFields[2]),
//     Number.parseInt(splitFields[1]) - 1,
//     Number.parseInt(splitFields[0]),
//   );
// }

// const GridExample = () => {
//   const gridRef = useRef<AgGridReact<IOlympicData>>(null);
//   const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
//   const gridStyle = useMemo(() => ({ height: "100%", width: "100%" }), []);
//   const [rowData, setRowData] = useState<IOlympicData[]>();
//   const [columnDefs, setColumnDefs] = useState<ColDef[]>([
//     { field: "athlete", minWidth: 180 },
//     { field: "age", filter: "agNumberColumnFilter", maxWidth: 80 },
//     { field: "country" },
//     { field: "year", maxWidth: 90 },
//     {
//       field: "date",
//       filter: "agDateColumnFilter",
//       filterParams: dateFilterParams,
//     },
//     { field: "gold", filter: "agNumberColumnFilter" },
//     { field: "silver", filter: "agNumberColumnFilter" },
//     { field: "bronze", filter: "agNumberColumnFilter" },
//   ]);
//   const defaultColDef = useMemo<ColDef>(() => {
//     return {
//       flex: 1,
//       minWidth: 120,
//       filter: true,
//     };
//   }, []);

//   const onGridReady = useCallback((params: GridReadyEvent) => {
//     fetch("https://www.ag-grid.com/example-assets/olympic-winners.json")
//       .then((resp) => resp.json())
//       .then((data: IOlympicData[]) => {
//         (document.querySelector("#everyone") as HTMLInputElement).checked =
//           true;
//         setRowData(data);
//       });
//   }, []);

//   const externalFilterChanged = useCallback((newValue: string) => {
//     ageType = newValue;
//     gridRef.current!.api.onFilterChanged();
//   }, []);

//   const isExternalFilterPresent = useCallback((): boolean => {
//     // if ageType is not everyone, then we are filtering
//     return ageType !== "everyone";
//   }, []);

//   const doesExternalFilterPass = useCallback(
//     (node: IRowNode<IOlympicData>): boolean => {
//       if (node.data) {
//         switch (ageType) {
//           case "below25":
//             return node.data.age < 25;
//           case "between25and50":
//             return node.data.age >= 25 && node.data.age <= 50;
//           case "above50":
//             return node.data.age > 50;
//           case "dateAfter2008":
//             return asDate(node.data.date) > new Date(2008, 1, 1);
//           default:
//             return true;
//         }
//       }
//       return true;
//     },
//     [ageType],
//   );

//   return (
//     <div style={containerStyle}>
//       <div className="test-container">
//         <div className="test-header">
//           <label>
//             <input
//               type="radio"
//               name="filter"
//               id="everyone"
//               onChange={() => externalFilterChanged("everyone")}
//             />
//             Everyone
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="filter"
//               id="below25"
//               onChange={() => externalFilterChanged("below25")}
//             />
//             Below 25
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="filter"
//               id="between25and50"
//               onChange={() => externalFilterChanged("between25and50")}
//             />
//             Between 25 and 50
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="filter"
//               id="above50"
//               onChange={() => externalFilterChanged("above50")}
//             />
//             Above 50
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="filter"
//               id="dateAfter2008"
//               onChange={() => externalFilterChanged("dateAfter2008")}
//             />
//             After 01/01/2008
//           </label>
//         </div>

//         <div
//           style={gridStyle}
//           className={
//             "ag-theme-quartz-dark"
//           }
//         >
//           <AgGridReact<IOlympicData>
//             ref={gridRef}
//             rowData={rowData}
//             columnDefs={columnDefs}
//             defaultColDef={defaultColDef}
//             isExternalFilterPresent={isExternalFilterPresent}
//             doesExternalFilterPass={doesExternalFilterPass}
//             onGridReady={onGridReady}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// const root = createRoot(document.getElementById("root")!);
// root.render(
//   <StrictMode>
//     <GridExample />
//   </StrictMode>,
// );


// import React, { useMemo, useRef, useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import "ag-grid-community/styles/ag-grid.css";
// import "ag-grid-community/styles/ag-theme-alpine.css";
// import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";

// // Custom Filter Menu Component
// const CustomFilterMenu = ({ columnApi, api }) => {
//   const [filterValue, setFilterValue] = useState("");

//   // Sorting Handlers
//   const onSortAsc = () => columnApi.applyColumnState({ state: [{ colId: columnApi.getFocusedCell().column.getColId(), sort: "asc" }] });
//   const onSortDesc = () => columnApi.applyColumnState({ state: [{ colId: columnApi.getFocusedCell().column.getColId(), sort: "desc" }] });
//   const onUnSort = () => columnApi.applyColumnState({ state: [{ colId: columnApi.getFocusedCell().column.getColId(), sort: null }] });

//   // Column Resize Handler
//   const autoSizeColumn = () => columnApi.autoSizeColumn(columnApi.getFocusedCell().column.getColId());
//   const autoSizeAll = () => columnApi.autoSizeAllColumns();

//   // Group/Ungroup Column Handler
//   const toggleGroup = () => {
//     const col = columnApi.getFocusedCell().column;
//     if (col.isRowGroupActive()) {
//       columnApi.removeRowGroupColumn(col.getColId());
//     } else {
//       columnApi.addRowGroupColumn(col.getColId());
//     }
//   };

//   // Filter Handler
//   const onFilterChange = (e) => {
//     setFilterValue(e.target.value);
//     api.setQuickFilter(e.target.value);
//   };

//   return (
//     <div style={{ padding: "8px", background: "#fff", border: "1px solid #ccc", borderRadius: "4px" }}>
//       <div>
//         <button onClick={onSortAsc}>Sort Ascending</button>
//         <button onClick={onSortDesc}>Sort Descending</button>
//         <button onClick={onUnSort}>Clear Sort</button>
//       </div>
//       <hr />
//       <div>
//         <button onClick={autoSizeColumn}>Auto-Size Column</button>
//         <button onClick={autoSizeAll}>Auto-Size All Columns</button>
//       </div>
//       <hr />
//       <div>
//         <button onClick={toggleGroup}>Toggle Grouping</button>
//       </div>
//       <hr />
//       <div>
//         <input
//           type="text"
//           placeholder="Filter..."
//           value={filterValue}
//           onChange={onFilterChange}
//           style={{ width: "100%" }}
//         />
//       </div>
//     </div>
//   );
// };

// // Main Task Table Component
// const TaskTable = ({ activeTasks }) => {
//   const gridApiRef = useRef(null);

//   // Define column definitions
//   const columnDefs = useMemo(
//     () => [
//       { headerName: "ID", field: "id", flex: 1 },
//       {
//         headerName: "Project Name",
//         field: "project.name",
//         flex: 2,
//         cellRenderer: (params) => (
//           <Link
//             href={route("project.show", params.data.project.id)}
//             className="dark:text-white hover:underline"
//           >
//             {params.value}
//           </Link>
//         ),
//       },
//       {
//         headerName: "Name",
//         field: "name",
//         flex: 2,
//         cellRenderer: (params) => (
//           <Link
//             href={route("task.show", params.data.id)}
//             className="dark:text-white hover:underline"
//           >
//             {params.value}
//           </Link>
//         ),
//       },
//       {
//         headerName: "Status",
//         field: "status",
//         flex: 1,
//         cellRenderer: (params) => (
//           <span
//             className={`px-2 py-1 rounded text-nowrap text-white ${TASK_STATUS_CLASS_MAP[params.value]}`}
//           >
//             {TASK_STATUS_TEXT_MAP[params.value]}
//           </span>
//         ),
//       },
//       { headerName: "Due Date", field: "due_date", flex: 1 },
//     ],
//     []
//   );

//   // Define row data
//   const rowData = activeTasks.data;

//   // Grid Ready Event
//   const onGridReady = (params) => {
//     gridApiRef.current = params.api;
//   };

//   return (
//     <div className="ag-theme-alpine mt-3" style={{ width: "100%", height: "400px" }}>
//       <CustomFilterMenu columnApi={gridApiRef.current?.columnApi} api={gridApiRef.current} />
//       <AgGridReact
//         columnDefs={columnDefs}
//         rowData={rowData}
//         defaultColDef={{ sortable: true, filter: true, resizable: true }}
//         onGridReady={onGridReady}
//       />
//     </div>
//   );
// };

// export default TaskTable;
