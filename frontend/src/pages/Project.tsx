function Projects() {
    const projectData = [
      {
        title: "Project 1",
        description: "A description of the first project.",
        link: "#",
      },
      {
        title: "Project 2",
        description: "A description of the second project.",
        link: "#",
      },
      {
        title: "Project 3",
        description: "A description of the third project.",
        link: "#",
      },
      {
        title: "Project 4",
        description: "A description of the fourth project.",
        link: "#",
      },
    ];
  
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8 h-screen">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block bg-black text-white text-lg font-medium py-2 px-6 rounded shadow-md hover:bg-gray-800 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Projects;
  