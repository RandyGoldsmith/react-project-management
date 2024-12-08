import NewProjectsPage from "./components/NewProjectsPage";
import NoProjectsPage from "./components/NoProjectsPage";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  //creating state in app.jsx since i need the data in it collected to pass down
  // to other components in the app. I am "lifting the state up".
  const [projectsState, setProjectsState] = useState({
    action: "nothing-selected",
    projects: [],
  });

  function addNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        action: "added",
      };
    });
  }

  let content;

  if (projectsState.action === "added") {
    content = <NewProjectsPage onAddNewProject={addNewProject} />;
  } else if (projectsState.action === "nothing-selected") {
    content = <NoProjectsPage onAddNewProject={addNewProject} />;
  }

  return (
    <main className="h-screen flex">
      <SideBar />
      {content}
    </main>
  );
}

export default App;
