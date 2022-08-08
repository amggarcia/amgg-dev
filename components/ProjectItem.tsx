import React from "react";
import { Project } from "../staticData/ProjectData";
import Image from "next/image";
import Link from "next/link";
interface Props {
  project: Project;
}
export default function ProjectItem({ project }: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center text-white text-m font-bold uppercase ">
        <Image src={project.imgSrcPath} width="300" height="174"></Image>
      </div>
      <div className="flex flex-col grow text-white text-m font-bold ">
        <h2 className="text-center py-4 mb-4 border-gray-500 border-b-2 uppercase">
          {project.title}
        </h2>
        <p className="font-light text-s">{project.shortDesc}</p>
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href={"/"}
          className="bg-slate-600 hover:bg-slate-800 text-white font-bold border-2 border-slate-800 py-2 px-4 rounded-full"
        >
          <a className="bg-slate-600 hover:bg-slate-800 text-white font-bold border-2 border-slate-800 py-2 px-4 rounded-full">
            Read more
          </a>
        </Link>
      </div>
    </div>
  );
}
