import React from "react";
import Navbar from "./components/navbar";
import Projects from "./components/projects";

export default function Home() {
  return (
    <body className="bg-gray-900">
      <main className="bg-gray-900">
        <Navbar />
        <Projects />
      </main>
    </body>
  );
}
