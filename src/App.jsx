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

  function saveNewProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        action: "nothing-selected",
      };
    });
  }

  let content;

  if (projectsState.action === "added") {
    content = (
      <NewProjectsPage onAdd={saveNewProject} onAddNewProject={addNewProject} />
    );
  } else if (projectsState.action === "nothing-selected") {
    content = <NoProjectsPage onAddNewProject={addNewProject} />;
  }

  return (
    <main className="h-screen flex">
      <SideBar projects={projectsState.projects} />
      {content}
    </main>
  );
}

export default App;
