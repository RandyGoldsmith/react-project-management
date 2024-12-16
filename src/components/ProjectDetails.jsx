/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ProjectDetails({ project, onBack }) {
  return (
    <>
      <div>
        <h2>{project.title}</h2>
        <p>{project.date}</p>
      </div>
      <p>{project.description}</p>
      TASKS
      <div>
        <button
          className="w-20 p-1 rounded-md border bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700"
          onClick={onBack}
        >
          Cancel
        </button>
      </div>
    </>
  );
}
