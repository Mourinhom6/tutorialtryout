// import Pagination from "@/Components/Pagination";
// import InputLabel from '@mui/material/InputLabel';
// import SelectInput from "@/Components/SelectInput";
// import MenuItem from '@mui/material/MenuItem';
// import TextInput from "@/Components/TextInput";
// import TableHeading from "@/Components/TableHeading";
// import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";
// import { Link, router } from "@inertiajs/react";

// export default function TasksTable({
//   tasks,
//   success,
//   queryParams = null,
//   hideProjectColumn = false,
// }) {
//   queryParams = queryParams || {};
//   const searchFieldChanged = (name, value) => {
//     if (value) {
//       queryParams[name] = value;
//     } else {
//       delete queryParams[name];
//     }
//     router.get(route("task.index"), queryParams);
//   };

//   const onKeyDown = (name, e) => {
//     if (e.key !== "Enter") return;

//     searchFieldChanged(name, e.target.value);
//   };

//   const sortChanged = (name) => {
//     if (name === queryParams.sort_field) {
//       if (queryParams.sort_direction === "asc") {
//         queryParams.sort_direction = "desc";
//       } else {
//         queryParams.sort_direction = "asc";
//       }
//     } else {
//       queryParams.sort_field = name;
//       queryParams.sort_direction = "asc";
//     }
//     router.get(route("task.index"), queryParams);
//   };

//   const deleteTask = (task) => {
//     if (!window.confirm("Are you sure you want to delete the task?")) {
//       return;
//     }
//     router.delete(route("task.destroy", task.id));
//   };

//   return (
//     <>
//       {success && (
//         <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
//           {success}
//         </div>
//       )}
//       <div className="overflow-auto">
//         <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
//             <tr className="text-nowrap">
//               <TableHeading
//                 name="id"
//                 sort_field={queryParams.sort_field}
//                 sort_direction={queryParams.sort_direction}
//                 sortChanged={sortChanged}
//               >
//                 ID
//               </TableHeading>
//               <th className="px-3 py-3">Image</th>
//               {!hideProjectColumn && (
//                 <th className="px-3 py-3">Project Name</th>
//               )}
//               <TableHeading
//                 name="name"
//                 sort_field={queryParams.sort_field}
//                 sort_direction={queryParams.sort_direction}
//                 sortChanged={sortChanged}
//               >
//                 Name
//               </TableHeading>

//               <TableHeading
//                 name="status"
//                 sort_field={queryParams.sort_field}
//                 sort_direction={queryParams.sort_direction}
//                 sortChanged={sortChanged}
//               >
//                 Status
//               </TableHeading>

//               <TableHeading
//                 name="created_at"
//                 sort_field={queryParams.sort_field}
//                 sort_direction={queryParams.sort_direction}
//                 sortChanged={sortChanged}
//               >
//                 Create Date
//               </TableHeading>

//               <TableHeading
//                 name="due_date"
//                 sort_field={queryParams.sort_field}
//                 sort_direction={queryParams.sort_direction}
//                 sortChanged={sortChanged}
//               >
//                 Due Date
//               </TableHeading>
//               <th className="px-3 py-3">Created By</th>
//               <th className="px-3 py-3 text-right">Actions</th>
//             </tr>
//           </thead>
//           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
//             <tr className="text-nowrap">
//               <th className="px-3 py-3"></th>
//               <th className="px-3 py-3"></th>
//               {!hideProjectColumn && <th className="px-3 py-3"></th>}
//               <th className="px-3 py-3">
//                 <TextInput
//                   type="search"
//                   sx={{ width: "100%" }}
//                   defaultValue={queryParams.name}
//                   label="Task Name"
//                   onBlur={(e) => searchFieldChanged("name", e.target.value)}
//                   onKeyDown={(e) => onKeyDown("name", e)}
//                 />
//               </th>
//               <th className="px-3 py-3">
//               <SelectInput
//                     label="Selecione uma opção"
//                     // helperText="Escolher um estado"
//                     value={queryParams.status || ""}
//                     onChange={(e) => searchFieldChanged("status", e.target.value)}
//                     sx={{ width: "100%" }}
//                     >
//                     <MenuItem value="">
//                         <em>Todos</em>
//                     </MenuItem>
//                     <MenuItem value="pending">Pending</MenuItem>
//                     <MenuItem value="in_progress">In Progress</MenuItem>
//                     <MenuItem value="completed">Completed</MenuItem>
//                 </SelectInput>

//                 </th>
//                 <th className="px-3 py-3"></th>
//                 <th className="px-3 py-3"></th>
//                 <th className="px-3 py-3"></th>
//                 <th className="px-3 py-3"></th>
//             </tr>
//           </thead>
//           <tbody>
//             {tasks.data.map((task) => (
//               <tr
//                 className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
//                 key={task.id}
//               >
//                 <td className="px-3 py-2">{task.id}</td>
//                 <td className="px-3 py-2">
//                   <img src={task.image_path} style={{ width: 60 }} />
//                 </td>
//                 {!hideProjectColumn && (
//                   <td className="px-3 py-2">{task.project.name}</td>
//                 )}
//                 <th className="px-3 py-2 text-gray-100 hover:underline">
//                   <Link href={route("task.show", task.id)}>{task.name}</Link>
//                 </th>
//                 <td className="px-3 py-2">
//                   <span
//                     className={
//                       "px-2 py-1 rounded text-nowrap text-white " +
//                       TASK_STATUS_CLASS_MAP[task.status]
//                     }
//                   >
//                     {TASK_STATUS_TEXT_MAP[task.status]}
//                   </span>
//                 </td>
//                 <td className="px-3 py-2 text-nowrap">{task.created_at}</td>
//                 <td className="px-3 py-2 text-nowrap">{task.due_date}</td>
//                 <td className="px-3 py-2">{task.createdBy.name}</td>
//                 <td className="px-3 py-2 text-nowrap">
//                   <Link
//                     href={route("task.edit", task.id)}
//                     className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
//                   >
//                     Edit
//                   </Link>
//                   <button
//                     onClick={(e) => deleteTask(task)}
//                     className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <Pagination links={tasks.meta.links} />
//     </>
//   );
// }


import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Link } from "@inertiajs/react";
import Pagination from "@/Components/Pagination";
import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS
import "ag-grid-community/styles/ag-theme-alpine.css"; // Theme CSS
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP, AG_GRID_LOCALE_PT} from "@/constants.jsx";

export default function TasksTable({
  tasks,
  success,
  queryParams = null,
  hideProjectColumn = false,
}) {
  queryParams = queryParams || {};

  // Column Definitions
  const columnDefs = useMemo(() => {
    const columns = [
      { headerName: "ID", field: "id", flex: 1 },
      {
        headerName: "Image",
        field: "image_path",
        flex: 1,
        cellRenderer: (params) => (
          <img src={params.value} style={{ width: 60 }} alt="Task" />
        ),
      },
      !hideProjectColumn && {
        headerName: "Project Name",
        field: "project.name",
        flex: 2,
      },
      {
        headerName: "Name",
        field: "name",
        flex: 2,
        cellRenderer: (params) => (
          <Link
            href={route("task.show", params.data.id)}
            className="text-gray-100 hover:underline"
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
      { headerName: "Created Date", field: "created_at", flex: 1 },
      { headerName: "Due Date", field: "due_date", flex: 1 },
      { headerName: "Created By", field: "createdBy.name", flex: 1 },
      {
        headerName: "Actions",
        field: "actions",
        flex: 2,
        cellRenderer: (params) => (
          <>
            <Link
              href={route("task.edit", params.data.id)}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
            >
              Edit
            </Link>
            <button
              onClick={() => deleteTask(params.data)}
              className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
            >
              Delete
            </button>
          </>
        ),
      },
    ];
    return columns.filter(Boolean); // Remove falsy values (e.g., hidden project column)
  }, [hideProjectColumn]);

  // Row Data
  const rowData = tasks.data;

  // Quick Filter
  const [quickFilterText, setQuickFilterText] = useState("");

  const onQuickFilterChange = (event) => {
    setQuickFilterText(event.target.value);
  };

  const deleteTask = (task) => {
    if (!window.confirm("Are you sure you want to delete the task?")) {
      return;
    }
    router.delete(route("task.destroy", task.id));
  };

  return (
    <div>
      {success && (
        <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
          {success}
        </div>
      )}

      {/* Quick Filters */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Quick filter..."
          className="mb-3 p-2 border rounded"
          style={{ width: "100%" }}
          value={quickFilterText}
          onChange={onQuickFilterChange}
        />
      </div>

      {/* AG Grid Table */}
      <div className="ag-theme-alpine" style={{ width: "100%", height: "500px" }}>
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
          rowSelection ={{
            mode: 'singleRow',
            enableClickSelection: true,
          }}
        />
      </div>

      {/* Pagination */}
      <Pagination links={tasks.meta.links} />
    </div>
  );
}





