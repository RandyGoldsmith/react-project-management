import { FaRegClipboard } from "react-icons/fa";
import Button from "./Button";

export default function NoProjectspage() {
  return (
    <div className="flex flex-col items-center justify-center text-center h-full">
      <FaRegClipboard className="text-4xl mb-2" />
      <h1>No Projects created or shown</h1>
      <Button>Create Project</Button>
    </div>
  );
}
