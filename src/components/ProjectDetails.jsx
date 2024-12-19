/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaTrashCan } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { useState } from "react";

export default function ProjectDetails({
  project,
  onDelete,
  onUpdateDescription,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(
    project.description
  );

  function handleEdit() {
    setIsEditing(true);
  }

  function handleCancelEdit() {
    setEditedDescription(project.description);
    setIsEditing(false);
  }

  function handleSaveEdit() {
    onUpdateDescription(project.id, editedDescription);
    setIsEditing(false);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex w-1/2 justify-between my-5 border-b-2 border-sky-400">
        <h2>{project.title}</h2>
        <p>{project.date}</p>
      </div>
      <div className="flex place-items-center w-1/2 justify-between">
        {isEditing ? (
          <input
            type="text"
            className="w-full p-2 border rounded"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        ) : (
          <p>{project.description}</p>
        )}
        <div className="flex gap-3">
          <a style={{ cursor: "pointer" }}>
            <MdEdit onClick={handleEdit} />
          </a>
          <a style={{ cursor: "pointer" }}>
            <FaTrashCan onClick={onDelete} />
          </a>
        </div>
      </div>
      TASKS
      {isEditing && (
        <div className="flex gap-2 mt-4">
          <button
            className="w-20 p-1 rounded-md border bg-green-600 hover:bg-green-700"
            onClick={handleSaveEdit}
          >
            Save
          </button>
          <button
            className="w-20 p-1 rounded md border bg-gray-600 hover:bg-gray-700"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      )}
      <div className="flex w-1/2 justify-end m-8">
        <button
          className="w-20 p-1 rounded-md border bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700"
          onClick={onDelete}
        >
          DELETE
        </button>
      </div>
    </div>
  );
}
