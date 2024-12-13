/* eslint-disable react/prop-types */
export default function SideBar({ projects }) {
  return (
    <aside className="w-1/6 bg-sky-500 text-white text-center py-4">
      <h1 className="text-xl">Project List</h1>
      <ul className="py-5">
        <li>{projects[0].title}</li>
      </ul>
    </aside>
  );
}
