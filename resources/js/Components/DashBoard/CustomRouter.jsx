// import { useMemo } from 'react';
// import { usePage } from '@inertiajs/react';
// import { NAVIGATION } from "@/Layouts/WorkSpace";


// export const CustomRouter = () => {
//     // Use the current Inertia page context
//     const page = usePage();

//     // Extract pathname and query params from the current Inertia page
//     const pathname = page.url || '/';

//     const searchParams = useMemo(() => {
//         const url = new URL(pathname, window.location.origin);
//         return new URLSearchParams(url.search);
//     }, [pathname]);

//   // Define navigate function
//   const navigate = (url, options = { history: 'auto' }) => {
//     const method = options.history === 'replace' ? 'replace' : 'push';

//     // Check if the URL matches a navigation item pattern
//     const target = NAVIGATION.find(
//       (item) => item.kind === 'page' && item.pattern === url
//     );

//     if (target) {
//       // Use Inertia to navigate via Laravel
//       Inertia.visit(url, { method });
//     } else {
//       console.warn(`Navigation pattern not found for URL: ${url}`);
//     }
//   };

//   return {
//     pathname,
//     searchParams,
//     navigate,
//   };
// };


//     const searchParams = useMemo(() => {
//       const url = new URL(pathname, window.location.origin);
//       return new URLSearchParams(url.search);
//     }, [pathname]);

//     // Helper function to resolve navigation for the current URL
//     const resolveNavigation = () => {
//       const resolveItem = (items) =>
//         items.find((item) => item.pattern === pathname || resolveItem(item.children || []));

//       return resolveItem(NAVIGATION) || null;
//     };

//     // Find the current navigation item
//     const currentNavigation = resolveNavigation();

//     // Define the navigate function
//     const navigate = (url, options = { history: 'auto' }) => {
//       const method = options.history === 'replace' ? 'replace' : 'push';
//       window.Inertia.visit(url, { method });
//     };

//     return {
//       pathname,
//       searchParams,
//       navigate,
//       currentNavigation, // Pass the current navigation item for contextual use
//     };
//   };


// import { useMemo } from 'react';
// import * as React from 'react';
// import { usePage } from '@inertiajs/react';

// export function CustomRouter() {
//   const { url: currentUrl } = usePage();
//   const [path, setPath] = React.useState(currentUrl);

//   const router = React.useMemo(() => {
//     return {
//       pathname: path,
//       navigate: async (newPath) => {
//         setPath(newPath);

//         // Send the relative path to the Laravel backend
//         try {
//           const response = await fetch(newPath, {
//             method: 'GET',
//             headers: {
//               'Content-Type': 'application/json',
//               'X-Requested-With': 'XMLHttpRequest', // Important for Inertia
//             },
//           });

//           if (response.redirected) {
//             window.location.href = response.url; // Handle Laravel's redirection
//           } else {
//             console.error('Unexpected response:', response);
//           }
//         } catch (error) {
//           console.error('Error navigating:', error);
//         }
//       },
//     };
//   }, [path]);

//   return router;
// }

// import * as React from 'react';
// import { useMemo } from 'react';
// import { usePage, router } from '@inertiajs/react';

// export function CustomRouter() {
//   const page = usePage(); // Access the current Inertia page context

//   const router = useMemo(() => {
//     // Get the current URL and search parameters
//     console.log("page.url", page.url)
//     const pathname = page.url.replace(/^\//, '') || '/';
//     const searchParams = new URLSearchParams(window.location.search); // Use current search parameters

//     const navigate = async (routeName, parameters = {}, options = { method: 'get' }) => {
//         try {
//             const cleanedRouteName = routeName.replace(/^\//, '');
//             console.log(`CustomRouter: Navigating to routeName=${cleanedRouteName}, parameters=`, parameters);

//             // Call the Laravel route helper to get the full URL
//             const url = route(cleanedRouteName, parameters);

//             console.log(`CustomRouter: Visiting URL: ${url}`);
//             // router.visit(url, options); routeName  options
//             router.visit(routeName, { method: 'post' });
//         } catch (error) {
//             console.error(`CustomRouter: Error during navigation: ${error.message}`);
//         }
//     };

//     return {
//       pathname,
//       searchParams, // Always a valid URLSearchParams object
//       navigate, // Function to navigate to Laravel routes
//     };
//   }, [page.url]);

//   return router;
// }




// import * as React from 'react';
// import { useMemo } from 'react';
// import { usePage, router } from '@inertiajs/react';

// export function CustomRouter() {
//   const page = usePage(); // Access the current Inertia page context

//   const routercustum = useMemo(() => {
//     const pathname = page.url || '/';
//     const searchParams = new URLSearchParams(window.location.search); // Use current search parameters

//     const navigate = (routeName, parameters = {}, options = { method: 'get' }) => {
//       try {
//         const url = route(routeName, parameters); // Generate the full URL
//         console.log('CustomRouter: Navigating to URL:', url);

//         router.visit(url, options); // Perform Inertia navigation
//       } catch (error) {
//         console.error('CustomRouter: Error during navigation:', error);
//       }
//     };

//     return {
//       pathname,
//       searchParams,
//       navigate,
//     };
//   }, [page.url]);

//   return routercustum;
// }



import * as React from 'react';
import { useMemo } from 'react';
import { usePage, router } from '@inertiajs/react';

export function CustomRouter() {
  const page = usePage(); // Access the current Inertia page context
  console.log('CustomRouter: Current Inertia page context:', page);

  const routercustum = useMemo(() => {
    const pathname = page.url || '/';
    console.log('CustomRouter: Current pathname:', pathname);

    const searchParams = new URLSearchParams(window.location.search); // Use current search parameters
    console.log('CustomRouter: Current search parameters:', searchParams.toString());

    const navigate = (routeName, parameters = {}, options = { method: 'get' }) => {
      console.log('CustomRouter: Navigation requested');
      console.log('CustomRouter: routeName:', routeName);
      console.log('CustomRouter: parameters:', parameters);
      console.log('CustomRouter: options:', options);

      try {
        // const url = route(routeName, parameters); // Generate the full URL
        // console.log('CustomRouter: Generated URL:', url);

        router.visit(routeName, options); // Perform Inertia navigation
        // console.log('CustomRouter: Navigation successful to URL:', url);
      } catch (error) {
        console.error('CustomRouter: Error during navigation:', error);
      }
    };

    console.log('CustomRouter: Router initialized with pathname and searchParams');

    return {
      pathname,
      searchParams,
      navigate,
    };
  }, [page.url]);

  console.log('CustomRouter: Returning router object:', routercustum);

  return routercustum;
}



// GET|HEAD        dashboard . dashboard › DashboardController@index
// GET|HEAD        license . license.index › LicenseController@index
// POST            license . license.store › LicenseController@store
// GET|HEAD        license/create  license.create › LicenseController@create
// GET|HEAD        license/{license} . license.show › LicenseController@show
// PUT|PATCH       license/{license} . license.update › LicenseController@update
// DELETE          license/{license} . license.destroy › LicenseController@destroy
// GET|HEAD        license/{license}/edit  license.edit › LicenseController@edit
// GET|HEAD        profile . profile.edit › ProfileController@edit
// PATCH           profile . profile.update › ProfileController@update
// DELETE          profile . profile.destroy › ProfileController@destroy
// GET|HEAD        project . project.index › ProjectController@index
// POST            project . project.store › ProjectController@store
// GET|HEAD        project/create  project.create › ProjectController@create
// GET|HEAD        project/{project} . project.show › ProjectController@show
// PUT|PATCH       project/{project} . project.update › ProjectController@update
// DELETE          project/{project} . project.destroy › ProjectController@destroy
// GET|HEAD        project/{project}/edit  project.edit › ProjectController@edit
// GET|HEAD        task  task.index › TaskController@index
// POST            task  task.store › TaskController@store
// GET|HEAD        task/create . task.create › TaskController@create
// GET|HEAD        task/my-tasks . task.myTasks › TaskController@myTasks
// GET|HEAD        task/{task} . task.show › TaskController@show
// PUT|PATCH       task/{task} . task.update › TaskController@update
// DELETE          task/{task} . task.destroy › TaskController@destroy
// GET|HEAD        task/{task}/edit  task.edit › TaskController@edit
// GET|HEAD        user  user.index › UserController@index
// POST            user  user.store › UserController@store
// GET|HEAD        user/create . user.create › UserController@create
// GET|HEAD        user/{user} . user.show › UserController@show
// PUT|PATCH       user/{user} . user.update › UserController@update
// DELETE          user/{user} . user.destroy › UserController@destroy
// GET|HEAD        user/{user}/edit  user.edit › UserController@edit
// GET|HEAD        {any}  RoutingController@handle
