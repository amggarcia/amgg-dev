import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
  index: number;
  title: String;
  noBackground?: boolean;
  sectionId?: string;
}

export default function Section({
  children,
  index,
  title,
  noBackground,
  sectionId,
}: Props) {
  const imageUrl = getImageUrl(noBackground, index);
  return (
    <section
      className={clsx(
        "min-h-[250px] pb-20",
        index % 2 == 1 && !noBackground ? "bg-slate-800" : ""
      )}
      id={sectionId}
    >
      <div
        className="-mt-12 bg-cover bg-center w-full h-12 relative"
        style={{ backgroundImage: `url(/${imageUrl}.svg)` }}
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

function getImageUrl(isLastSection: boolean | undefined, index: number) {
  if (isLastSection) {
    return index % 2 == 0 ? "wavesLightInverted" : "wavesDarkInverted";
  } else {
    return index % 2 == 0 ? "wavesLight" : "wavesLightInverted";
  }
}
