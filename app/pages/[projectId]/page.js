"use client";

import { projects } from "../../data";
import Navbar from "../../components/navbar";
import { motion } from "framer-motion";

const ProjectPage = ({ params }) => {
  const projectId = params.projectId;

  const project = projects.find((project) => project.id === projectId);

  if (!project) {
    return <div>This project could not be found</div>;
  }

  return (
    <body className="bg-gray-900">
      <section className="bg-gray-900">
        <Navbar />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ y: 100 }}
          className="bg-gray-900 h-auto flex flex-col text-xl z-10 w-full  border-gray-800"
        >
          <h1 className="text-white text-5xl title-font font-medium mb-3 text-center pb-4">
            {project.title}
          </h1>
          <h1 className="text-white text-center text-sm py-1">
            {project.date}
          </h1>
          <div className="flex justify-center">
            <p className="text-gray-400 leading-relaxed whitespace-pre-line px-20 xl:px-60">
              {project.textcontent}
            </p>
          </div>
          <div>{projects.forEach((image) => {})}</div>
        </motion.div>
      </section>
    </body>
  );
};

export default ProjectPage;
