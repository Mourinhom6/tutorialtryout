// import "./bootstrap";
// import "../css/app.css";

// import { createInertiaApp } from "@inertiajs/react";
// import { createRoot } from "react-dom/client";
// import Layout from "@/Layouts/Layout";
// import WorkSpace from "@/Layouts/WorkSpace";

// createInertiaApp({
//     title: (title) =>
//         title ? `${title} - Laravel Inertia React` : "Laravel Inertia React",
//     resolve: (name) => {
//         const pages = import.meta.glob("./Pages/**/*.{jsx,tsx}", { eager: true });
//         let page = pages[`./Pages/${name}.jsx`] || pages[`./Pages/${name}.tsx`];
//         if (name.endsWith('Dash')) {
//             page.default.layout = (page) => <WorkSpace
//             // page.default.layout = (page) => <WorkSpace
//             // page.default.layout = (page) => <WorkSpace

//         } else {
//             page.default.layout = (page) => <Layout children={page} />;
//             // page.default.layout = (page) => <WorkSpace
//         }
//         // page.default.layout || ((page) => <WorkSpace
//         return page;
//     },
//     setup({ el, App, props }) {
//         createRoot(el).render(<App {...props} />);
//     },
//     progress: {
//         color: "#f20a0a",
//     },
// });


// { eager: true } Try to add below





import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: (title) =>
        title ? `${title} - FleetMan WorkSpace` : "FleetMan WorkSpace",

    // Adjust `resolve` to support both `.jsx` and `.tsx` files
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.{jsx,tsx}', { eager: true }); // Match both .jsx and .tsxjsx
        if (name.endsWith('JSX')) {
            return resolvePageComponent(`./Pages/${name}.jsx`, pages)
        }
        else{
            if (name.endsWith('TSX')) {
                return resolvePageComponent(`./Pages/${name}.tsx`, pages);
            }
        }

    },

    setup({ el, App, props }) {
        createRoot(el).render(<StrictMode><App {...props} /></StrictMode>);
        // createRoot(el).render(<App {...props} />);
    },

    progress: {
        color: "#f20a0a",
    },
});


