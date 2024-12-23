// import React, { useMemo, useState } from "react";
// import { AgGridReact } from "ag-grid-react";
// import { Link } from "@inertiajs/react";
// import Pagination from "@/Components/Pagination";
// import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
// import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme CSS
// import { LICENSE_STATUS_CLASS_MAP, LICENSE_STATUS_TEXT_MAP } from "@/constants.jsx";

// export default function LicensesTable({
//   licenses,
//   success,
//   queryParams = null,
//   hideProjectColumn = false,
// }) {
//   queryParams = queryParams || {};

//   // Column Definitions
//   const columnDefs = useMemo(() => {
//     const columns = [
//       { headerName: "ID", field: "id", flex: 1 },
//       {
//         headerName: "Image",
//         field: "image_path",
//         flex: 1,
//         cellRenderer: (params) => (
//           <img src={params.value} style={{ width: 60 }} alt="License" />
//         ),
//       },
//       !hideProjectColumn && {
//         headerName: "Project Name",
//         field: "project.name",
//         flex: 2,
//       },
//       {
//         headerName: "Name",
//         field: "name",
//         flex: 2,
//         cellRenderer: (params) => (
//           <Link
//             href={route("license.show", params.data.id)}
//             className="text-gray-100 hover:underline"
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
//             className={`px-2 py-1 rounded text-nowrap text-white ${LICENSE_STATUS_CLASS_MAP[params.value]}`}
//           >
//             {LICENSE_STATUS_TEXT_MAP[params.value]}
//           </span>
//         ),
//       },
//       { headerName: "Created Date", field: "created_at", flex: 1 },
//       { headerName: "Due Date", field: "due_date", flex: 1 },
//       { headerName: "Created By", field: "createdBy.name", flex: 1 },
//       {
//         headerName: "Actions",
//         field: "actions",
//         flex: 2,
//         cellRenderer: (params) => (
//           <>
//             <Link
//               href={route("license.edit", params.data.id)}
//               className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
//             >
//               Edit
//             </Link>
//             <button
//               onClick={() => deleteLicense(params.data)}
//               className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
//             >
//               Delete
//             </button>
//           </>
//         ),
//       },
//     ];
//     return columns.filter(Boolean); // Remove falsy values (e.g., hidden project column)
//   }, [hideProjectColumn]);

//   // Row Data
//   const rowData = licenses.data;

//   // Quick Filter
//   const [quickFilterText, setQuickFilterText] = useState("");

//   const onQuickFilterChange = (event) => {
//     setQuickFilterText(event.target.value);
//   };

//   const deleteLicense = (license) => {
//     if (!window.confirm("Are you sure you want to delete the license?")) {
//       return;
//     }
//     router.delete(route("license.destroy", license.id));
//   };

//   return (
//     <div>
//       {success && (
//         <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
//           {success}
//         </div>
//       )}

//       {/* Quick Filters */}
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Quick filter..."
//           className="mb-3 p-2 border rounded"
//           style={{ width: "100%" }}
//           value={quickFilterText}
//           onChange={onQuickFilterChange}
//         />
//       </div>

//       {/* AG Grid Table */}
//       <div className="ag-theme-quartz" style={{ width: "100%", height: "500px" }}>
//         <AgGridReact
//           columnDefs={columnDefs}
//           rowData={rowData}
//           defaultColDef={{
//             sortable: true,
//             filter: true,
//             resizable: true,
//           }}
//           quickFilterText={quickFilterText}
//           domLayout="autoHeight"
//           rowSelection ={{
//             mode: 'singleRow',
//             enableClickSelection: true,
//           }}
//         />
//       </div>

//       {/* Pagination */}
//       <Pagination links={licenses.meta.links} />
//     </div>
//   );
// }

import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Link, router } from "@inertiajs/react";
import CustomPagination from "@/Components/Pagination";

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme CSS
import { LICENSE_STATUS_CLASS_MAP, LICENSE_STATUS_TEXT_MAP, AG_GRID_LOCALE_PT} from "@/constants";

export default function LicensesTable({ licenses, success, queryParams = null }) {
  queryParams = queryParams || {};

  // Column Definitions
  const columnDefs = useMemo(() => {
    const columns = [
      { headerName: "Nome", field: "NOME", flex: 1 },
      { headerName: "Tipo", field: "TIPO", flex: 1 },
      { headerName: "Atribuição", field: "ATRIBUICAO", flex: 1 },
      { headerName: "Expire Date", field: "EXPIRE_DATE", flex: 1 },
      { headerName: "Extra", field: "EXTRA", flex: 1 },
      { headerName: "Time Expanse", field: "TIME_EXPANSE", flex: 1 },
      {
        headerName: "State",
        field: "STATE",
        flex: 1,
        cellRenderer: (params) => (
          <span
            className={`px-2 py-1 rounded text-white ${LICENSE_STATUS_CLASS_MAP[params.value]}`}
          >
            {LICENSE_STATUS_TEXT_MAP[params.value] || params.value}
          </span>
        ),
      },
      {
        headerName: "Actions",
        field: "actions",
        flex: 2,
        cellRenderer: (params) => (
          <>
            <Link
              href={route("license.edit", params.data.id)}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteLicense(params.data)}
              className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
            >
              Delete
            </button>
          </>
        ),
      },
    ];
    return columns.filter(Boolean); // Remove any falsy values
  }, []);

  // Row Data
  const rowData = licenses.data;

  // Quick Filter
  const [quickFilterText, setQuickFilterText] = useState("");

  const onQuickFilterChange = (event) => {
    setQuickFilterText(event.target.value);
  };

  const deleteLicense = (license) => {
    if (!window.confirm("Are you sure you want to delete the license?")) {
      return;
    }
    router.delete(route("license.destroy", license.id));
  };

  return (
    <div>
      {success && (
        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
          {success}
        </div>
      )}

        <div className="flex items-center justify-between pb-3">
            <h2 className="font-semibold text-xl text-black dark:text-white leading-tight">License</h2>
            <Link href={route("license.create")} className="bg-emerald-500 pe-3 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600" >Add new</Link>
        </div>

        {/* Quick Filters */}
        <div className="mb-4">
            <input
            key="quick-filter"
            type="text"
            placeholder="Quick filter..."
            className="mb-3 p-2 border rounded"
            style={{ width: "100%" }}
            value={quickFilterText}
            onChange={onQuickFilterChange}
            />
        </div>

        {/* AG Grid Table */}
        <div
            className={`ag-theme-quartz ${
            document.documentElement.classList.contains("dark")
                ? "ag-theme-quartz-dark"
                : ""
            }`}
            style={{ width: "100%", height: "500px" }}
        >
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={{
                sortable: true,
                filter: true,
                resizable: true,
                }}
                localeText={AG_GRID_LOCALE_PT}
                quickFilterText={quickFilterText}
                domLayout="autoHeight"
            />
        </div>

            {/* <Pagination count={10} boundaryCount={isSuperTiny ? 1 : 2} variant="outlined" shape="rounded" /> */}

            {/* {licenses.meta && licenses.meta.links && (
  <CustomPagination links={licenses.meta.links} />
)} */}

        {/* Pagination */}
        {licenses.meta && licenses.meta.links && (
            <Pagination links={licenses.meta.links} />
        )}
    </div>
  );
}




