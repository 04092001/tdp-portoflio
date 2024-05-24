"use client";

import React from "react";
import Link from "next/link";
import { projects } from "../data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="text-gray-400 body-font bg-gray-900">
      <div className="container py-20 mx-auto text-center xl:px-40">
        <div className="flex-wrap flex">
          {projects.map((project) => (
            <Link
              href={`/pages/${project.id}`}
              key={project.image}
              className="sm:w-3/6 w-100 p-4"
            >
              <div className="flex relative">
                <motion.img
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, ease: "easeOut", duration: 2 }}
                  alt="Project"
                  className="absolute md:inset-0 w-full h-96 object-cover object-center"
                  src={project.image}
                />

                <div className="px-8 flex flex-col justify-center py-10 relative  w-full h-96 border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  {" "}
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.4 },
                    }}
                  >
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed py-5">
                      {project.description}
                    </p>
                    <p className="text-sm pb-5"> {project.tags} </p>
                    <p className="text-xs"> {project.date} </p>
                  </motion.div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
