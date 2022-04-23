import { ReactNode } from "react";
import clsx from "clsx";
interface Props {
  title: string;
  children: ReactNode;
  index?: number;
}

export default function Section({ children, title, index }: Props) {
  const indexRemainder = !index ? 0 : index % 3;
  // TODO : Change to slates instead of blues ?
  return (
    <div
      className={clsx("min-h-min py-10", {
        "bg-blue-900": indexRemainder == 0,
        "bg-blue-900/90": indexRemainder == 1,
        "bg-blue-800/90": indexRemainder == 2,
      })}
    >
      <section className="w-4/5 mx-auto">
        <h1>{title}</h1>
        {children}
      </section>
    </div>
  );
}
