import React from "react";
import { Project } from "../staticData/ProjectData";
import ProjectItem from "./ProjectItem";

interface Props {
  projects: Project[];
}

export default function ProjectList({ projects }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 place-content-around mt-12">
      {projects.map((project) => {
        return <ProjectItem key={project.slug} project={project}></ProjectItem>;
      })}
    </div>
  );
}
