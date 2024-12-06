import NoProjectspage from "./components/NoProjectsPage";
import SideBar from "./components/SideBar";

function App() {
  let content = <NoProjectspage />;

  return (
    <main className="h-screen flex">
      <SideBar />
      <div className="flex-1 flex items-center justify-center">{content}</div>
    </main>
  );
}

export default App;
