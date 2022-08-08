import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
  index: number;
  title: String;
  noBackground?: boolean;
}
export default function Section({
  children,
  index,
  title,
  noBackground,
}: Props) {
  return (
    <section
      className={clsx(
        "min-h-[250px] pb-20",
        index % 2 == 1 && !noBackground ? "bg-slate-800" : ""
      )}
    >
      <div
        className="-mt-12 bg-cover bg-center w-full h-12 relative"
        style={
          index % 2 == 0
            ? { backgroundImage: `url(/waves-nobg.svg)` }
            : { backgroundImage: `url(/waves2.svg)` }
        }
      ></div>
      <div className="container mx-auto px-8 lg:px-24">
        <div className="w-full text-white text-lg font-semibold uppercase ">
          <h3 className="pb-4 mb-4 border-gray-500 border-b-2">{title}</h3>
        </div>
        {children}
      </div>
    </section>
  );
}
