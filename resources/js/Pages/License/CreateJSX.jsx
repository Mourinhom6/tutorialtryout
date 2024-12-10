import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import MenuItem from '@mui/material/MenuItem';
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import WorkSpace  from "@/Layouts/WorkSpace";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, projects, users }) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: "",
    status: "",
    description: "",
    due_date: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("license.store"));
  };

  return (
    <WorkSpace

      user={auth.user}
      header={
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Create new License
          </h2>
      }
    >
      <Head title="Licenses" />


      <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Create new License
          </h2>
        </div>

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <form
              onSubmit={onSubmit}
              className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
            >
              <div>
                <InputLabel htmlFor="license_project_id" value="Project" />
                <SelectInput
                    label="Select Project"
                    value={data.project_id || ""}
                    onChange={(e) => setData("project_id", e.target.value)}
                    sx={{ width: "100%" }}
                    >
                    <MenuItem value="">
                        <em>Select Project</em>
                    </MenuItem>
                    {projects.data.map((project) => (
                        <MenuItem value={project.id} key={project.id}>
                        {project.name}
                        </MenuItem>
                    ))}
                </SelectInput>

                <InputError message={errors.project_id} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="license_image_path" value="License Image" />
                <TextInput
                  id="license_image_path"
                  type="file"
                  name="image"
                  sx={{ mt: 1, width: '100%' }}
                  onChange={(e) => setData("image", e.target.files[0])}
                />
                <InputError message={errors.image} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="license_name" value="License Name" />

                <TextInput
                  id="license_name"
                  type="text"
                  name="name"
                  value={data.name}
                  sx={{ mt: 1, width: '100%' }}
                  isFocused={true}
                  onChange={(e) => setData("name", e.target.value)}
                />

                <InputError message={errors.name} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel
                  htmlFor="license_description"
                  value="License Description"
                />

                <TextAreaInput
                  id="license_description"
                  name="description"
                  value={data.description}
                  sx={{ mt: 1, width: '100%' }}
                  onChange={(e) => setData("description", e.target.value)}
                />

                <InputError message={errors.description} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="license_due_date" value="License Deadline" />

                <TextInput
                  id="license_due_date"
                  type="date"
                  name="due_date"
                  value={data.due_date}
                  sx={{ mt: 1, width: '100%' }}
                  onChange={(e) => setData("due_date", e.target.value)}
                />

                <InputError message={errors.due_date} className="mt-2" />
              </div>
              <div className="mt-4">
                <InputLabel htmlFor="license_status" value="License Status" />
                <SelectInput
                    label="Select Status"
                    value={data.status || ""}
                    onChange={(e) => setData("status", e.target.value)}
                    sx={{ mt: 1, width: '100%' }}
                    >
                    <MenuItem value="">
                        <em>Select Status</em>
                    </MenuItem>
                    <MenuItem value="ACTIVO">Activo</MenuItem>
                    <MenuItem value="DESATIVADO">Desativado</MenuItem>
                </SelectInput>

                <InputError message={errors.license_status} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel htmlFor="license_priority" value="License Priority" />

                <SelectInput
                    label="Select Priority"
                    value={data.priority || ""}
                    onChange={(e) => setData("priority", e.target.value)}
                    sx={{ width: "100%" }}
                    >
                    <MenuItem value="">
                        <em>Select Priority</em>
                    </MenuItem>
                    <MenuItem value="EXPIRE">Expirada</MenuItem>
                    <MenuItem value="SEVEND">- 7 Dias</MenuItem>
                    <MenuItem value="TH30D">- 30 Dias</MenuItem>
                    <MenuItem value="NICE">Em dia</MenuItem>
                </SelectInput>


                <InputError message={errors.priority} className="mt-2" />
              </div>

              <div className="mt-4">
                <InputLabel
                  htmlFor="license_assigned_user"
                  value="Assigned User"
                />

                <SelectInput
                    label="Select User"
                    value={data.assigned_user_id || ""}
                    onChange={(e) => setData("assigned_user_id", e.target.value)}
                    sx={{ width: "100%" }}
                    >
                    <MenuItem value="">
                        <em>Select User</em>
                    </MenuItem>
                    {users.data.map((user) => (
                        <MenuItem value={user.id} key={user.id}>
                        {user.name}
                        </MenuItem>
                    ))}
                </SelectInput>


                <InputError
                  message={errors.assigned_user_id}
                  className="mt-2"
                />
              </div>

              <div className="mt-4 text-right">
                <Link
                  href={route("license.index")}
                  className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                >
                  Cancel
                </Link>
                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </WorkSpace>
  );
}
