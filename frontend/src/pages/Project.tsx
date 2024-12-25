function Projects() {
  const projectData = [
    {
      title: "VigilanceVista",
      description:
        "A website that takes location as an input and returns the safety analytics of that area based upon real police data scrapped from the internet along with a dedicated community page for users to post their own experiences of that area.",
      link: "https://github.com/BIKRAMYADAV/VigilanceVista",
    },
    {
      title: "FindMyFriend",
      description:
        "A full-stack MERN application that securely stores friend information (name and contact) and provides real-time location tracking when mutually shared. Integrated JWT authentication for secure access and data privacy, allowing only authenticated users to track shared locations.",
      link: "https://github.com/BIKRAMYADAV/FindMyFriend",
    },
    {
      title: "Codex",
      description:
        "A website that allows you to share your code in real time with your collaborators and features multi-language support along with a beautiful text editor.",
      link: "https://github.com/BIKRAMYADAV/codex",
    },
    {
      title: "Logistics Tracking System",
      description:
        "A project laided with cutting-edge technology for better scaling that allows real-time tracking of delivery packages as well as a beautiful dashboard for the admin with features including route optimizations. Scaled with the help of Apache Kafka, Docker, PostgreSQL, as well as MongoDB.",
      link: "https://github.com/SDD1Leo/LTS",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-8 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4">
              {project.title}
            </h3>
            <p className="text-sm sm:text-lg text-gray-600 mb-2 sm:mb-4">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white text-sm sm:text-lg font-medium py-2 px-4 sm:px-6 rounded shadow-md hover:bg-gray-800 transition duration-300"
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

