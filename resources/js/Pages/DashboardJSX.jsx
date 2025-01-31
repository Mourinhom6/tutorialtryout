// import WorkSpace from "@/Layouts/WorkSpace";
// import { Head, Link } from "@inertiajs/react";
// // import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
// import TaskTable from "@/Components/TableDash";

// export default function DashboardJSX({
//   auth,
//   totalPendingTasks,
//   myPendingTasks,
//   totalProgressTasks,
//   myProgressTasks,
//   totalCompletedTasks,
//   myCompletedTasks,
//   activeTasks,
//   breadcum,
// }) {
//   return (
//     <WorkSpace
//     breadcum={breadcum}
//     user={auth.user}
//       header={
//         <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
//           Dashboard
//         </h2>
//       }
//     >
//       <Head title="Dashboard" />

//       <div className="py-12">
//         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
//           <div className="bg-white dark:bg-black overflow-hidden shadow-sm sm:rounded-lg">
//             <div className="p-6 text-gray-900 dark:text-gray-100">
//               <h3 className="text-amber-500 text-2xl font-semibold">
//                 Pending Tasks
//               </h3>
//               <p className="text-xl mt-4">
//                 <span className="mr-2">{myPendingTasks}</span>/
//                 <span className="ml-2">{totalPendingTasks}</span>
//               </p>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-black overflow-hidden shadow-sm sm:rounded-lg">
//             <div className="p-6 text-gray-900 dark:text-gray-100">
//               <h3 className="text-blue-500 text-2xl font-semibold">
//                 In Progress Tasks
//               </h3>
//               <p className="text-xl mt-4">
//                 <span className="mr-2">{myProgressTasks}</span>/
//                 <span className="ml-2">{totalProgressTasks}</span>
//               </p>
//             </div>
//           </div>
//           <div className="bg-white dark:bg-black overflow-hidden shadow-sm sm:rounded-lg">
//             <div className="p-6 text-gray-900 dark:text-gray-100">
//               <h3 className="text-green-500 text-2xl font-semibold">
//                 Completed Tasks
//               </h3>
//               <p className="text-xl mt-4">
//                 <span className="mr-2">{myCompletedTasks}</span>/
//                 <span className="ml-2">{totalCompletedTasks}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
//           <div className="bg-white dark:bg-black overflow-hidden shadow-sm sm:rounded-lg">
//             <div className="p-6 text-gray-900 dark:text-gray-100">
//               {/* <h3 className="text-xl font-semibold">
//                 My Active Tasks
//               </h3> */}
//               <TaskTable
//                activeTasks={activeTasks}
//                title="My Active Tasks"/>
//               </div>
//           </div>
//         </div>
//       </div>
//     </WorkSpace>
//   );
// }


import React from 'react';
import Grid from '@mui/material/Grid2';
import { Box, Card, Stack, CardContent, Typography } from '@mui/material';

import ChartUserByCountry from '@/Components/ChartUserByCountry';
import CustomizedTreeView from '@/Components/CustomizedTreeView';
import CustomizedDataGrid from '@/Components/CustomizedDataGrid';
import PageViewsBarChart from '@/Components/PageViewsBarChart';
import SessionsChart from '@/Components/SessionsChart';
import StatCard from '@/Components/StatCard';

import WorkSpace from "@/Layouts/WorkSpace";
import { Head, Link } from "@inertiajs/react";
// import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import TaskTable from "@/Components/TableDash";

import {ClientTheme} from '@/Components/AppTheme';
import { ThemeProvider } from '@mui/material/styles';

// ((Day30Value - Day1Value) / Day1Value) * 100

// const data = [
//     {
//       title: 'Motoristas',
//       value: '635',
//       interval: 'Last 30 days',
//       trend: 'up',
//       data: [
//         200, 24, 220, 260, 240, 380, 100, 240, 280, 240, 300, 340, 320, 360, 340, 380,
//         360, 400, 380, 420, 400, 640, 340, 460, 440, 480, 460, 600, 880, 920,
//       ],
//     },
//     {
//       title: 'Reclamações',
//       value: '325',
//       interval: 'Last 30 days',
//       trend: 'down',
//       data: [
//         1640, 1250, 970, 1130, 1050, 900, 720, 1080, 900, 450, 920, 820, 840, 600, 820,
//         780, 800, 760, 380, 740, 660, 620, 840, 500, 520, 480, 400, 360, 300, 220,
//       ],
//     },
//     {
//       title: 'Event count',
//       value: '200k',
//       interval: 'Last 30 days',
//       trend: 'neutral',
//       data: [
//         500, 400, 510, 530, 520, 600, 530, 520, 510, 730, 520, 510, 530, 620, 510, 530,
//         520, 410, 530, 520, 610, 530, 520, 610, 530, 420, 510, 430, 520, 510,
//       ],
//     },
//     {
//         title: 'Something',
//         value: '17.5M',
//         interval: 'Last 30 days',
//         trend: 'up',
//         data: [
//             500, 520, 530, 540, 550, 560, 570, 580, 600, 620, 630, 640, 650, 670, 690, 710,
//             720, 730, 740, 760, 770, 780, 800, 820, 830, 840, 860, 870, 890, 900,
//         ],
//       },
//   ];


export default function Dashboard({
  breadcum,
  auth,
  activeTasks,
  myPendingTasks,
  totalPendingTasks,
  myProgressTasks,
  totalProgressTasks,
  myCompletedTasks,
  totalCompletedTasks,
  statChartsWithData
}) {

    const theme2 = ClientTheme();

    // const





  return (
    <WorkSpace breadcum={breadcum} user={auth.user}
      header={
        <Typography variant="h5" component="h2" fontWeight="bold" color="text.primary">
          Dashboard
        </Typography>
      }
    >
      <Head title="Dashboard" />

      <ThemeProvider theme={theme2} >

        <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
            <Grid
                container
                spacing={2}
                columns={12}
                sx={{ mb: (theme) => theme.spacing(2) }}
            >
                {statChartsWithData.map((card) => (
                    <Grid key={card.id} size={{ xs: 12, sm: 6, lg: 3 }}>
                        <StatCard {...card} />
                    </Grid>
                ))}
                <Grid size={{ xs: 12, md: 6 }}>
                <SessionsChart />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                <PageViewsBarChart />
                </Grid>
            </Grid>
            <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Details
            </Typography>
            <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 9 }}>
                <CustomizedDataGrid />
                </Grid>
                <Grid size={{ xs: 12, lg: 3 }}>
                <Stack gap={2} direction={{ xs: 'column', sm: 'row', lg: 'column' }}>
                    <CustomizedTreeView />
                    <ChartUserByCountry />
                </Stack>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>

      <Box py={4}>
        <Grid container spacing={2}>
          {/* Pending Tasks Card */}
          <Grid item size={{ xs: 12, sm: 4 }}>
            <Card sx={{boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="#ffc107" fontWeight="bold">
                  Pending Tasks
                </Typography>
                <Typography variant="h5" mt={2}>
                  <span>{myPendingTasks}</span> / <span>{totalPendingTasks}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* In Progress Tasks Card */}
          <Grid item size={{ xs: 12, sm: 4 }}>
            <Card sx={{boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="primary" fontWeight="bold">
                  In Progress Tasks
                </Typography>
                <Typography variant="h5" mt={2}>
                  <span>{myProgressTasks}</span> / <span>{totalProgressTasks}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Completed Tasks Card */}
          <Grid item size={{ xs: 12, sm: 4 }}>
            <Card sx={{boxShadow: 2, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" color="success" fontWeight="bold">
                  Completed Tasks
                </Typography>
                <Typography variant="h5" mt={2}>
                  <span>{myCompletedTasks}</span> / <span>{totalCompletedTasks}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Active Tasks Table */}
        <Box mt={3}>
          <Card sx={{boxShadow: 2, borderRadius: 2 }}>
            <CardContent>
              <TaskTable activeTasks={activeTasks} title="My Active Tasks" />
            </CardContent>
          </Card>
        </Box>
      </Box>



    </WorkSpace>
  );
}















// import PilaSpacial from "@/Layouts/ConaDescomonal";
// import { Head, Link } from "@inertiajs/react";
// // import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
// // import TaskTable from "@/Components/TableDash";

// export default function DashboardJSX({
//   auth,
//   totalPendingTasks,
//   myPendingTasks,
//   totalProgressTasks,
//   myProgressTasks,
//   totalCompletedTasks,
//   myCompletedTasks,
//   activeTasks,
// }) {
//   return (
//     <PilaSpacial
//       user={auth.user}
//       header={
//         <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
//           Dashboard
//         </h2>
//       }
//     >
//       <Head title="Dashboard" />


//       <div className="py-12">
//         <h3 className="text-amber-500 text-2xl font-semibold">
//          Pending Tasks
//         </h3>
//       </div>
//     </PilaSpacial>
//   );
// }




//               <table className="mt-3 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//                 <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
//                   <tr>
//                     <th className="px-3 py-3">ID</th>
//                     <th className="px-3 py-3">Project Name</th>
//                     <th className="px-3 py-3">Name</th>
//                     <th className="px-3 py-3">Status</th>
//                     <th className="px-3 py-3">Due Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {activeTasks.data.map((task) => (
//                     <tr key={task.id}>
//                       <td className="px-3 py-2">{task.id}</td>
//                       <td className="px-3 py-2 dark:text-white hover:underline">
//                         <Link href={route("project.show", task.project.id)}>
//                           {task.project.name}
//                         </Link>
//                       </td>
//                       <td className="px-3 py-2 dark:text-white hover:underline">
//                         <Link href={route("task.show", task.id)}>
//                           {task.name}
//                         </Link>
//                       </td>
//                       <td className="px-3 py-2">
//                         <span
//                           className={
//                             "px-2 py-1 rounded text-nowrap text-white " +
//                             TASK_STATUS_CLASS_MAP[task.status]
//                           }
//                         >
//                           {TASK_STATUS_TEXT_MAP[task.status]}
//                         </span>
//                       </td>
//                       <td className="px-3 py-2 text-nowrap">{task.due_date}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//              </div>
//            </div>
//          </div>
//        </div>
//      </WorkSpace>
//    );
//  }

//  className="px-3 py-2 dark:text-white hover:underline"
