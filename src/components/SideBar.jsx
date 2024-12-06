export default function SideBar() {
  return (
    <aside className="w-1/6 bg-sky-500 text-white text-center py-4">
      <h1 className="text-xl">Project List</h1>
      <ul className="py-5">
        <li className="cursor-pointer border-black hover:text-black ">
          Project 1
        </li>
        <li className="cursor-pointer hover:text-black">Project 2</li>
      </ul>
    </aside>
  );
}
