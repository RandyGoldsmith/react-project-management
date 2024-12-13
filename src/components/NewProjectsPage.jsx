/* eslint-disable react/prop-types */
import Input from "./Input";
import { useRef } from "react";

export default function NewProjectsPage({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  function onSave() {
    const usersEnteredTitle = title.current.value;
    const usersEnteredDescription = description.current.value;
    const usersEnteredDate = date.current.value;

    onAdd({
      title: usersEnteredTitle,
      description: usersEnteredDescription,
      date: usersEnteredDate,
    });
  }

  return (
    <>
      <div className="flex flex-col gap-2 my-4 items-center flex-1 justify-center h-full">
        <Input ref={title} label="Title" type="text" />
        <Input ref={description} label="Description" textarea />
        <Input ref={date} label="Due Date" type="date" />
        <menu className="flex items-center justify-end gap-4 w-[30rem]">
          <li>
            <button
              className="w-20 p-1 rounded-md border bg-sky-500 border-sky-500 hover:bg-sky-600 hover:border-sky-600"
              onClick={onSave}
            >
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
