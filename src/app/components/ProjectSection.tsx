import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "Description 1",
    image: "/images/p1.png",
    tag: ["All", "Web"]
  },
  {
    id: 2,
    title: "React Portfolio Website",
    description: "Description 2",
    image: "/images/p2.png",
    tag: ["All", "Web"]
  },
  {
    id: 3,
    title: "React Portfolio Website",
    description: "Description 3",
    image: "/images/p3.png",
    tag: ["All", "Web"]
  },
  {
    id: 4,
    title: "React Portfolio Website",
    description: "Description 4",
    image: "/images/p4.png",
    tag: ["All", "Web"]
  },
  {
    id: 5,
    title: "React Portfolio Website",
    description: "Description 5",
    image: "/images/p5.png",
    tag: ["All", "Web"]
  },
  {
    id: 6,
    title: "React Portfolio Website",
    description: "Description 5",
    image: "/images/p5.png",
    tag: ["All", "Web"]
  },
  {
    id: 7,
    title: "React Portfolio Website",
    description: "Description 5",
    image: "/images/p5.png",
    tag: ["All", "Web"]
  },
  {
    id: 8,
    title: "React Portfolio Website",
    description: "Description 5",
    image: "/images/p5.png",
    tag: ["All", "Web"]
  }
];

const ProjectSection = () => {
  return (
    <div id='projects' className="mt-[170px]">
      <h2 className="text-4xl font-bold text-white mb-6 text-center">My Projects</h2>
      <div className="grid grid-cols-2 mt-[100px]  px-[250px] md:grid-cols-4 gap-3 justify-items-center">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
