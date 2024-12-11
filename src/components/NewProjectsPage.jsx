import Input from "./Input";

export default function NewProjectsPage() {
  return (
    <>
      <div className="flex flex-col gap-2 my-4 flex-1 items-center justify-center h-full">
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
        <menu className="flex items-center justify-end gap-4">
          <li>
            <button className="w-20 p-1 rounded-md border bg-sky-500 border-sky-500 hover:bg-sky-600 hover:border-sky-600">
              Save
            </button>
          </li>
          <li>
            <button className="w-20 p-1 rounded-md border bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700">
              Cancel
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
