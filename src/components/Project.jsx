import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <div id="projects" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 1, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-12 flex flex-col items-center lg:flex-row lg:items-start lg:justify-center gap-6"
          >
            {/* Image Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 1, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="rounded mb-4 lg:mb-0"
              />
            </motion.div>

            {/* Text Section */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 1, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm lg:w-3/4"
            >
              <h6 className="text-xl font-semibold mb-2">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-purple-600 hover:text-purple-400 transition"
                >
                  <FaGithub className="h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
