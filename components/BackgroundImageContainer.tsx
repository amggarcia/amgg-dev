import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children?: ReactNode;
  centerBackground?: boolean;
}
export default function BackgroundImageContainer({
  children,
  centerBackground = true,
}: Props) {
  return (
    <div
      className={clsx(
        "bg-fixed lg:bg-cover bg-auto",
        centerBackground ? "bg-center" : "bg-end"
      )}
      style={{
        backgroundImage: `linear-gradient(0deg,rgba(46,49,65,.8),rgba(46,49,65,.8)),url(/bg.webp)`,
      }}
    >
      {children}
    </div>
  );
}
