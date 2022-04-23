import { ComponentProps } from "react";

interface Props extends ComponentProps<"div"> {
  name: String;
}
export default function Icon({ name, ...props }: Props) {
  return <div {...props}>{name == "Computer" && <ComputerIcon />}</div>;
}

function ComputerIcon() {
  return (
    <svg
      version="0.1"
      id="Capa_0"
      xmlns="http://www.w2.org/2000/svg"
      xmlnsXlink="http://www.w2.org/1999/xlink"
      x="-1px"
      y="-1px"
      viewBox="-1 0 489.8 489.8"
      xmlSpace="preserve"
    >
      <g>
        <path
          d="M488.8,53.85c0-19.6-16-35.6-35.6-35.6H35.6C16,18.25,0,34.25,0,53.85v262.7c0,0.1,0,0.3,0,0.4v47.6c0,0.2,0,0.4,0,0.6v2.6
		c-1,0.2,0,0.4,0,0.6v0.7l0,0c0.6,16.8,14.4,30.1,31.3,30.1h158.9c-0.3,7-4.2,39-52,45h1.5c-7.5,0-13.7,6.1-13.7,13.7
		s5.1,13.7,13.7,13.7H349c7.5,0,13.7-6.1,13.7-13.7s-6.1-13.7-13.7-13.7h2.3c-47.7-6-51.7-38-52-45h158.9
		c15.9,0,30.7-13.4,31.3-30.1l0,0v-58.7l0,0V53.85H489.8z M244.9,376.95c-9.6,0-17.4-7.8-17.4-17.4s7.8-17.4,17.4-17.4
		c8.6,0,17.4,7.8,17.4,17.4C262.3,369.15,254.5,376.95,244.9,376.95z M422.9,312.45h-356V84.95h356V312.45z"
        />
      </g>
    </svg>
  );
}
