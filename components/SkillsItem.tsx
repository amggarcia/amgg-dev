import React from "react";
import Image from "next/image";

interface Props {
  size: number;
  src: string;
  alt: string;
}
export default function SkillsItem({ src, size, alt }: Props) {
  return <Image src={src} width={size} height={size} alt={alt}></Image>;
}
