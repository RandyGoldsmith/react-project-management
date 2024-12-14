/* eslint-disable react/prop-types */
export default function SideBar({ projects }) {
  return (
    <aside className="w-1/6 bg-sky-500 text-white text-center py-4">
      <h1 className="text-xl">Project List</h1>
      <ul className="py-5">
        {projects.map((project) => (
          <li key={project.id} className="m-2">
            <button className="text-center text-white px-2 py-1 rounded-md hover:text-black">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
