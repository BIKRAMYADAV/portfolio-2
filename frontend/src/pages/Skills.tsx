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
      {name: "kafka", imgSrc: "/kafka.png"},
      {name: "express",imgSrc:"/express.png" },
      {name: "C",imgSrc:"/c.png" },
      {name: "linux",imgSrc:"/linux.png" },
      {name: "websockets",imgSrc:"/websockets.png" },
      {name: "docker", imgSrc: "/docker.png"}

    ];
  
    return (
      <div className="flex flex-col items-center justify-center bg-gray-100 p-8 h-screen">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-8 w-full max-w-6xl">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <img
                src={skill.imgSrc}
                alt={skill.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <p className="text-lg text-gray-800 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Skills;
  