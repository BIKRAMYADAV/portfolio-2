function Skills() {
  const skills = [
    { name: "React", imgSrc: "/react.png" },
    { name: "Node.js", imgSrc: "/node.jpg" },
    { name: "MongoDB", imgSrc: "/mongo.png" },
    { name: "JavaScript", imgSrc: "/javascript.png" },
    { name: "C++", imgSrc: "/c++.png" },
    { name: "Tailwind CSS", imgSrc: "/tailwind.webp" },
    { name: "TypeScript", imgSrc: "/typescript.webp" },
    { name: "Git", imgSrc: "/git.png" },
    { name: "Kafka", imgSrc: "/kafka.png" },
    { name: "Express", imgSrc: "/express.png" },
    { name: "C", imgSrc: "/c.png" },
    { name: "Linux", imgSrc: "/linux.png" },
    { name: "Websockets", imgSrc: "/websockets.png" },
    { name: "Docker", imgSrc: "/docker.png" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 sm:p-8 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8">
        My Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={skill.imgSrc}
              alt={skill.name}
              className="w-16 h-16 sm:w-24 sm:h-24 object-contain mb-2 sm:mb-4"
            />
            <p className="text-sm sm:text-lg text-gray-800 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
