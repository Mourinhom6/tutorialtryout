import WorkSpace  from "@/Layouts/WorkSpace";
import { useTheme } from '@mui/material/styles';
import { Head, Link } from "@inertiajs/react";

import LicenseTable from "./LicenseTableJSX";

export default function Index({ auth, success, licenses, breadcum, queryParams = null }) {


    const theme = useTheme();
    console.log('Theme:', theme);


    return (
    <WorkSpace
      breadcum={breadcum}
      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-black dark:text-white leading-tight">
            License
          </h2>
          <Link
            href={route("license.create")}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Add new
          </Link>
        </div>
      }
    >
    <Head title="License" />
    <div className="bg-inherit text-gray-900 dark:bg-gray-800 text-gray-100 overflow-hidden shadow-sm sm:rounded-lg">
        <LicenseTable
        licenses={licenses}
        queryParams={queryParams}
        success={success}
        />
    </div>
    </WorkSpace>
  );
}
