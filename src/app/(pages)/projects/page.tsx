import React from "react";

const ProjectsPage = () => {
  // Example project data - replace with your actual data
  const projects = [
    { title: "Community Radio Initiative", description: "A project aimed at empowering local communities through accessible radio programming." },
    { title: "Media Literacy Workshop", description: "Workshops designed to educate youths on media consumption and production." },
    { title: "Investigative Journalism Series", description: "A series of in-depth reports on key social issues affecting our society." },
    // ... other projects
  ];

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl text-center font-semibold text-gray-900 mb-6">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
            <p className="text-red-600">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
