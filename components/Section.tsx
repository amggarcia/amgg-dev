import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  index: number;
  title: String;
}
export default function Section({ children, index, title }: Props) {
  return (
    <section className="min-h-[250px] mb-20">
      <div
        className="-mt-12 bg-cover bg-center w-full h-12 relative"
        style={
          index % 2 == 0
            ? { backgroundImage: `url(/waves-nobg.svg)` }
            : { backgroundImage: `url(/waves2.svg)` }
        }
      ></div>
      <div className="container mx-auto px-8">
        <div className="w-full text-white text-lg font-semibold uppercase ">
          <h3 className="pb-4 mb-4 border-gray-500 border-b-2">{title}</h3>
        </div>
        {children}
      </div>
    </section>
  );
}
