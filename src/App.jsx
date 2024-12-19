import NewProjectsPage from "./components/NewProjectsPage";
import NoProjectsPage from "./components/NoProjectsPage";
import ProjectDetails from "./components/ProjectDetails";
import SideBar from "./components/SideBar";
import { useState } from "react";

function App() {
  //creating state in app.jsx since i need the data in it collected to pass down
  // to other components in the app. I am "lifting the state up".
  const [projectsState, setProjectsState] = useState({
    action: "nothing-selected",
    projects: [],
  });

  const [selectedProjectId, setSelectedProjectId] = useState(null);

  function handleSelectProject(projectId) {
    setSelectedProjectId(projectId);
  }

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(
          (project) => project.id !== selectedProjectId
        ),
      };
    });
    setSelectedProjectId(null);
  }

  function addNewProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        action: "added",
      };
    });
  }

  function handleSaveProject(projectData) {
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

  function handleCancelProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        action: "nothing-selected",
      };
    });
  }

  function handleUpdatedDescription(projectId, newDescription) {
    setProjectsState((prevState) => {
      const updatedDescription = prevState.projects.map((project) =>
        project.id === projectId
          ? { ...project, description: newDescription }
          : project
      );
      return {
        ...prevState,
        projects: updatedDescription,
      };
    });
  }

  let content;

  if (selectedProjectId) {
    console.log("Selected Project ID:", selectedProjectId); // Log the selected project ID
    console.log("Current Projects:", projectsState.projects); // Log the projects array

    const selectedProject = projectsState.projects.find(
      (project) => project.id === selectedProjectId
    );

    if (selectedProject) {
      content = (
        <ProjectDetails
          project={selectedProject}
          onDelete={handleDeleteProject}
          onUpdateDescription={handleUpdatedDescription}
        />
      );
    } else {
      content = <p>Project not found</p>;
    }
  } else if (projectsState.action === "added") {
    content = (
      <NewProjectsPage
        onAdd={handleSaveProject}
        onAddNewProject={addNewProject}
        onCancel={handleCancelProject}
      />
    );
  } else {
    content = <NoProjectsPage onAddNewProject={addNewProject} />;
  }

  return (
    <main className="h-screen flex">
      <SideBar
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
