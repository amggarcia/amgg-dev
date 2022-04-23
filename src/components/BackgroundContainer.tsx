import { ReactNode } from "react";
import bgImage from "../static/bg.webp";

interface Props {
  children: ReactNode;
}
export default function BackgroundContainer({ children }: Props) {
  return (
    <div
      className="bg-no-repeat bg-center"
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(46,49,65,.8),rgba(46,49,65,.8)),url(${bgImage})`,
      }}
    >
      {children}
    </div>
  );
}
