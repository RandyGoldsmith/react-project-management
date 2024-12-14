/* eslint-disable react/prop-types */
import Input from "./Input";
import Modal from "./Modal";
import { useRef, useState } from "react";

export default function NewProjectsPage({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();
  const modal = useRef();
  const [errors, setErrors] = useState({
    title: false,
    description: false,
    date: false,
  });

  function onSave() {
    const usersEnteredTitle = title.current.value;
    const usersEnteredDescription = description.current.value;
    const usersEnteredDate = date.current.value;

    // Check for empty inputs and set error states
    const newErrors = {
      title: usersEnteredTitle.trim() === "",
      description: usersEnteredDescription.trim() === "",
      date: usersEnteredDate.trim() === "",
    };

    // Update the error state
    setErrors(newErrors);

    // if any of the fields has an error, show modal and return
    if (Object.values(newErrors).includes(true)) {
      modal.current.open(); // open the modal for error messages
      return;
    }

    onAdd({
      title: usersEnteredTitle,
      description: usersEnteredDescription,
      date: usersEnteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>Please fill out highlighted fields</Modal>
      <div className="flex flex-col gap-2 my-4 items-center flex-1 justify-center h-full">
        <Input ref={title} label="Title" type="text" error={errors.title} />
        <Input
          ref={description}
          label="Description"
          textarea
          error={errors.description}
        />
        <Input ref={date} label="Due Date" type="date" error={errors.date} />
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
            <button
              className="w-20 p-1 rounded-md border bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
        </menu>
      </div>
    </>
  );
}
