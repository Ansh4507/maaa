import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub } from "react-icons/fa";
import {projects } from "../assets/projects"

const Projects = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <section id="projects">
      <div className="border-b border-neutral-900 pb-4 mt-20">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 text-center text-4xl"
        >
          Projects
        </motion.h1>
        <div>
          {Object.keys(projects).map((category, index) => (
            <div key={index}>
              <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ duration: 1.5 }}
                className="text-3xl mb-4"
              >
                {category}
              </motion.h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                {projects[category].map((project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    className="bg-gray-800/20 backdrop-blur-md p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: projectIndex % 2 === 0 ? -100 : 100 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    {/* Slideshow */}
                    <Slider {...settings} className="w-full mb-4">
                      {project.images.map((image, imageIndex) => (
                        <div key={imageIndex}>
                          <img
                            src={image}
                            alt={`${project.title} slide ${imageIndex + 1}`}
                            className="w-full h-80 object-fit rounded-lg"
                          />
                        </div>
                      ))}
                    </Slider>

                    {/* Technologies Used */}
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-purple-700 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Description */}
                    <motion.div
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <p className="text-neutral-400 text-sm mb-4">
                        {project.description}
                      </p>
                      <a
                        href={project.Github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-purple-500 hover:underline flex items-center justify-center"
                      >
                        <FaGithub className="mr-2" />
                        View Code
                      </a>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;