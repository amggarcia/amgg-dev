import React from "react";
import Image from "next/image";
import SkillsItem from "./SkillsItem";
interface Props {
  size: number;
}

export default function SkillsContainer({ size }: Props) {
  return (
    <div>
      <div className="flex place-content-evenly mt-12">
        <SkillsItem src="/react.webp" size={size} alt="React"></SkillsItem>
        <SkillsItem src="/vue.webp" size={size} alt="Vue"></SkillsItem>
        <SkillsItem src="/netcore.webp" size={size} alt="Net Core"></SkillsItem>
        <SkillsItem src="/ts.webp" size={size} alt="Typescripts"></SkillsItem>
        <SkillsItem src="/csharp.webp" size={size} alt="C Sharp"></SkillsItem>
      </div>
      <div className="flex place-content-evenly mt-12">
        <SkillsItem
          src="/azure.webp"
          size={size}
          alt="Azure Cloud"
        ></SkillsItem>
        <SkillsItem
          src="/azdevops.webp"
          size={size}
          alt="Azure Devops"
        ></SkillsItem>
        <SkillsItem
          src="/sqlserver.webp"
          size={size}
          alt="Sql Server"
        ></SkillsItem>
        <SkillsItem
          src="/oracledb.webp"
          size={size}
          alt="Oracle Database"
        ></SkillsItem>
      </div>
    </div>
  );
}
