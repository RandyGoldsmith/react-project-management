import { FaRegClipboard } from "react-icons/fa";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function NoProjectsPage({ onAddNewProject }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center h-full">
      <FaRegClipboard className="text-4xl mb-2" />
      <h2 className="text-lg mb-1">No Project created or shown</h2>
      <p>Select a project or create a new one</p>
      <p className="mt-4">
        <Button onClick={onAddNewProject}>Create new project</Button>
      </p>
    </div>
  );
}
