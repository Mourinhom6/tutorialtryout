import WorkSpace  from "@/Layouts/WorkSpace";
import { Head, Link } from "@inertiajs/react";
import {
  LICENSE_PRIORITY_CLASS_MAP,
  LICENSE_PRIORITY_TEXT_MAP,
  LICENSE_STATUS_CLASS_MAP,
  LICENSE_STATUS_TEXT_MAP,
} from "@/constants.jsx";
export default function Show({ auth, license }) {
  return (
    <WorkSpace

      user={auth.user}
      header={
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`License "${license.name}"`}
          </h2>
          <Link
            href={route("license.edit", license.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Edit
          </Link>
        </div>
      }
    >
      <Head title={`License "${license.name}"`} />

      <div className="flex items-center justify-between">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {`License "${license.name}"`}
          </h2>
          <Link
            href={route("license.edit", license.id)}
            className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
          >
            Edit
          </Link>
        </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div>
              <img
                src={license.image_path}
                alt=""
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label className="font-bold text-lg">License ID</label>
                    <p className="mt-1">{license.id}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">License Name</label>
                    <p className="mt-1">{license.name}</p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">License Status</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          LICENSE_STATUS_CLASS_MAP[license.status]
                        }
                      >
                        {LICENSE_STATUS_TEXT_MAP[license.status]}
                      </span>
                    </p>
                  </div>

                  <div className="mt-4">
                    <label className="font-bold text-lg">License Priority</label>
                    <p className="mt-1">
                      <span
                        className={
                          "px-2 py-1 rounded text-white " +
                          LICENSE_PRIORITY_CLASS_MAP[license.priority]
                        }
                      >
                        {LICENSE_PRIORITY_TEXT_MAP[license.priority]}
                      </span>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Created By</label>
                    <p className="mt-1">{license.createdBy.name}</p>
                  </div>
                </div>
                <div>
                  <div>
                    <label className="font-bold text-lg">Due Date</label>
                    <p className="mt-1">{license.due_date}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Create Date</label>
                    <p className="mt-1">{license.created_at}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Updated By</label>
                    <p className="mt-1">{license.updatedBy.name}</p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Project</label>
                    <p className="mt-1">
                      <Link
                        href={route("project.show", license.project.id)}
                        className="hover:underline"
                      >
                        {license.project.name}
                      </Link>
                    </p>
                  </div>
                  <div className="mt-4">
                    <label className="font-bold text-lg">Assigned User</label>
                    <p className="mt-1">{license.assignedUser.name}</p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <label className="font-bold text-lg">License Description</label>
                <p className="mt-1">{license.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}
