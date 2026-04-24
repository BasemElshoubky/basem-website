import { motion } from "framer-motion";
import cakery from "../assets/cakery.png";
import taskflow from "../assets/taskflow.png";

function Projects() {

  const projects = [
  {
    title: "Cakery Pro Website",
    description: "Modern bakery website with product showcase and shopping experience.",
    tech: "HTML, CSS, JavaScript",
    image: cakery,
    live: "https://basemelshoubky.github.io/cakery-pro/",
    github: "https://github.com/BasemElshoubky/cakery-pro"
  },
  {
    title: "TaskFlow App",
    description: "Task management app built with React for productivity and organization.",
    tech: "React, JavaScript, CSS",
    image: taskflow,
    live: "https://basemelshoubky.github.io/taskflow/",
    github: "https://github.com/BasemElshoubky/taskflow"
  }
];

  return (
    <div className="projects">

      <div className="page-header">
        <h2>My Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >

            {/* Image */}
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span className="tech">{project.tech}</span>

              {/* Buttons */}
              <div className="project-buttons">
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}

export default Projects;